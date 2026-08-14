/*
 * resume.js — pure renderer that turns a JSON Resume object (resume.json)
 * into the plain, traditional single-column resume HTML used by index.html.
 *
 * Design goals:
 *   - No DOM dependency: every function returns an HTML string, so the same
 *     code can be unit-tested in Node and run in the browser.
 *   - Content stays in semantic tags (h1-h4, p, ul/ol/li, dl) so the page
 *     remains ATS-friendly and prints cleanly. Visual styling lives in
 *     styles.css.
 *
 * Schema notes (see resume.json -> meta.x_extensions):
 *   - basics.x_summaryBullets[] : rendered as the Summary section's bullets,
 *     in place of basics.summary (a plain string, kept for ATS consumers).
 *   - work[].highlights[]       : array of plain strings, one <li> each.
 *   - education[].x_summary     : free-text supplemental description.
 *   - volunteer[].x_tag         : parenthetical label next to the position.
 *   - empty endDate ""          : renders as "Present".
 */
(function (root) {
  "use strict";

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

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

  // ---- Header identity (name + contact line) -------------------------------
  function buildHeaderInfoHTML(basics) {
    var loc = basics.location
      ? [basics.location.city, basics.location.region].filter(Boolean).join(", ")
      : "";
    var contactParts = [];
    if (loc) contactParts.push(esc(loc));
    if (basics.phone) {
      contactParts.push('<a class="val-link" href="tel:' +
        attr(basics.phone.replace(/[^+\d]/g, "")) + '">' + esc(basics.phone) + "</a>");
    }
    if (basics.email) {
      contactParts.push('<a class="val-link" href="mailto:' +
        attr(basics.email) + '">' + esc(basics.email) + "</a>");
    }
    var contactLine = contactParts.length
      ? '<p class="resume-contact">' + contactParts.join(' <span class="sep" aria-hidden="true">·</span> ') + "</p>"
      : "";
    var urlLine = basics.url
      ? '<p class="resume-url"><a class="val-link" href="' + attr(basics.url) + '">' +
        esc(basics.url.replace(/^https?:\/\//, "")) + "</a></p>"
      : "";
    return (
      '<h1 class="resume-name">' + esc(basics.name) + "</h1>" +
      (basics.label ? '<p class="resume-label">' + esc(basics.label) + "</p>" : "") +
      contactLine +
      urlLine
    );
  }

  // ---- Section frame: centered bold heading + body -------------------------
  function section(heading, bodyHTML, extraClass) {
    return (
      '<section class="block ' + (extraClass || "") + '">' +
        '<h2 class="block-head">' + esc(heading) + "</h2>" +
        '<div class="block-body">' + bodyHTML + "</div>" +
      "</section>"
    );
  }

  // ---- Summary ---------------------------------------------------------
  function renderSummary(basics) {
    var bullets = basics.x_summaryBullets;
    var body;
    if (bullets && bullets.length) {
      body = '<ul class="summary-list">' +
        bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") +
        "</ul>";
    } else if (basics.summary) {
      body = '<p class="summary-text">' + esc(basics.summary) + "</p>";
    } else {
      return "";
    }
    return section("Summary", body, "block-summary");
  }

  // ---- Core Technologies (skills) --------------------------------------
  function renderSkills(skills) {
    var rows = skills.map(function (s) {
      return (
        '<div class="skill-row">' +
          '<span class="skill-name">' + esc(s.name) + "</span>" +
          '<span class="skill-vals">' + esc(s.keywords.join(", ")) + "</span>" +
        "</div>"
      );
    }).join("");
    return section("Core Technologies", '<div class="skills">' + rows + "</div>", "block-skills");
  }

  // ---- A job/education-style entry head: bold title line + dates ---------
  function entryHead(titleHTML, location, dates) {
    var metaBits = [];
    if (location) metaBits.push(esc(location));
    var left = titleHTML + (metaBits.length ? ' <span class="entry-loc">– ' + metaBits.join(", ") + "</span>" : "");
    return (
      '<div class="entry-head">' +
        '<span class="entry-title">' + left + "</span>" +
        '<span class="entry-dates">' + esc(dates) + "</span>" +
      "</div>"
    );
  }

  function renderHighlights(highlights) {
    if (!highlights || !highlights.length) return "";
    return '<ul class="highlights">' +
      highlights.map(function (h) {
        var text = typeof h === "string" ? h : h.text;
        return "<li>" + esc(text) + "</li>";
      }).join("") +
      "</ul>";
  }

  // ---- Professional Experience ------------------------------------------
  function renderWork(work) {
    var items = work.map(function (job) {
      return (
        '<li class="job">' +
          entryHead("<strong>" + esc(job.name) + "</strong>", job.location, dateRange(job.startDate, job.endDate)) +
          (job.position ? '<p class="entry-role">' + esc(job.position) + "</p>" : "") +
          (job.summary ? '<p class="entry-summary">' + esc(job.summary) + "</p>" : "") +
          renderHighlights(job.highlights) +
        "</li>"
      );
    }).join("");
    return section("Professional Experience", '<ul class="entry-list work-list">' + items + "</ul>", "block-work");
  }

  // ---- Education -----------------------------------------------------------
  function renderEducation(education) {
    var items = education.map(function (e) {
      var degree = [e.studyType, e.area].filter(Boolean).join(" ");
      return (
        '<li class="edu">' +
          entryHead("<strong>" + esc(e.institution) + "</strong>", e.location, fmtDate(e.endDate)) +
          (degree ? '<p class="entry-role">' + esc(degree) + "</p>" : "") +
          (e.x_summary ? '<p class="entry-summary">' + esc(e.x_summary) + "</p>" : "") +
        "</li>"
      );
    }).join("");
    return section("Education", '<ul class="entry-list edu-list">' + items + "</ul>", "block-education");
  }

  // ---- Job-Related Activities and Training (volunteer) ---------------------
  function renderVolunteer(volunteer) {
    var items = volunteer.map(function (v) {
      var tag = v.x_tag ? " (" + v.x_tag + ")" : "";
      var dates = dateRange(v.startDate, v.endDate);
      return (
        "<li>" +
          '<strong>' + esc(v.organization) + "</strong>: " +
          esc(v.position) + esc(tag) + ", " + esc(dates) + ". " +
          esc(v.summary) +
        "</li>"
      );
    }).join("");
    return section("Job-Related Activities and Training", '<ul class="highlights volunteer-list">' + items + "</ul>", "block-volunteer");
  }

  // ---- Top-level document -------------------------------------------------
  function buildResumeHTML(data) {
    var parts = [];
    if (data.basics) parts.push(renderSummary(data.basics));
    if (data.skills && data.skills.length) parts.push(renderSkills(data.skills));
    if (data.work && data.work.length) parts.push(renderWork(data.work));
    if (data.education && data.education.length) parts.push(renderEducation(data.education));
    if (data.volunteer && data.volunteer.length) parts.push(renderVolunteer(data.volunteer));
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
