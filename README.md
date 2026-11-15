# Cult of the Lamb Building & Decoration Cost Reference

Static reference for a Cult of the Lamb player planning their base: what each
building and decoration costs to build, a base planner for summing a planned
layout's total materials, and a reverse lookup by resource.

## Files

- `index.html` — the page (three tabs: All Items, Base Planner, By Resource)
- `data.js` — the sourced dataset (157 items) plus lookup/total helper functions
- `test.js` — headless tests (`node test.js`), 17 checks, all passing
- `README.md` — this file

## Running locally

```
python3 -m http.server 8000
```

then open `http://localhost:8000/`.

## Data

157 rows: 61 functional buildings (Follower / Faith categories) and 96
decorations (General, each DLC pack, Twitch Unlocks, Merch, Blood Moon
Special Events, Paths, and the four Crusade areas — Darkwood, Anura,
Anchordeep, Silk Cradle).

Primary source: cultofthelamb.wiki.gg's "Buildings" page (last edited
29 January 2024), read via archive.org after the live page returned HTTP 410.
Cross-checked against TechRaptor's launch-week (August 2022) Decorations
Guide and Divine Inspiration and Building Guide, both read via archive.org
after the live site returned HTTP 403.

- Costs not stated by any source are shown as **"not published"**, never
  invented.
- Items that are genuinely free (most Paths, two DLC flooring types) are
  shown as **"None"**, kept distinct from "not published."
- Where the two sources disagree on a quantity for the same item in the
  same era (e.g. Mushroom Sculpture, Massive Monster Shrine, several
  Grass/Bone/Spider Silk decoration costs), both readings are shown and the
  row carries a flagged conflict note — one value is never silently picked.
- Where TechRaptor's launch-week figure differs from wiki.gg's current
  figure for the same building (e.g. Sleeping Bag), this is treated as a
  version/patch difference, not a same-era conflict, and is noted as such.
- game8.co, gamepressure.com, and thegamer.com (all named as candidate
  sources in the build charter) were searched but did not surface a static,
  citable buildings/decorations list distinct from the sources above within
  this session's search budget; they were not used.

Full source list, URLs, and caveats are in the page's own "Sources &
caveats" footer — read that before trusting any individual number.

## Scope note

This is an unofficial fan reference. It is not affiliated with Massive
Monster or Devolver Digital, and contains no game art or assets.
