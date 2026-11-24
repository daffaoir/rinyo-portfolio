// Every claim and number here comes from the 2026-11-24 interview
// (docs/plans/2026-11-24-portfolio-redesign.md). Do not add figures that are not there.

export const profile = {
  name: "Daffario Alexandra",
  fullName: "Daffario Alexandra Agung Pradana",
  role: "IT / AI developer",
  location: "Malang, Indonesia",
  availability: "Open to IT / AI developer roles. Remote first, happy to relocate to Bali.",
  email: "daffarioalexandra@gmail.com",
  github: "https://github.com/daffaoir",
  linkedin: "https://linkedin.com/in/daffarioalexandra",
  /** Full Instagram URL. Leave empty to hide the link. */
  instagram: "",
  /** Path under /public, e.g. "/me.jpg". Leave empty to show initials. */
  photo: "",
  headline: "I build the internal tools a business runs on,",
  headlineRest: "and put AI where it takes real work off people's hands.",
  intro:
    "Most recently I was the only IT person at a nature-tourism destination, where I put the whole back office behind one sign-in. I also build systems for a travel agency, a swimming club and my own products.",
  cvIntro:
    "IT / AI developer who builds internal tools, integrations and practical AI for small businesses. Most recently the sole IT staff at a nature-tourism destination with 63 staff, where I put ticket counters, accounting, HR, finance and documents behind one sign-in in under three months.",
};

export const facts = [
  { value: 10, suffix: "+", label: "internal apps behind one sign-in" },
  { text: "< 3 months", label: "from scattered tools to one live stack" },
  { value: 63, suffix: "", label: "staff on the systems I built" },
] as const;

export type Status = "live" | "in use" | "prototype";
export type Scene = "bedengan" | "bunga" | "swim" | "kasly" | "hermes";

export type Screen = {
  src: string;
  alt: string;
  caption: string;
  device: "desktop" | "phone";
  /** Label shown in the browser bar. */
  bar?: string;
};

export type Service = { name: string; status: Status; detail: string; stack: string[] };

export type Study = {
  slug: string;
  scene: Scene;
  title: string;
  org: string;
  cardMeta: string;
  status?: Status;
  /** One line on the home card. */
  summary: string;
  /** Opening paragraph on the case page. */
  intro: string;
  meta: { label: string; value: string }[];
  problem: string;
  services?: Service[];
  built?: string[];
  outcome: string[];
  next: string;
  stack: string[];
  screens: Screen[];
  /** Shown when there are no screens. */
  screensNote?: string;
  link?: { href: string; label: string };
};

export const studies: Study[] = [
  {
    slug: "bedengan",
    scene: "bedengan",
    title: "The whole back office of a nature-tourism destination, behind one sign-in",
    org: "Wisata Bumi Perkemahan Bedengan, Malang",
    cardMeta: "Wisata Bedengan · Jul – Nov 2026",
    summary:
      "Sole IT staff for 63 people. Ten services, from ticket counters and accounting to documents, a staff app hub and an AI assistant.",
    intro:
      "A campsite and nature destination with 63 staff ran its ticket counters, rentals, accounting, HR and documents in separate places with separate passwords. As the only IT person, I connected them into one stack.",
    meta: [
      { label: "Role", value: "Sole IT staff" },
      { label: "Period", value: "Jul – Nov 2026" },
      { label: "Core live in", value: "Under 3 months" },
      { label: "Users", value: "63 staff" },
    ],
    problem:
      "Every new tool added another login. Cashier sales were retyped into the books, documents lived in a shared drive with no clear access rules, and nobody had a full picture of the operation.",
    services: [
      { name: "Single sign-on", status: "live", detail: "Authentik in front of every internal app. Access is decided by department group, so a cashier and an accountant see different apps after the same sign-in.", stack: ["Authentik", "OIDC", "Caddy"] },
      { name: "Ticket & rental counters, accounting, HR", status: "live", detail: "Odoo 19 for the ticket and rental POS counters, Indonesian accounting and HR, with custom modules where the defaults did not fit.", stack: ["Odoo 19", "Python", "PostgreSQL"] },
      { name: "Finance system", status: "live", detail: "An in-house finance app. Cashier sales arrive automatically through a queue, so nobody retypes daily takings.", stack: ["Laravel", "Webhooks"] },
      { name: "Document management", status: "live", detail: "Replaced Nextcloud. A structure of 572 folders with access set per role, and company documents imported into it.", stack: ["Laravel", "Angular"] },
      { name: "Cashier POS integration", status: "live", detail: "A colleague built the offline-first cashier POS. I connected it to company sign-in and to the finance system, and kept it working when the connection drops.", stack: ["Dexie", "SQLite", "SSO"] },
      { name: "Asset inventory", status: "live", detail: "QR labels on every asset, scanned from a phone to check location and condition.", stack: ["QR", "PWA"] },
      { name: "Staff roster & operations", status: "live", detail: "A staff-built roster tool could not be patched safely, so I rebuilt it as a proper service that reads employee data straight from Odoo and generates a month of shifts in one click.", stack: ["Next.js", "Odoo data gateway"] },
      { name: "App Hub for staff-built apps", status: "live", detail: "Staff publish tools they build with AI coding assistants to their own subdomain, through an MCP server. Automatic checks, sandboxed runners and company sign-in sit in front of every app. Two to three staff apps went live.", stack: ["MCP", "TypeScript", "Docker"] },
      { name: "WhatsApp assistant", status: "prototype", detail: "Visitors' questions answered from the team's own documents, with hand-over to a person in the shared inbox. Tested with colleagues, not launched before I left.", stack: ["n8n", "Gemini", "Chatwoot", "WAHA"] },
      { name: "Public website", status: "live", detail: "wisatabedengan.com in Indonesian and English, served from the same server.", stack: ["Astro", "Caddy"] },
    ],
    outcome: [
      "Staff sign in once and see only the apps their department needs.",
      "Cashier sales flow into the finance system instead of being retyped.",
      "Company documents moved into one system with access set per role.",
      "Two to three apps built by non-IT staff went live through the App Hub.",
    ],
    next: "Launch the WhatsApp assistant with the customer service team, and add a weekly report that pulls ticket sales, finance and roster data into one page for management.",
    stack: ["Authentik", "Odoo 19", "Laravel", "Angular", "Next.js", "Astro", "n8n", "Docker", "Caddy", "restic"],
    screens: [
      { src: "/work/bedengan/roster.jpg", alt: "Monthly staff roster with colour-coded shifts", caption: "Staff roster: a month of shifts generated in one click (sample names).", device: "desktop", bar: "operasional" },
      { src: "/work/bedengan/leave-m.jpg", alt: "Staff leave request on a phone", caption: "Staff check their schedule and request leave from a phone.", device: "phone" },
      { src: "/work/bedengan/pos.jpg", alt: "Cashier POS with ticket and parking items", caption: "Cashier POS, connected to sign-in and finance.", device: "desktop", bar: "pos" },
      { src: "/work/bedengan/dms.jpg", alt: "Document management folder browser", caption: "Document management with folders per department.", device: "desktop", bar: "dms" },
      { src: "/work/bedengan/web.jpg", alt: "wisatabedengan.com home page", caption: "The public website.", device: "desktop", bar: "wisatabedengan.com" },
      { src: "/work/bedengan/web-m.jpg", alt: "wisatabedengan.com on a phone", caption: "The website on a phone.", device: "phone" },
    ],
    link: { href: "https://wisatabedengan.com", label: "wisatabedengan.com" },
  },
  {
    slug: "bunga-wisata",
    scene: "bunga",
    title: "From quotation to invoice in one dashboard",
    org: "Bunga Wisata, tour and travel agency (family business)",
    cardMeta: "Bunga Wisata · travel agency",
    status: "in use",
    summary: "Replaced Excel macros. 10 to 30 quotations and invoices a month.",
    intro:
      "A tour and travel agency moved from Excel macros and Apps Script to one dashboard for quotations, invoices, payments and trip schedules.",
    meta: [
      { label: "Client", value: "Family business" },
      { label: "Users", value: "2–3 staff" },
      { label: "Volume", value: "10–30 docs / month" },
      { label: "Year", value: "2026" },
    ],
    problem:
      "Quotations lived in an Excel VBA file that kept freezing, invoices in a separate Google Sheet, and the team learned about changes by asking each other.",
    built: [
      "A dashboard for quotations, invoices, payments and receipts that exports PDFs matching the old templates.",
      "An events calendar created straight from an accepted quotation.",
      "WhatsApp group notifications with the PDF attached, sent through a self-hosted gateway.",
      "A read-only AI agent in the same group that answers questions like upcoming trips or unpaid invoices.",
      "A bilingual company website on Cloudflare Workers, with every call to action going to WhatsApp.",
    ],
    outcome: [
      "Two legacy tools retired in favour of one dashboard.",
      "The team of two to three sends 10 to 30 quotations and invoices through it each month.",
      "Daily encrypted database backups, restored in CI before they are kept.",
    ],
    next: "Let the AI agent draft a quotation from a chat message, with a person approving it before anything is sent.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Auth.js", "react-pdf", "GOWA", "Cloudflare Workers"],
    screens: [
      { src: "/work/bunga-wisata/quotation.jpg", alt: "Quotation detail with a PDF preview", caption: "A quotation with a live print preview of the PDF (sample data).", device: "desktop", bar: "dashboard · quotation" },
      { src: "/work/bunga-wisata/mobile.jpg", alt: "Dashboard on a phone", caption: "The team dashboard on a phone.", device: "phone" },
    ],
    link: { href: "https://bungawisata.co.id", label: "bungawisata.co.id" },
  },
  {
    slug: "bk-swim",
    scene: "swim",
    title: "A swimming club run from one app",
    org: "BK Swim, Malang (client)",
    cardMeta: "BK Swim · client",
    status: "live",
    summary: "Management, coaches and parents. Live since November 2026.",
    intro:
      "A progressive web app for a swimming club's management, coaches and parents, sold to the club and live since November 2026.",
    meta: [
      { label: "Client", value: "Swimming club" },
      { label: "Roles", value: "Management, coaches, parents" },
      { label: "Live since", value: "November 2026" },
      { label: "Platform", value: "Installable web app" },
    ],
    problem: "Registrations, schedules, attendance and monthly fees were tracked by hand and in chat threads.",
    built: [
      "Separate views for management, coaches and parents, installable on a phone.",
      "Online registration with swimming experience and package interest.",
      "Attendance and session notes taken by coaches right after each session.",
      "Monthly sessions and bills generated by a daily scheduled job that catches up if a day is missed.",
      "Coach payroll, progress evaluations and a management dashboard for income, unpaid fees and attendance.",
    ],
    outcome: [
      "In use by the club since November 2026, with documented backups and a client handbook.",
    ],
    next: "Confirm payments automatically instead of checking uploaded transfer proofs by hand.",
    stack: ["Next.js", "React", "Supabase", "Tailwind", "PWA"],
    screens: [
      { src: "/work/bk-swim/dashboard.jpg", alt: "Owner dashboard with income and attendance charts", caption: "Management dashboard: income, unpaid fees and attendance (demo data).", device: "desktop", bar: "owner dashboard" },
      { src: "/work/bk-swim/attendance.jpg", alt: "Coach taking attendance on a phone", caption: "A coach takes attendance after a session.", device: "phone" },
    ],
  },
  {
    slug: "kasly",
    scene: "kasly",
    title: "Log spending by snapping a receipt",
    org: "Kasly (own product)",
    cardMeta: "Kasly · own product",
    status: "in use",
    summary: "AI reads receipts and QRIS screenshots. Used daily by me and a few friends.",
    intro:
      "A personal finance app where you add transactions by photographing a receipt, sharing a QRIS screenshot or typing a sentence.",
    meta: [
      { label: "Type", value: "Own product" },
      { label: "Users", value: "Me and a few friends" },
      { label: "Platform", value: "Installable web app" },
      { label: "Year", value: "2026" },
    ],
    problem: "Most people stop tracking expenses because typing every purchase is tedious.",
    built: [
      "AI that reads receipts and QRIS screenshots, or plain text like \"coffee 25k this morning\", and fills in the transaction.",
      "Automatic categories, budgets, split bills, recurring transactions and bank statement import.",
      "Multiple wallets, Indonesian and English, installable on the phone.",
    ],
    outcome: ["Used daily by me and a small group of friends."],
    next: "A free tier with a monthly AI quota, and an app-store version built from the same code.",
    stack: ["React", "TypeScript", "Supabase Edge Functions", "pg_cron", "PWA"],
    screens: [],
    screensNote: "The app holds real people's finances, so this page shows the flow as an illustration.",
    link: { href: "https://mykasly.vercel.app", label: "mykasly.vercel.app" },
  },
  {
    slug: "hermes-hq",
    scene: "hermes",
    title: "A team of AI agents in one Discord server",
    org: "Hermes HQ (own project)",
    cardMeta: "Hermes HQ · own project",
    summary: "One agent per channel, each with only the tools it needs.",
    intro:
      "A Discord hub where each channel is a specialised agent: a daily assistant, server operations, monitoring of client sites and backups, and nutrition logging for friends.",
    meta: [
      { label: "Type", value: "Own project" },
      { label: "Agents", value: "One per channel" },
      { label: "Runs on", value: "A Linux VPS" },
      { label: "Year", value: "2026" },
    ],
    problem: "Checking servers, client sites and backups by hand every day does not scale when you look after several systems alone.",
    built: [
      "One gateway and one agent profile per channel, each with only the tools it needs.",
      "Scheduled jobs for briefings, uptime and backup checks.",
      "A food-logging agent shared with friends that estimates nutrition from Indonesian food data.",
    ],
    outcome: ["Routine checks arrive as messages instead of chores."],
    next: "Give every scheduled job a fallback model, so briefings keep running when one provider goes down.",
    stack: ["Hermes Agent", "Python", "Discord", "cron", "Linux"],
    screens: [],
    screensNote: "The channels hold private messages, so this page shows the setup as an illustration.",
  },
];

export const experience = [
  { period: "Jul – Nov 2026", title: "IT & systems developer", org: "Wisata Bumi Perkemahan Bedengan, Malang", text: "Sole IT staff. Built and ran every internal system, from sign-in and ERP to the public website." },
  { period: "2022 – now", title: "Freelance full-stack developer", org: "Travel agency, swimming club, small businesses", text: "Dashboards, client apps and websites for a travel agency, a swimming club, a construction team and friends' businesses." },
  { period: "2023", title: "Front-end developer intern", org: "PT Aero Systems Indonesia", text: "Front-end interfaces for aviation information systems, four months." },
  { period: "2020 – now", title: "Informatics engineering", org: "Universitas Brawijaya · thesis complete, defense pending", text: "Thesis: a camping-site booking web app." },
];

export const skills = [
  { group: "AI & automation", items: "Claude, Gemini and OpenAI APIs, agents and tool calling, MCP, n8n, WhatsApp gateways" },
  { group: "Web & backend", items: "TypeScript, Python, PHP, SQL, Next.js, React, Laravel, Astro" },
  { group: "Business data", items: "PostgreSQL, Supabase, Prisma, Odoo (POS, accounting, HR)" },
  { group: "Infrastructure", items: "Linux VPS, Docker Compose, Caddy, Authentik SSO, Vercel, Cloudflare" },
];
