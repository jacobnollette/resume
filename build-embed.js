/*
 * build-embed.js — regenerates resume-embed.js from resume.json.
 *
 * Why: index.html loads resume.json with fetch(), which works on any web
 * server (and GitHub Pages) but is blocked by browsers for file:// URLs.
 * resume-embed.js assigns the same data to window.__RESUME__ via a plain
 * <script> tag (not subject to the fetch/CORS restriction), so the page also
 * works when opened directly from disk by double-clicking.
 *
 * resume.json stays the single source of truth. Run this whenever you edit it
 * if you want the local file:// preview to match:  node build-embed.js
 * (Not required for the deployed site — that path uses fetch.)
 */
const fs = require("fs");
const path = require("path");

const dir = __dirname;
const raw = fs.readFileSync(path.join(dir, "resume.json"), "utf8");
JSON.parse(raw); // validate before embedding

const out =
  "// AUTO-GENERATED from resume.json by build-embed.js — do not edit by hand.\n" +
  "window.__RESUME__ = " + raw.trim() + ";\n";

fs.writeFileSync(path.join(dir, "resume-embed.js"), out);
console.log("wrote resume-embed.js (" + out.length + " bytes)");
