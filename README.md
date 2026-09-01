# The McNeil Family Tree

An interactive, expandable family tree for the **Neil / McNeil, Inward (Innard), Buck,
Woolley and A'Monge** families — 254 people, transcribed from four typed family-history
sheets held in the family papers.

The tree grows from Stuart John McNeil at the root and branches upward through the
generations; a second view lets you grow any household downward through its descendants.
No build step, no dependencies, no server — two files and a browser.

---

## Publishing it on GitHub

1. Create a new repository on GitHub (public or private), e.g. `mcneil-family-tree`.
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

3. Turn on GitHub Pages: **Settings → Pages → Build and deployment → Source: Deploy from
   a branch**, branch `main`, folder `/ (root)`. Save.
4. A minute later the tree is live at
   `https://<your-username>.github.io/mcneil-family-tree/`.

Private repositories can serve Pages only on a paid GitHub plan; a public repo publishes
free. If you would rather the tree stay off the open web, keep the repo private and open
`index.html` locally — everything works from the file system.

---

## Using it

| | |
|---|---|
| **Click a card** | opens the full record — dates, places, marriage, siblings, children, notes, source sheet |
| **+ / −** | grows or folds the next generation from that person |
| **Grow all** | opens every branch in the current view |
| **Prune** | folds back to the opening view |
| **Search** (or press `/`) | finds anyone by name, place, year or occupation and travels to them, opening the branches on the way |
| **Drag / scroll** | pan and zoom; **Fit** re-centres |
| **Ancestors / Wider family** | switch between growing back from Stuart and growing down from any older couple |

Dashed branches mark a parent link that the sheets *imply* by layout rather than state
outright. Those are the first places worth checking against a certificate or census.

---

## The four source sheets

| Code | Sheet |
|---|---|
| **S1** | Family history of Stuart John McNeil (Neil) — summary sheet |
| **S2** | Maternal family tree of the Neil / Buck / Woolley / A'Monge family |
| **S3** | Innard / Inward family tree 2 — Swanscombe, 1767 |
| **S4** | Innard / Inward family tree 1 — Swanscombe, 1758 |

Everything on the page comes from these. Nothing has been added from outside them.
Where a sheet contradicts itself — a birth year of "1048", a marriage dated before the
bride was born, a death recorded before a birth — the original wording is kept and the
problem is flagged in that person's notes rather than quietly corrected.

Two things are worth knowing before you read the tree:

- **The Neil line stops early.** Thomas George Cyril Neil (b. 1913, Plaistow) is the
  earliest Neil on any sheet; his own parents are not recorded. The deep ancestry runs
  through his wife Elsie Alexandra Inward, back to Samuel Innard of Swanscombe, who
  married in 1758.
- **Inward Tree 2 stands apart.** The second Swanscombe sheet is plainly a related
  cluster of Innards, but the sheets never say how it joins Tree 1. It is browsable in
  the *Wider family* view as its own set of households rather than being spliced onto the
  main line on a guess.

---

## Adding or correcting someone

Everything on the page — the tree, the search, siblings, children, the descendant
explorer — is derived at run time from `data.js`. Editing that file is the only thing you
ever need to do.

A person is one entry:

```js
grandad: {
  n: "Arthur Reginald Inward",     // display name (married surname where known)
  nee: "Smith",                    // maiden name, optional
  b: "3 May 1901 — Swanscombe, Kent",
  m: "1924, St Mary's, Stone",
  d: "1977 — Dartford",
  occ: "Cement worker",            // optional
  sp: "granny",                    // spouse id, or ["first_wife", "second_wife"]
  f: "his_father", mo: "his_mother",
  no: ["Anything worth saying in prose."],
  src: "S4",                       // which sheet it came from
  un: true                         // set only when the parent link is inferred
}
```

Relationships flow in one direction only: a person points at their `f` (father) and
`mo` (mother). Siblings, children and every descendant view are worked out from those
links, so you never have to keep two lists in step.

To add a whole new household to the *Wider family* dropdown, add an entry to
`PROGENITORS` at the bottom of `data.js`.

---

## Files

```
index.html   the page — layout, tree graphics, interaction (no dependencies)
data.js      every person and every relationship
README.md    this file
```

The page uses Google Fonts for its typefaces and falls back cleanly to system serif and
sans-serif if they don't load. Light and dark themes follow the reader's system setting.
