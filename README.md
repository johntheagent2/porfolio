# Portfolio — Cao Đức Phát

A single-page portfolio built with [Astro](https://astro.build). Your career is shown as an event stream:
each job/project is a "record" with an offset, and the page reads like a terminal consuming that topic.

## Run it

```sh
npm install
npm run dev       # http://localhost:4321, reloads as you edit
npm run build     # outputs static files to dist/
```

## Where things live

| What | File |
|---|---|
| Name, tagline, about text, skills, education, contact | `src/data/profile.ts` |
| Jobs / projects (one file each) | `src/content/experience/*.md` |
| Extra Markdown sections | `src/content/sections/*.md` |
| Component sections and their order | `src/data/sections.ts` |
| Colours, fonts, type scale | `src/styles/global.css` (top of file) |
| CV PDF | `public/cv/Cao-Duc-Phat-CV.pdf` |

## Add or update an experience

Create a file in `src/content/experience/`, e.g. `2026-05-acme-payments.md`:

```md
---
company: Acme
project: Payments platform
role: Senior engineer        # optional
start: 2026-05               # YYYY-MM
# end: 2027-01               # leave out while it's your current work
order: 0                     # only matters if two records share a start month
stack: [C#, Kafka, Azure]
summary: One sentence that appears in the hero stream.
---

- Responsibility or achievement.
- Another one.
```

Records are sorted by `start` automatically and the offsets (0, 1, 2…) are assigned for you.
If a field is missing or a date is in the wrong format, `npm run build` tells you exactly which file and field.

## Add a section

**Plain text (fastest):** copy `src/content/sections/_template.md` to e.g. `projects.md`, set `title`,
`command` and `order`, and write Markdown. It appears on the page, in the nav bar and as a command-bar command.

**Custom layout:** create `src/sections/Projects.astro` (use `About.astro` as a starting point; keep the
`<section class="section" id="…">` wrapper and the `SectionHeading`), then add one line to `src/data/sections.ts`.

## Deploy

The build output in `dist/` is static, so it works on GitHub Pages, Netlify, Vercel or Cloudflare Pages.
For GitHub Pages at `https://johntheagent2.github.io`, set `site` in `astro.config.mjs` and follow
Astro's guide: https://docs.astro.build/en/guides/deploy/github/
