# CodeBank

A personal reference for programming snippets, guides, and solutions. Browse by language or concept, search, and favorite topics. Live at [codebank.live](https://codebank.live).

**Stack:** React 19, TypeScript, React Router, Tailwind CSS. Bootstrapped with Create React App.

## Run locally

```bash
npm install
npm start
```

Opens [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
npm run build
```

Output is in `build/`. To deploy to GitHub Pages:

```bash
npm run deploy
```

Uses `gh-pages` and the `homepage` URL in `package.json` (e.g. `https://codebank.live`).

## Project structure

- **`src/pages/`** — Route pages (home, JavaScript, React, CSS, etc.).
- **`src/data/`** — Content and config: `homeTopics.ts` defines homepage topics and their routes; language-specific folders (e.g. `javascript/`, `react/`) hold snippet data per section.
- **`src/components/`** — Shared UI (CodeCard, SidePanel, PageLayout, CodeBlock, etc.).
- **`src/config/`** — App-wide config (if added). Topic list and routes are the single source of truth in `src/data/homeTopics.ts`.

Adding a new topic: add an entry (with `route`) to `LANGUAGE_TOPICS` in `src/data/homeTopics.ts`, then add the corresponding `<Route>` and lazy page in `App.tsx`.
