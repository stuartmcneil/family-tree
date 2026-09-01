# The McNeil Family Tree

An interactive family tree for the **Neil / McNeil, Inward (Innard), Buck, Woolley and
A'Monge** families — 254 people, transcribed from four typed family-history sheets held in
the family papers.

Four ways in:

- **Ancestors** — a drawn tree that grows from Stuart John McNeil at the root, back through
  the generations. Click `+` on any card to grow the next one.
- **Wider family** — pick an older couple and grow their descendants downward instead.
- **Families** — every member of each surname, with their dates and places, on one page.
- **Map** — where the family was born and where it died, from Swanscombe to Assam.

No build step, no dependencies, no server, no map tiles. Open `index.html` and it works.

---

## Publishing it on GitHub

1. Create a new repository on GitHub, e.g. `mcneil-family-tree`.
2. Push these files to it:

   ```bash
   cd mcneil-family-tree
   git init
   git add .
   git commit -m "The McNeil family tree"
   git branch -M main
   git remote add origin https://github.com/<your-username>/mcneil-family-tree.git
   git push -u origin main
   ```

3. Turn on GitHub Pages: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch**, branch `main`, folder `/ (root)`. Save.
4. A minute later the tree is live at
   `https://<your-username>.github.io/mcneil-family-tree/`.

Private repositories can serve Pages only on a paid GitHub plan; a public repo publishes
free. If you would rather the tree stayed off the open web, keep the repo private and open
`index.html` locally — everything works from the file system, map included.

---

## Using it

| | |
|---|---|
| **Click a card** | the full record — dates, places, marriage, siblings, children, notes, source sheet |
| **+ / −** | grows or folds the next generation from that person |
| **Grow all** / **Prune** | opens every branch in the current view, or folds back to the opening one |
| **Search** (or press `/`) | finds anyone by name, place, year or occupation and travels to them, opening the branches on the way |
| **Drag / scroll** | pan and zoom anywhere, tree or map; **Fit** re-centres |

Dashed branches mark a parent link the sheets *imply* by layout rather than state outright.
Those are the first places worth checking against a certificate or census.

### Dates

Dates are always labelled, so a lone year is never ambiguous:

**b.** born &nbsp;·&nbsp; **bap.** baptised &nbsp;·&nbsp; **d.** died

Cards and lists show only the year; the full entry — day, hospital, parish, church — is in
each person's record.

### The map

Pins are sized by how many people belong to a place and are split green/rust when a place
saw both births and deaths.

- **Birthplaces / Places of death / Both** — the top toggle.
- **Family filter** — narrow to one surname and watch the Bucks and Woolleys move from
  Bihar and Wiltshire into Kent.
- **World / Britain / Thames-side / India** — jump straight to the parts that matter.
- Zoom past Britain and a **ten-times-finer coastline loads for Britain and Ireland**, so
  Swanscombe, Dartford and the Thames-side parishes sit where they actually are. Place
  names appear as soon as the pins are far enough apart to read.
- Places the sheets record only as a county are drawn as **hollow dashed rings** at the
  county's centre, not as if they were a real address.

39 people have a birthplace on the sheets and 18 a place of death; the rest are recorded as
a bare year, which is simply how the sheets have them. Burials are not mapped — Prialodta
Buck lies at Gresham in Norfolk and Ernest Woolley was buried at sea, both noted in their
records.

---

## The four source sheets

| Code | Sheet |
|---|---|
| **S1** | Family history of Stuart John McNeil (Neil) — summary sheet |
| **S2** | Maternal family tree of the Neil / Buck / Woolley / A'Monge family |
| **S3** | Innard / Inward family tree 2 — Swanscombe, 1767 |
| **S4** | Innard / Inward family tree 1 — Swanscombe, 1758 |

Everything on the page comes from these. Nothing has been added from outside them. Where a
sheet contradicts itself — a birth year of "1048", a marriage dated before the bride was
born, a death recorded before a birth — the original wording is kept and the problem is
flagged in that person's notes rather than quietly corrected.

Two things are worth knowing before you read the tree:

- **The Neil line stops early.** Thomas George Cyril Neil (b. 1913, Plaistow) is the
  earliest Neil on any sheet; his own parents are not recorded. The deep ancestry runs
  through his wife Elsie Alexandra Inward, back to Samuel Innard of Swanscombe, who married
  in 1758.
- **Inward Tree 2 stands apart.** The second Swanscombe sheet is plainly a related cluster
  of Innards, but the sheets never say how it joins Tree 1. It is browsable in the *Wider
  family* view as its own set of households rather than being spliced onto the main line on
  a guess.

---

## Adding or correcting someone

Everything on the page — the tree, the search, the family lists, the map — is derived at run
time from `data.js`. Editing that file is the only thing you ever need to do.

A person is one entry:

```js
grandad: {
  n: "Arthur Reginald Inward",     // display name (married surname where known)
  nee: "Smith",                    // maiden name, optional
  b:   "3 May 1901 — Swanscombe, Kent",
  bap: "June 1901 — St Peter & St Paul, Swanscombe",
  m:   "1924, St Mary's, Stone",
  d:   "1977 — Dartford",
  occ: "Cement worker",            // optional
  sp: "granny",                    // spouse id, or ["first_wife", "second_wife"]
  f: "his_father", mo: "his_mother",
  no: ["Anything worth saying in prose."],
  src: "S4",                       // which sheet it came from
  un: true                         // only when the parent link is inferred
}
```

Relationships flow in one direction: a person points at their `f` (father) and `mo`
(mother). Siblings, children and every descendant view are worked out from those links, so
you never have to keep two lists in step.

**Places look after themselves.** Birth and death places are found by scanning the `b`,
`bap` and `d` text for the aliases in the `PLACES` gazetteer at the bottom of `data.js` — so
writing "— Swanscombe" in a birth line is enough to put someone on the map. To add a place
that isn't there yet, add one line to `PLACES` with its latitude and longitude; put it
*above* the county-level fallbacks, since the first alias found in the text wins. Where a
place appears only in the notes, set `bp:` or `dp:` on the person to a place key by hand.

To add a household to the *Wider family* dropdown, add an entry to `PROGENITORS`. To change
which surnames each **Families** tab collects, edit `FAMILIES` — a person counts under both
the name they carried and the name they were born with, so a married woman appears in two.

---

## Files

```
index.html   the page — layout, tree graphics, families, map, interaction
data.js      every person, the place gazetteer, the family definitions
world.js     world coastlines, simplified from Natural Earth 50m (~300 KB)
britain.js   Britain and Ireland at 10m detail (~220 KB)
README.md    this file
```

`world.js` loads the first time you open the Map tab, and `britain.js` only when you zoom
in past Britain — so the tree itself stays instant. Both are plain arrays of SVG paths in an
equirectangular projection; no mapping library is involved and nothing is fetched from a
tile server, which is also why the map works offline and from a `file://` URL.

Coastline outlines are derived from [Natural Earth](https://www.naturalearthdata.com/)
public-domain data via the `world-atlas` package. The page uses Google Fonts for its
typefaces and falls back cleanly to system serif and sans-serif if they don't load. Light
and dark themes follow the reader's system setting.
