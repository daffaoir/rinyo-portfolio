# daffario.dev

Personal portfolio of Daffario Alexandra, an IT / AI developer who builds internal systems, automations and practical AI for tourism businesses.

Live at [daffario.dev](https://daffario.dev).

## What's inside

- Home with an interactive map of the systems I built at Wisata Bedengan, case studies, experience and contact.
- `/work/[slug]`: one page per case study (problem, what I built, result, tools).
- `/cv`: a printable public CV (no phone number).

All copy lives in `lib/content.ts`, so updating the site means editing one file.

## Stack

Next.js 16 (App Router, fully static), React 19, TypeScript, plain CSS. Deployed on Vercel from `master`.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
