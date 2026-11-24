export const profile = {
  name: "Daffario Alexandra",
  fullName: "Daffario Alexandra Agung Pradana",
  role: "IT / AI developer",
  location: "Malang, Indonesia",
  availability: "Open to IT / AI developer roles, remote first and happy to relocate.",
  email: "daffarioalexandra@gmail.com",
  github: "https://github.com/daffaoir",
  linkedin: "https://linkedin.com/in/daffarioalexandra",
  intro:
    "I build and run the systems behind tourism businesses: sign-in, ERP and cashier counters, finance, documents, customer chat and the website. Then I automate the boring parts with AI that people actually use.",
};

export type Study = {
  slug: string;
  title: string;
  org: string;
  year: string;
  summary: string;
  problem: string;
  built: string[];
  outcome: string[];
  stack: string[];
  link?: { href: string; label: string };
  note?: string;
};

export const studies: Study[] = [
  {
    slug: "bedengan-back-office",
    title: "One sign-in for a campsite's whole back office",
    org: "Wisata Bumi Perkemahan Bedengan",
    year: "2026",
    summary:
      "As the only IT person at a nature-tourism destination with 63 employees, I moved staff from scattered spreadsheets and separate logins onto one connected stack.",
    problem:
      "Ticket counters, rentals, accounting, HR, documents and staff requests all lived in different places with different passwords. Nobody had a full picture, and every new tool added another login.",
    built: [
      "Authentik single sign-on in front of more than ten internal apps, with access decided by department groups.",
      "Odoo 19 for ticket and rental POS counters, Indonesian accounting and HR, plus custom modules.",
      "In-house services where off-the-shelf tools did not fit: finance, document management (replacing Nextcloud), QR-label asset inventory, a cashier POS that keeps working offline, and a staff roster.",
      "The public website wisatabedengan.com in Indonesian and English.",
      "Everything on one VPS with Docker Compose and Caddy, with automated off-site backups.",
    ],
    outcome: [
      "Staff sign in once and see only the apps their role needs.",
      "Cashier sales flow into the finance system automatically instead of being retyped.",
      "560+ document folders moved into the new document system with role-based access.",
    ],
    stack: ["Authentik", "Odoo 19", "Laravel", "Angular", "Next.js", "Astro", "Docker", "Caddy", "restic"],
    link: { href: "https://wisatabedengan.com", label: "wisatabedengan.com" },
  },
  {
    slug: "app-hub-mcp",
    title: "Letting non-IT staff publish the apps they build with AI",
    org: "Wisata Bumi Perkemahan Bedengan",
    year: "2026",
    summary:
      "Staff were already building small tools with AI coding assistants. The App Hub gives those tools a safe home on the company domain without giving anyone server access.",
    problem:
      "A tool built by a staff member on their laptop helped only them. Putting it online meant asking IT, and giving people server access was not an option.",
    built: [
      "A hub where an app gets its own HTTPS subdomain after automatic checks: structure, secret scan and quota.",
      "An MCP server staff install in their AI coding tool, so publishing is a request to the assistant: validate, submit, update, check status.",
      "Sandboxed runners with memory and CPU limits, and company sign-in in front of every app.",
      "A read-only data gateway so approved apps can read Odoo data with a per-app token.",
    ],
    outcome: [
      "Publishing went from a request to IT to something staff do themselves.",
      "Apps reach real company data without anyone holding database credentials.",
    ],
    stack: ["TypeScript", "Express", "MCP", "Docker", "OIDC", "SQLite"],
    link: { href: "https://github.com/daffaoir/bedengan-apps-mcp", label: "MCP server on GitHub" },
  },
  {
    slug: "whatsapp-assistant",
    title: "A WhatsApp assistant that knows the campsite",
    org: "Wisata Bumi Perkemahan Bedengan",
    year: "2026",
    summary:
      "Visitors ask the same questions on WhatsApp every day. The assistant answers from the company's own documents and hands the chat to a person when it should.",
    problem:
      "Customer service answered prices, opening hours and booking questions by hand, often late at night.",
    built: [
      "Incoming WhatsApp messages flow through n8n, which drops duplicates and group chats.",
      "Answers come from Gemini grounded on a Google Docs knowledge base the team can edit themselves.",
      "When a person is needed, the chat moves to the Chatwoot inbox, and outside staffed hours the visitor is told when someone will reply.",
    ],
    outcome: [
      "The flow runs end to end as a pilot; going live depends on the team's sign-off.",
    ],
    stack: ["n8n", "WAHA", "Gemini", "Chatwoot", "Redis", "Google Docs"],
    note: "Pilot, not yet in production.",
  },
  {
    slug: "bunga-wisata",
    title: "From quotation to invoice for a travel agency",
    org: "Bunga Wisata (family business)",
    year: "2026",
    summary:
      "A tour and travel agency moved from Excel macros and Apps Script to one dashboard for quotations, invoices, payments and trip schedules.",
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
      "Daily encrypted database backups, restored in CI before they are kept.",
    ],
    stack: ["Next.js", "Prisma", "PostgreSQL", "Auth.js", "react-pdf", "GOWA", "Cloudflare Workers"],
    link: { href: "https://bungawisata.co.id", label: "bungawisata.co.id" },
  },
  {
    slug: "bk-swim",
    title: "A swimming club run from one app",
    org: "BK Swim, Malang (client)",
    year: "2026",
    summary:
      "A progressive web app for a swimming club's management, coaches and parents, sold to the club and live since November 2026.",
    problem:
      "Registrations, schedules, attendance and monthly fees were tracked by hand and in chat threads.",
    built: [
      "Separate views for management, coaches and parents, installable on a phone.",
      "Online registration with swimming experience and package interest.",
      "Monthly sessions and bills generated by a daily scheduled job that catches up if a day is missed.",
      "Account hand-over through one-time links sent on WhatsApp, with sign-in by email or phone number.",
    ],
    outcome: [
      "In use by the club since November 2026, on free-tier hosting with documented backups and a client handbook.",
    ],
    stack: ["Next.js", "React", "Supabase", "Tailwind", "PWA"],
  },
  {
    slug: "kasly",
    title: "Logging spending by snapping a receipt",
    org: "Kasly (own product)",
    year: "2026",
    summary:
      "A personal finance app where you add transactions by photographing a receipt, sharing a QRIS screenshot or typing a sentence.",
    problem:
      "Most people stop tracking expenses because typing every purchase is tedious.",
    built: [
      "AI that reads receipts and QRIS screenshots, or plain text like \"coffee 25k this morning\", and fills in the transaction.",
      "Automatic categories, budgets, split bills, recurring transactions and bank statement import.",
      "Multiple wallets, Indonesian and English, installable on the phone.",
    ],
    outcome: ["Used daily by me and a small group of friends."],
    stack: ["React", "TypeScript", "Supabase Edge Functions", "pg_cron", "PWA"],
    link: { href: "https://mykasly.vercel.app", label: "mykasly.vercel.app" },
  },
  {
    slug: "hermes-hq",
    title: "Seven AI agents that run my day",
    org: "Hermes HQ (own project)",
    year: "2026",
    summary:
      "An always-on Discord hub where each channel is a specialised agent: a daily assistant, server operations, monitoring of client sites and backups, and nutrition logging for friends.",
    problem:
      "Checking servers, client sites and backups by hand every day does not scale when you look after several systems alone.",
    built: [
      "One gateway and one agent profile per channel, each with only the tools it needs.",
      "Scheduled jobs for briefings, uptime and backup checks.",
      "A food-logging agent shared with friends that estimates nutrition from Indonesian food data.",
    ],
    outcome: ["Running continuously on a VPS, with routine checks arriving as messages instead of chores."],
    stack: ["Hermes Agent", "Python", "Discord", "cron", "Linux"],
  },
];

export const experience = [
  {
    period: "2026 – now",
    title: "IT support & systems developer",
    org: "Wisata Bumi Perkemahan Bedengan, Malang",
    text: "Sole IT staff. Builds and runs every internal system, from sign-in and ERP to the public website.",
  },
  {
    period: "2022 – now",
    title: "Freelance full-stack developer",
    org: "Clients and family business",
    text: "Dashboards, client apps and websites for a travel agency, a swimming club, a construction team and friends' businesses.",
  },
  {
    period: "2023",
    title: "Front-end developer intern",
    org: "PT Aero Systems Indonesia",
    text: "Front-end interfaces for aviation information systems, four months.",
  },
  {
    period: "2020 – now",
    title: "Informatics engineering",
    org: "Universitas Brawijaya",
    text: "Thesis completed (camping-site booking web app), defense pending.",
  },
];

export const skills = [
  { group: "AI and automation", items: "LLM APIs (Claude, Gemini, OpenAI), agents and tool calling, MCP, n8n, webhooks, WhatsApp gateways, Apps Script" },
  { group: "Web and backend", items: "TypeScript, Python, PHP, SQL, Next.js, React, Node, Laravel, Astro" },
  { group: "Data and business systems", items: "PostgreSQL, Supabase, Prisma, SQLite, Odoo (POS, accounting, HR)" },
  { group: "Infrastructure", items: "Linux VPS, Docker Compose, Caddy, Authentik SSO, Vercel, Cloudflare, GitHub Actions" },
];

/** Nodes for the hero system map. Positions are in a 640×420 viewBox. */
export const systemMap = {
  hub: { id: "sso", label: "One sign-in", x: 320, y: 210, detail: "Authentik decides who can open what, by department." },
  nodes: [
    { id: "erp", label: "ERP & counters", x: 120, y: 80, detail: "Odoo 19: ticket and rental POS, accounting, HR for 63 staff." },
    { id: "finance", label: "Finance", x: 320, y: 46, detail: "In-house finance system; cashier sales arrive by webhook." },
    { id: "docs", label: "Documents", x: 520, y: 80, detail: "Document management with role-based folders, replacing Nextcloud." },
    { id: "apps", label: "App Hub", x: 562, y: 226, detail: "Staff publish AI-built apps to their own subdomain via MCP." },
    { id: "chat", label: "WhatsApp AI", x: 500, y: 370, detail: "n8n + Gemini answer visitors and hand over to staff." },
    { id: "pos", label: "Cashier POS", x: 300, y: 384, detail: "Keeps working offline and syncs when the line is back." },
    { id: "inventory", label: "Inventory", x: 118, y: 356, detail: "QR labels on every asset, scanned from a phone." },
    { id: "roster", label: "Staff roster", x: 82, y: 214, detail: "Shifts and staff requests in one place." },
  ],
  extraEdges: [
    ["pos", "finance"],
    ["apps", "erp"],
  ] as [string, string][],
};
