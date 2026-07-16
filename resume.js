/*
 * resume.js — pure renderer that turns a JSON Resume object (resume.json)
 * into the editorially-typeset, JSON-structured HTML used by index.html.
 *
 * Design goals:
 *   - No DOM dependency: every function returns an HTML string, so the same
 *     code can be unit-tested in Node and run in the browser.
 *   - Content stays in semantic tags (h1-h4, p, ul/ol/li, dl) so the page
 *     remains ATS-friendly and prints cleanly. The "JSON" look is carried by
 *     styles.css plus a thin layer of decorative, aria-hidden punctuation.
 *
 * Schema notes (see resume.json -> meta.x_extensions):
 *   - work[].x_groups[]    : { name, highlights[] } sub-headed bullet groups.
 *   - work[].highlights[]  : string | { text, notes[] } (notes = sub-bullets).
 *   - empty endDate ""     : renders as "Present".
 */
(function (root) {
  "use strict";

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Escape only the characters that are unsafe in HTML *text*. Apostrophes are
  // intentionally left untouched (valid in text), and no escaped entity below
  // contains a digit — which keeps any future token highlighting safe.
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Escape for use inside a double-quoted HTML attribute.
  function attr(s) {
    return esc(s);
  }

  // "2022-02" -> "Feb 2022"; "2020" -> "2020"; "" / null -> "Present".
  function fmtDate(value) {
    if (!value) return "Present";
    var m = /^(\d{4})-(\d{2})$/.exec(value);
    if (m) {
      var idx = parseInt(m[2], 10) - 1;
      return (MONTHS[idx] || m[2]) + " " + m[1];
    }
    return String(value);
  }

  function dateRange(start, end) {
    var s = start ? fmtDate(start) : "";
    var e = fmtDate(end); // "" -> "Present"
    if (s && e) return s + " – " + e; // en dash
    return s || e;
  }

  // Decorative punctuation span (hidden from assistive tech / ATS).
  function punc(text, cls) {
    return '<span class="punc ' + cls + '" aria-hidden="true">' + text + "</span>";
  }

  var COMMA = '<span class="punc comma" aria-hidden="true">,</span>';

  // ---- Section frame: "key": <open> ...body... <close> --------------------
  function section(key, bodyHTML, open, close, extraClass) {
    return (
      '<section class="block ' + (extraClass || "") + '">' +
        '<div class="block-head">' +
          '<span class="key">' + esc(key) + "</span>" +
          punc(":", "colon") +
          " " +
          punc(open, "bracket open") +
        "</div>" +
        '<div class="block-body">' + bodyHTML + "</div>" +
        punc(close, "bracket close") +
      "</section>"
    );
  }

  // ---- Highlights (array of strings or {text, notes[]}) -------------------
  function renderNote(note) {
    var m = /^([^:]{2,42}):\s+([\s\S]+)$/.exec(note);
    if (m) {
      return (
        '<li class="note">' +
          punc("↳", "subdash") +
          '<span class="note-key">' + esc(m[1]) + "</span>" +
          punc(":", "colon") + " " +
          '<span class="note-text">' + esc(m[2]) + "</span>" +
        "</li>"
      );
    }
    return (
      '<li class="note">' +
        punc("↳", "subdash") +
        '<span class="note-text">' + esc(note) + "</span>" +
      "</li>"
    );
  }

  function renderHighlight(h) {
    if (typeof h === "string") {
      return (
        '<li class="hl">' +
          punc("—", "dash") +
          '<span class="hl-text">' + esc(h) + "</span>" +
        "</li>"
      );
    }
    var notes = (h.notes || []).map(renderNote).join("");
    return (
      '<li class="hl">' +
        punc("—", "dash") +
        '<span class="hl-text">' + esc(h.text) + "</span>" +
        (notes ? '<ul class="notes">' + notes + "</ul>" : "") +
      "</li>"
    );
  }

  function renderHighlights(highlights) {
    return '<ul class="highlights">' + highlights.map(renderHighlight).join("") + "</ul>";
  }

  function renderGroups(groups) {
    return groups.map(function (g) {
      return (
        '<div class="group">' +
          '<h4 class="group-name"><span class="key">' + esc(g.name) + "</span>" +
            punc(":", "colon") + " " + punc("[", "bracket open") + "</h4>" +
          renderHighlights(g.highlights) +
          punc("]", "bracket close") +
        "</div>"
      );
    }).join("");
  }

  // ---- Sections -----------------------------------------------------------
  function renderSummary(summary) {
    return (
      '<section class="block block-summary">' +
        '<div class="block-head">' +
          '<span class="key">summary</span>' + punc(":", "colon") + " " +
        "</div>" +
        '<p class="str summary-text">' + esc(summary) + "</p>" +
      "</section>"
    );
  }

  function renderSkills(skills) {
    var rows = skills.map(function (s, i) {
      var kws = s.keywords.map(function (k, j) {
        // Comma stays *inside* the <li> (after the quoted value) so the list
        // contains only <li> children — valid markup, stable comma placement.
        return '<li class="kw"><span class="str">' + esc(k) + "</span>" +
          (j < s.keywords.length - 1 ? COMMA : "") + "</li>";
      }).join("");
      return (
        '<div class="skill-row">' +
          '<dt class="skill-key"><span class="key">' + esc(s.name) + "</span>" +
            punc(":", "colon") + " " + punc("[", "bracket open") + "</dt>" +
          '<dd class="skill-vals"><ul class="kw-list">' + kws + "</ul>" +
            // Bracket and trailing comma share one span so the flex gap in
            // .skill-vals never separates them or wraps the comma alone.
            punc(i < skills.length - 1 ? "]," : "]", "bracket close") +
          "</dd>" +
        "</div>"
      );
    }).join("");
    return section("competencies", '<dl class="skills">' + rows + "</dl>", "{", "}", "block-skills");
  }

  function renderWork(work) {
    var items = work.map(function (job, i) {
      var inner = "";
      if (job.x_groups && job.x_groups.length) {
        inner = renderGroups(job.x_groups);
      } else if (job.highlights && job.highlights.length) {
        inner = renderHighlights(job.highlights);
      }
      var summary = job.summary ? '<p class="str job-summary">' + esc(job.summary) + "</p>" : "";
      return (
        '<li class="job">' +
          punc("{", "brace open") +
          '<div class="job-head">' +
            '<h3 class="job-role">' +
              '<span class="str job-position">' + esc(job.position) + "</span>" +
              punc("@", "at") +
              '<span class="job-company">' + esc(job.name) + "</span>" +
            "</h3>" +
            '<div class="job-meta">' +
              (job.location ? '<span class="job-loc">' + esc(job.location) + "</span>" : "") +
              (job.location ? punc("·", "sep") : "") +
              '<span class="job-dates">' + dateRange(job.startDate, job.endDate) + "</span>" +
            "</div>" +
          "</div>" +
          summary +
          inner +
          punc("}", "brace close") +
          (i < work.length - 1 ? COMMA : "") +
        "</li>"
      );
    }).join("");
    return section("experience", '<ol class="work-list">' + items + "</ol>", "[", "]", "block-work");
  }

  function renderProjects(projects) {
    var items = projects.map(function (p, i) {
      return (
        '<li class="project">' +
          punc("{", "brace open") +
          '<h3 class="project-name str">' + esc(p.name) + "</h3>" +
          (p.description ? '<p class="project-desc str">' + esc(p.description) + "</p>" : "") +
          punc("}", "brace close") +
          (i < projects.length - 1 ? COMMA : "") +
        "</li>"
      );
    }).join("");
    return section("deepDives", '<ul class="project-list">' + items + "</ul>", "[", "]", "block-projects");
  }

  function renderEducation(education) {
    var items = education.map(function (e, i) {
      var degree = [e.studyType, e.area].filter(Boolean).join(" — ");
      var meta = [e.institution, e.endDate].filter(Boolean).join(" · ");
      var sum = e.x_summary ? '<p class="edu-summary str">' + esc(e.x_summary) + "</p>" : "";
      return (
        '<li class="edu">' +
          punc("{", "brace open") +
          '<h3 class="edu-degree">' + esc(degree) + "</h3>" +
          '<div class="edu-meta">' + esc(meta) + "</div>" +
          sum +
          punc("}", "brace close") +
          (i < education.length - 1 ? COMMA : "") +
        "</li>"
      );
    }).join("");
    return section("education", '<ul class="edu-list">' + items + "</ul>", "[", "]", "block-education");
  }

  // ---- Header identity object (name + contact basics) ---------------------
  // The trailing comma stays *inside* the .kv span (which is white-space:
  // nowrap), so flex wrapping in .basics-kvs can only break between complete
  // "key": value, units — never between a value and its comma.
  function kv(k, valHTML, withComma) {
    return (
      '<span class="kv">' +
        '<span class="key">' + esc(k) + "</span>" +
        punc(":", "colon") + " " +
        valHTML +
        (withComma ? COMMA : "") +
      "</span>"
    );
  }

  function buildHeaderInfoHTML(basics) {
    var loc = basics.location
      ? [basics.location.city, basics.location.region].filter(Boolean).join(", ")
      : "";
    var kvs = [];
    if (basics.email) {
      kvs.push(["email",
        '<a class="str val-link" href="mailto:' + attr(basics.email) + '">' + esc(basics.email) + "</a>"]);
    }
    if (basics.phone) {
      kvs.push(["phone",
        '<a class="str val-link" href="tel:' + attr(basics.phone.replace(/[^+\d]/g, "")) + '">' +
        esc(basics.phone) + "</a>"]);
    }
    if (loc) {
      kvs.push(["location", '<span class="str">' + esc(loc) + "</span>"]);
    }
    if (basics.url) {
      kvs.push(["url",
        '<a class="str val-link" href="' + attr(basics.url) + '">' +
        esc(basics.url.replace(/^https?:\/\//, "")) + "</a>"]);
    }
    var joined = kvs.map(function (pair, i) {
      return kv(pair[0], pair[1], i < kvs.length - 1);
    }).join("");
    return (
      '<h1 class="resume-name">' + esc(basics.name) + "</h1>" +
      (basics.label ? '<p class="resume-label str">' + esc(basics.label) + "</p>" : "") +
      '<div class="basics-obj">' +
        punc("{", "brace open") +
        '<div class="basics-kvs">' + joined + "</div>" +
        punc("}", "brace close") +
      "</div>"
    );
  }

  // ---- Top-level document -------------------------------------------------
  function buildResumeHTML(data) {
    var parts = [];
    parts.push('<div class="doc">');
    parts.push(punc("{", "doc-brace doc-open"));
    if (data.basics && data.basics.summary) parts.push(renderSummary(data.basics.summary));
    if (data.skills && data.skills.length) parts.push(renderSkills(data.skills));
    if (data.work && data.work.length) parts.push(renderWork(data.work));
    if (data.projects && data.projects.length) parts.push(renderProjects(data.projects));
    if (data.education && data.education.length) parts.push(renderEducation(data.education));
    parts.push(punc("}", "doc-brace doc-close"));
    parts.push("</div>");
    return parts.join("\n");
  }

  var api = {
    esc: esc,
    fmtDate: fmtDate,
    dateRange: dateRange,
    buildHeaderInfoHTML: buildHeaderInfoHTML,
    buildResumeHTML: buildResumeHTML
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.Resume = api;
  }
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));
