# CodeBank improvement plan — small branches, small commits

Work through in order. For each branch: **complete → commit → push**. Merge on GitHub (or locally) when ready.

**Base branch:** `master`

---

## 1. `fix/homepage-memo`

**Goal:** Fix React hooks: `languageTopics` recreated every render breaks `useMemo` deps.

**What to do:**
- Move `languageTopics` into a `useMemo` with empty deps, or into a constant in a separate file (e.g. `src/data/homeTopics.ts`).
- Ensures categories, categoryStats, and filteredTopics don’t recompute unnecessarily.

**Commit message:** `fix: stabilize languageTopics so useMemo deps are correct`

---

## 2. `fix/meta-seo`

**Goal:** Point meta tags at the real site.

**What to do:**
- In `public/index.html`: set `og:url` and `twitter:url` to `https://codebank.live/`.
- Optionally set `theme-color` to match your green accent if desired.

**Commit message:** `fix: set og and twitter URLs to codebank.live`

---

## 3. `fix/mobile-typography`

**Goal:** Stop forcing tiny headings on small screens.

**What to do:**
- In `src/index.css`, remove or relax the `@media (max-width: 640px)` block that sets `h1`/`h2`/`h3` to very small sizes (e.g. 0.75rem). Use readable sizes instead (e.g. min 1rem for body, proportional headings).

**Commit message:** `fix: improve mobile heading sizes for readability`

---

## 4. `feat/loading-state`

**Goal:** Replace plain “Loading...” with a simple branded fallback.

**What to do:**
- In `App.tsx`, replace the Suspense fallback with a minimal loader: e.g. “CodeBank” + spinner or skeleton, same green-on-black theme. No new dependencies if possible (CSS only or inline SVG).

**Commit message:** `feat: add branded loading fallback for lazy routes`

---

## 5. `refactor/single-source-topics`

**Goal:** One source of truth for topics and routes.

**What to do:**
- Add `src/config/topics.ts` (or similar): export a single array of topic objects that include both display fields (title, description, category, icon, color, topics[]) and **route/slug**.
- HomePage reads from this config; `routeMap` is derived (e.g. `topic.slug` or `topic.route`).
- Ensures new topics only need to be added in one place.

**Commit message:** `refactor: single source of truth for topics and routes`

---

## 6. `docs/readme`

**Goal:** Replace CRA boilerplate with a short project README.

**What to do:**
- Update `README.md`: what CodeBank is, how to run (`npm install`, `npm start`), how to build/deploy (`npm run build`, `npm run deploy`), and optionally how content is structured (`src/data/`, topics config).

**Commit message:** `docs: add project README for CodeBank`

---

## 7. `a11y/card-semantics` (optional)

**Goal:** Better accessibility for topic cards.

**What to do:**
- In `CodeCard`, use a link (`<Link to={route}>`) for the main action instead of a clickable div with `role="button"`. Keep the card as a wrapper (e.g. `article`) and the star button as-is. Improves screen reader and keyboard behavior.

**Commit message:** `a11y: use link for topic cards instead of button`

---

## 8. `feat/code-block-copy` (optional)

**Goal:** Copy snippet to clipboard.

**What to do:**
- In `CodeBlock`, add a “Copy” button that copies `code` to the clipboard (e.g. `navigator.clipboard.writeText`). Optional: show “Copied!” feedback.

**Commit message:** `feat: add copy button to code blocks`

---

## Order summary

| # | Branch                  | Type    | Priority   |
|---|-------------------------|---------|------------|
| 1 | fix/homepage-memo       | fix     | Do first   |
| 2 | fix/meta-seo            | fix     | Do second  |
| 3 | fix/mobile-typography   | fix     | Do third   |
| 4 | feat/loading-state      | feat    | Then       |
| 5 | refactor/single-source-topics | refactor | Then   |
| 6 | docs/readme             | docs    | Then       |
| 7 | a11y/card-semantics     | a11y    | Optional   |
| 8 | feat/code-block-copy    | feat    | Optional   |

---

## Workflow reminder

```bash
git checkout master
git pull
git checkout -b fix/homepage-memo
# ... make changes ...
git add -A
git commit -m "fix: stabilize languageTopics so useMemo deps are correct"
git push -u origin fix/homepage-memo
# Open PR on GitHub, merge when ready. Then:
git checkout master
git pull
# Next branch from master:
git checkout -b fix/meta-seo
# ...
```

You can tick off branches in this file as you merge them (e.g. add `- [x]` next to each heading).
