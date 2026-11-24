# daffario.dev

Personal portfolio of Daffario Alexandra, an IT / AI developer who builds internal systems, automations and practical AI for tourism businesses.

Live at [daffario.dev](https://daffario.dev).

## What's inside

- Home: short intro, key facts, five project cards with animated illustrations (hover shows a real screen), experience, toolkit and contact.
- `/work/[slug]`: one page per project with role and period, a screens gallery (click to enlarge), the problem, what I built, outcome and next steps.
- `/cv`: a printable public CV (no phone number).
- Light and dark theme (follows the system until you pick one), live Malang clock, reduced-motion support.

All copy lives in `lib/content.ts`, so updating the site means editing one file. Screens live in `public/work/<slug>/` and use sample data only. The illustrations are in `app/scenes.tsx`.

## Stack

Next.js 16 (App Router, fully static), React 19, TypeScript, plain CSS. Deployed on Vercel from `master`.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
