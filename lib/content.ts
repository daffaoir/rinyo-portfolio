// Every claim and number here comes from the 2026-11-24 interview
// (docs/plans/2026-11-24-portfolio-redesign.md). Do not add figures that are not there.
// Each translatable string is { en, id }. English lives at /, Indonesian at /id.

import type { IconName } from "./icons";

export type Lang = "en" | "id";
export type L = { en: string; id: string };
export const tr = (x: L, lang: Lang) => x[lang];
/** Path for the same page in a given language. */
export const localePath = (path: string, lang: Lang) => (lang === "id" ? `/id${path === "/" ? "" : path}` : path);

export const profile = {
  name: "Daffario Alexandra",
  fullName: "Daffario Alexandra Agung Pradana",
  role: { en: "IT / AI developer", id: "IT / AI developer" },
  location: "Malang, Indonesia",
  availability: {
    en: "Open to IT / AI developer roles. Remote first, happy to relocate to Bali.",
    id: "Terbuka untuk posisi IT / AI developer. Remote dulu, siap pindah ke Bali.",
  },
  email: "daffarioalexandra@gmail.com",
  github: "https://github.com/daffaoir",
  linkedin: "https://linkedin.com/in/daffarioalexandra",
  /** Full Instagram URL. Leave empty to hide the link. */
  instagram: "",
  /** Path under /public, e.g. "/me.jpg". Leave empty to show initials. */
  photo: "",
  headline: {
    en: ["I build the internal tools a business runs on,", "and put", "AI where it takes real work", "off people's hands."],
    id: ["Saya membangun tools internal yang menjalankan bisnis,", "dan memakai", "AI di tempat yang benar-benar", "meringankan kerja orang."],
  },
  intro: {
    en: "Most recently I was the only IT person at a nature-tourism destination, where I put the whole back office behind one sign-in. I also build systems for a travel agency, a swimming club and my own products.",
    id: "Terakhir saya menjadi satu-satunya orang IT di sebuah destinasi wisata alam, dan menyatukan seluruh back office-nya di balik satu login. Saya juga membangun sistem untuk biro perjalanan, klub renang, dan produk saya sendiri.",
  },
  cvIntro: {
    en: "IT / AI developer who builds internal tools, integrations and practical AI for small businesses. Most recently the sole IT staff at a nature-tourism destination with 63 staff, where I put ticket counters, accounting, HR, finance and documents behind one sign-in in under three months.",
    id: "IT / AI developer yang membangun tools internal, integrasi, dan AI praktis untuk bisnis kecil. Terakhir menjadi satu-satunya staf IT di destinasi wisata alam dengan 63 karyawan, dan menyatukan loket tiket, akuntansi, HR, keuangan, serta dokumen di balik satu login dalam kurang dari tiga bulan.",
  },
};

export const facts: ({ value: number; suffix: string; label: L } | { text: L; label: L })[] = [
  { value: 10, suffix: "+", label: { en: "internal apps behind one sign-in", id: "aplikasi internal di balik satu login" } },
  { text: { en: "< 3 months", id: "< 3 bulan" }, label: { en: "from scattered tools to one live stack", id: "dari tools tercecer jadi satu sistem yang jalan" } },
  { value: 63, suffix: "", label: { en: "staff on the systems I built", id: "karyawan memakai sistem yang saya bangun" } },
];

export const ui = {
  work: { en: "Work", id: "Karya" },
  experience: { en: "Experience", id: "Pengalaman" },
  cv: { en: "CV", id: "CV" },
  selectedWork: { en: "Selected work", id: "Karya pilihan" },
  toolkit: { en: "Toolkit", id: "Toolkit" },
  contact: { en: "Contact", id: "Kontak" },
  readCv: { en: "Read my CV", id: "Lihat CV saya" },
  readCase: { en: "Read case study", id: "Baca studi kasus" },
  contactLine: { en: "Have a process that eats your team's time? Tell me how it works today.", id: "Ada proses yang menyita waktu tim Anda? Ceritakan cara kerjanya hari ini." },
  allWork: { en: "All work", id: "Semua karya" },
  screens: { en: "Screens", id: "Tampilan" },
  screensHint: { en: "Click a screen to enlarge. Names and figures are sample data.", id: "Klik gambar untuk memperbesar. Nama dan angka adalah data contoh." },
  problem: { en: "The problem", id: "Masalahnya" },
  built: { en: "What I built", id: "Yang saya bangun" },
  services: { en: "services", id: "layanan" },
  outcome: { en: "Outcome", id: "Hasil" },
  next: { en: "What I'd do next", id: "Langkah berikutnya" },
  tools: { en: "Tools", id: "Tools" },
  nextProject: { en: "Next project", id: "Proyek berikutnya" },
  skills: { en: "Skills", id: "Keahlian" },
  languages: { en: "Languages", id: "Bahasa" },
  languagesText: { en: "Indonesian (native), English (professional working).", id: "Bahasa Indonesia (asli), Bahasa Inggris (profesional)." },
  savePdf: { en: "Save as PDF", id: "Simpan sebagai PDF" },
  footer: { en: "Built with Next.js, hosted on Vercel.", id: "Dibuat dengan Next.js, di-host di Vercel." },
  skip: { en: "Skip to content", id: "Langsung ke isi" },
  theme: { en: "Switch colour theme", id: "Ganti tema warna" },
  status: {
    live: { en: "live", id: "live" },
    "in use": { en: "in use", id: "dipakai" },
    prototype: { en: "prototype", id: "prototipe" },
  },
};

export type Status = "live" | "in use" | "prototype";
export type Scene = "bedengan" | "bunga" | "swim" | "kasly" | "hermes";

export type Screen = { src: string; alt: L; caption: L; device: "desktop" | "phone"; bar?: string };
export type Service = { name: L; status: Status; detail: L; stack: string[] };

export type Study = {
  slug: string;
  scene: Scene;
  title: L;
  org: L;
  cardMeta: L;
  status?: Status;
  summary: L;
  intro: L;
  meta: { label: L; value: L }[];
  problem: L;
  services?: Service[];
  built?: L[];
  outcome: L[];
  next: L;
  stack: string[];
  screens: Screen[];
  screensNote?: L;
  link?: { href: string; label: string };
};

const same = (s: string): L => ({ en: s, id: s });

export const studies: Study[] = [
  {
    slug: "bedengan",
    scene: "bedengan",
    title: { en: "The whole back office of a nature-tourism destination, behind one sign-in", id: "Seluruh back office destinasi wisata alam, di balik satu login" },
    org: same("Wisata Bumi Perkemahan Bedengan, Malang"),
    cardMeta: same("Wisata Bedengan · Feb – Nov 2026"),
    summary: {
      en: "Sole IT staff for 63 people. Ten services, from ticket counters and accounting to documents, a staff app hub and an AI assistant.",
      id: "Satu-satunya staf IT untuk 63 orang. Sepuluh layanan, dari loket tiket dan akuntansi sampai dokumen, app hub untuk staf, dan asisten AI.",
    },
    intro: {
      en: "A campsite and nature destination with 63 staff ran its ticket counters, rentals, accounting, HR and documents in separate places with separate passwords. As the only IT person, I connected them into one stack.",
      id: "Sebuah bumi perkemahan dan destinasi alam dengan 63 karyawan menjalankan loket tiket, persewaan, akuntansi, HR, dan dokumen di tempat terpisah dengan kata sandi yang berbeda-beda. Sebagai satu-satunya orang IT, saya menyatukan semuanya.",
    },
    meta: [
      { label: { en: "Role", id: "Peran" }, value: { en: "Sole IT staff", id: "Satu-satunya staf IT" } },
      { label: { en: "Period", id: "Periode" }, value: same("Feb – Nov 2026") },
      { label: { en: "Core live in", id: "Inti live dalam" }, value: { en: "Under 3 months", id: "Kurang dari 3 bulan" } },
      { label: { en: "Users", id: "Pengguna" }, value: { en: "63 staff", id: "63 karyawan" } },
    ],
    problem: {
      en: "Every new tool added another login. Cashier sales were retyped into the books, documents lived in a shared drive with no clear access rules, and nobody had a full picture of the operation.",
      id: "Setiap tool baru menambah satu login lagi. Penjualan kasir diketik ulang ke pembukuan, dokumen tersimpan di drive bersama tanpa aturan akses yang jelas, dan tidak ada yang punya gambaran utuh operasionalnya.",
    },
    services: [
      { name: { en: "Single sign-on", id: "Single sign-on (satu login)" }, status: "live", detail: { en: "Authentik in front of every internal app. Access is decided by department group, so a cashier and an accountant see different apps after the same sign-in.", id: "Authentik di depan semua aplikasi internal. Akses ditentukan per grup departemen, jadi kasir dan akuntan melihat aplikasi berbeda setelah login yang sama." }, stack: ["Authentik", "OIDC", "Caddy"] },
      { name: { en: "Ticket & rental counters, accounting, HR", id: "Loket tiket & persewaan, akuntansi, HR" }, status: "live", detail: { en: "Odoo 19 for the ticket and rental POS counters, Indonesian accounting and HR, with custom modules where the defaults did not fit.", id: "Odoo 19 untuk POS loket tiket dan persewaan, akuntansi Indonesia, dan HR, dengan modul khusus di bagian yang bawaannya tidak cocok." }, stack: ["Odoo 19", "Python", "PostgreSQL"] },
      { name: { en: "Finance system", id: "Sistem keuangan" }, status: "live", detail: { en: "An in-house finance app. Cashier sales arrive automatically through a queue, so nobody retypes daily takings.", id: "Aplikasi keuangan buatan sendiri. Penjualan kasir masuk otomatis lewat antrean, jadi tidak ada yang mengetik ulang setoran harian." }, stack: ["Laravel", "Webhooks"] },
      { name: { en: "Document management", id: "Manajemen dokumen" }, status: "live", detail: { en: "Replaced Nextcloud. A structure of 572 folders with access set per role, and company documents imported into it.", id: "Menggantikan Nextcloud. Struktur 572 folder dengan akses per peran, dan dokumen perusahaan sudah diimpor ke dalamnya." }, stack: ["Laravel", "Angular"] },
      { name: { en: "Cashier POS integration", id: "Integrasi POS kasir" }, status: "live", detail: { en: "A colleague built the offline-first cashier POS. I connected it to company sign-in and to the finance system, and kept it working when the connection drops.", id: "POS kasir offline-first dibuat oleh rekan saya. Saya menghubungkannya ke login perusahaan dan sistem keuangan, dan memastikan tetap jalan saat koneksi putus." }, stack: ["Dexie", "SQLite", "SSO"] },
      { name: { en: "Asset inventory", id: "Inventaris aset" }, status: "live", detail: { en: "QR labels on every asset, scanned from a phone to check location and condition.", id: "Label QR di setiap aset, dipindai dari HP untuk mengecek lokasi dan kondisinya." }, stack: ["QR", "PWA"] },
      { name: { en: "Staff roster & operations", id: "Jadwal & operasional staf" }, status: "live", detail: { en: "A staff-built roster tool could not be patched safely, so I rebuilt it as a proper service that reads employee data straight from Odoo and generates a month of shifts in one click.", id: "Tool jadwal buatan staf tidak bisa ditambal dengan aman, jadi saya bangun ulang sebagai layanan yang membaca data karyawan langsung dari Odoo dan membuat jadwal sebulan dalam satu klik." }, stack: ["Next.js", "Odoo data gateway"] },
      { name: { en: "App Hub for staff-built apps", id: "App Hub untuk aplikasi buatan staf" }, status: "live", detail: { en: "Staff publish tools they build with AI coding assistants to their own subdomain, through an MCP server. Automatic checks, sandboxed runners and company sign-in sit in front of every app. Two to three staff apps went live.", id: "Staf menerbitkan tools yang mereka buat dengan asisten coding AI ke subdomain sendiri, lewat server MCP. Pengecekan otomatis, runner terisolasi, dan login perusahaan menjaga setiap aplikasi. Dua sampai tiga aplikasi staf sudah live." }, stack: ["MCP", "TypeScript", "Docker"] },
      { name: { en: "WhatsApp assistant", id: "Asisten WhatsApp" }, status: "prototype", detail: { en: "Visitors' questions answered from the team's own documents, with hand-over to a person in the shared inbox. Tested with colleagues, not launched before I left.", id: "Pertanyaan pengunjung dijawab dari dokumen milik tim, dengan pengalihan ke petugas di inbox bersama. Sudah diuji bersama rekan, belum diluncurkan sebelum saya keluar." }, stack: ["n8n", "Gemini", "Chatwoot", "WAHA"] },
      { name: { en: "Public website", id: "Website publik" }, status: "live", detail: { en: "wisatabedengan.com in Indonesian and English, served from the same server.", id: "wisatabedengan.com dalam Bahasa Indonesia dan Inggris, berjalan di server yang sama." }, stack: ["Astro", "Caddy"] },
    ],
    outcome: [
      { en: "Staff sign in once and see only the apps their department needs.", id: "Staf cukup login sekali dan hanya melihat aplikasi yang dibutuhkan departemennya." },
      { en: "Cashier sales flow into the finance system instead of being retyped.", id: "Penjualan kasir masuk ke sistem keuangan tanpa diketik ulang." },
      { en: "Company documents moved into one system with access set per role.", id: "Dokumen perusahaan pindah ke satu sistem dengan akses per peran." },
      { en: "Two to three apps built by non-IT staff went live through the App Hub.", id: "Dua sampai tiga aplikasi buatan staf non-IT live lewat App Hub." },
    ],
    next: {
      en: "Launch the WhatsApp assistant with the customer service team, and add a weekly report that pulls ticket sales, finance and roster data into one page for management.",
      id: "Meluncurkan asisten WhatsApp bersama tim customer service, dan menambah laporan mingguan yang menggabungkan data tiket, keuangan, dan jadwal dalam satu halaman untuk pimpinan.",
    },
    stack: ["Authentik", "Odoo 19", "Laravel", "Angular", "Next.js", "Astro", "n8n", "Docker", "Caddy", "restic"],
    screens: [
      { src: "/work/bedengan/roster.jpg", alt: { en: "Monthly staff roster with colour-coded shifts", id: "Jadwal staf bulanan dengan shift berwarna" }, caption: { en: "Staff roster: a month of shifts generated in one click (sample names).", id: "Jadwal staf: satu bulan shift dibuat dalam satu klik (nama contoh)." }, device: "desktop", bar: "operasional" },
      { src: "/work/bedengan/leave-m.jpg", alt: { en: "Staff leave request on a phone", id: "Pengajuan cuti staf di HP" }, caption: { en: "Staff check their schedule and request leave from a phone.", id: "Staf melihat jadwal dan mengajukan cuti dari HP." }, device: "phone" },
      { src: "/work/bedengan/pos.jpg", alt: { en: "Cashier POS with ticket and parking items", id: "POS kasir dengan item tiket dan parkir" }, caption: { en: "Cashier POS, connected to sign-in and finance.", id: "POS kasir, terhubung ke login dan keuangan." }, device: "desktop", bar: "pos" },
      { src: "/work/bedengan/dms.jpg", alt: { en: "Document management folder browser", id: "Penjelajah folder manajemen dokumen" }, caption: { en: "Document management with folders per department.", id: "Manajemen dokumen dengan folder per departemen." }, device: "desktop", bar: "dms" },
      { src: "/work/bedengan/web.jpg", alt: { en: "wisatabedengan.com home page", id: "Beranda wisatabedengan.com" }, caption: { en: "The public website.", id: "Website publik." }, device: "desktop", bar: "wisatabedengan.com" },
      { src: "/work/bedengan/web-m.jpg", alt: { en: "wisatabedengan.com on a phone", id: "wisatabedengan.com di HP" }, caption: { en: "The website on a phone.", id: "Website di HP." }, device: "phone" },
    ],
    link: { href: "https://wisatabedengan.com", label: "wisatabedengan.com" },
  },
  {
    slug: "bunga-wisata",
    scene: "bunga",
    title: { en: "From quotation to invoice in one dashboard", id: "Dari quotation sampai invoice dalam satu dashboard" },
    org: { en: "Bunga Wisata, tour and travel agency (family business)", id: "Bunga Wisata, biro tour & travel (usaha keluarga)" },
    cardMeta: { en: "Bunga Wisata · travel agency", id: "Bunga Wisata · biro perjalanan" },
    status: "in use",
    summary: { en: "Replaced Excel macros. 10 to 30 quotations and invoices a month.", id: "Menggantikan makro Excel. 10 sampai 30 quotation dan invoice per bulan." },
    intro: {
      en: "A tour and travel agency moved from Excel macros and Apps Script to one dashboard for quotations, invoices, payments and trip schedules.",
      id: "Sebuah biro tour & travel pindah dari makro Excel dan Apps Script ke satu dashboard untuk quotation, invoice, pembayaran, dan jadwal perjalanan.",
    },
    meta: [
      { label: { en: "Client", id: "Klien" }, value: { en: "Family business", id: "Usaha keluarga" } },
      { label: { en: "Users", id: "Pengguna" }, value: { en: "2–3 staff", id: "2–3 staf" } },
      { label: { en: "Volume", id: "Volume" }, value: { en: "10–30 docs / month", id: "10–30 dokumen / bulan" } },
      { label: { en: "Year", id: "Tahun" }, value: same("2026") },
    ],
    problem: {
      en: "Quotations lived in an Excel VBA file that kept freezing, invoices in a separate Google Sheet, and the team learned about changes by asking each other.",
      id: "Quotation ada di file Excel VBA yang sering macet, invoice di Google Sheet terpisah, dan tim baru tahu ada perubahan dengan saling bertanya.",
    },
    built: [
      { en: "A dashboard for quotations, invoices, payments and receipts that exports PDFs matching the old templates.", id: "Dashboard untuk quotation, invoice, pembayaran, dan kwitansi yang mengekspor PDF sesuai template lama." },
      { en: "An events calendar created straight from an accepted quotation.", id: "Kalender acara yang dibuat langsung dari quotation yang disetujui." },
      { en: "WhatsApp group notifications with the PDF attached, sent through a self-hosted gateway.", id: "Notifikasi grup WhatsApp beserta PDF-nya, dikirim lewat gateway yang di-host sendiri." },
      { en: "A read-only AI agent in the same group that answers questions like upcoming trips or unpaid invoices.", id: "Agen AI baca-saja di grup yang sama untuk menjawab pertanyaan seperti perjalanan terdekat atau invoice yang belum lunas." },
      { en: "A bilingual company website on Cloudflare Workers, with every call to action going to WhatsApp.", id: "Website perusahaan dua bahasa di Cloudflare Workers, dengan semua tombol aksi mengarah ke WhatsApp." },
    ],
    outcome: [
      { en: "Two legacy tools retired in favour of one dashboard.", id: "Dua tools lama dipensiunkan, diganti satu dashboard." },
      { en: "The team of two to three sends 10 to 30 quotations and invoices through it each month.", id: "Tim berisi dua sampai tiga orang mengirim 10 sampai 30 quotation dan invoice lewat dashboard ini setiap bulan." },
      { en: "Daily encrypted database backups, restored in CI before they are kept.", id: "Backup database terenkripsi setiap hari, diuji restore di CI sebelum disimpan." },
    ],
    next: { en: "Let the AI agent draft a quotation from a chat message, with a person approving it before anything is sent.", id: "Membuat agen AI menyusun draf quotation dari pesan chat, dengan persetujuan petugas sebelum apa pun dikirim." },
    stack: ["Next.js", "Prisma", "PostgreSQL", "Auth.js", "react-pdf", "GOWA", "Cloudflare Workers"],
    screens: [
      { src: "/work/bunga-wisata/quotation.jpg", alt: { en: "Quotation detail with a PDF preview", id: "Detail quotation dengan pratinjau PDF" }, caption: { en: "A quotation with a live print preview of the PDF (sample data).", id: "Quotation dengan pratinjau cetak PDF langsung (data contoh)." }, device: "desktop", bar: "dashboard · quotation" },
      { src: "/work/bunga-wisata/mobile.jpg", alt: { en: "Dashboard on a phone", id: "Dashboard di HP" }, caption: { en: "The team dashboard on a phone.", id: "Dashboard tim di HP." }, device: "phone" },
    ],
    link: { href: "https://bungawisata.co.id", label: "bungawisata.co.id" },
  },
  {
    slug: "bk-swim",
    scene: "swim",
    title: { en: "A swimming club run from one app", id: "Klub renang yang dijalankan dari satu aplikasi" },
    org: { en: "BK Swim, Malang (client)", id: "BK Swim, Malang (klien)" },
    cardMeta: { en: "BK Swim · client", id: "BK Swim · klien" },
    status: "live",
    summary: { en: "Management, coaches and parents. Live since November 2026.", id: "Manajemen, pelatih, dan orang tua. Live sejak November 2026." },
    intro: {
      en: "A progressive web app for a swimming club's management, coaches and parents, sold to the club and live since November 2026.",
      id: "Aplikasi web (PWA) untuk manajemen, pelatih, dan orang tua murid sebuah klub renang, dijual ke klub dan live sejak November 2026.",
    },
    meta: [
      { label: { en: "Client", id: "Klien" }, value: { en: "Swimming club", id: "Klub renang" } },
      { label: { en: "Roles", id: "Peran" }, value: { en: "Management, coaches, parents", id: "Manajemen, pelatih, orang tua" } },
      { label: { en: "Live since", id: "Live sejak" }, value: same("November 2026") },
      { label: { en: "Platform", id: "Platform" }, value: { en: "Installable web app", id: "Aplikasi web yang bisa diinstal" } },
    ],
    problem: { en: "Registrations, schedules, attendance and monthly fees were tracked by hand and in chat threads.", id: "Pendaftaran, jadwal, presensi, dan iuran bulanan dicatat manual dan lewat percakapan chat." },
    built: [
      { en: "Separate views for management, coaches and parents, installable on a phone.", id: "Tampilan terpisah untuk manajemen, pelatih, dan orang tua, bisa diinstal di HP." },
      { en: "Online registration with swimming experience and package interest.", id: "Pendaftaran online dengan pengalaman renang dan minat paket." },
      { en: "Attendance and session notes taken by coaches right after each session.", id: "Presensi dan catatan sesi diisi pelatih tepat setelah setiap sesi." },
      { en: "Monthly sessions and bills generated by a daily scheduled job that catches up if a day is missed.", id: "Sesi dan tagihan bulanan dibuat oleh job terjadwal harian yang otomatis menyusul kalau ada hari terlewat." },
      { en: "Coach payroll, progress evaluations and a management dashboard for income, unpaid fees and attendance.", id: "Penggajian pelatih, evaluasi perkembangan, dan dashboard manajemen untuk pemasukan, tunggakan, dan kehadiran." },
    ],
    outcome: [{ en: "In use by the club since November 2026, with documented backups and a client handbook.", id: "Dipakai klub sejak November 2026, dengan backup terdokumentasi dan buku panduan klien." }],
    next: { en: "Confirm payments automatically instead of checking uploaded transfer proofs by hand.", id: "Mengonfirmasi pembayaran otomatis, tidak lagi mengecek bukti transfer satu per satu." },
    stack: ["Next.js", "React", "Supabase", "Tailwind", "PWA"],
    screens: [
      { src: "/work/bk-swim/dashboard.jpg", alt: { en: "Owner dashboard with income and attendance charts", id: "Dashboard pemilik dengan grafik pemasukan dan kehadiran" }, caption: { en: "Management dashboard: income, unpaid fees and attendance (demo data).", id: "Dashboard manajemen: pemasukan, tunggakan, dan kehadiran (data demo)." }, device: "desktop", bar: "owner dashboard" },
      { src: "/work/bk-swim/attendance.jpg", alt: { en: "Coach taking attendance on a phone", id: "Pelatih mengisi presensi di HP" }, caption: { en: "A coach takes attendance after a session.", id: "Pelatih mengisi presensi setelah sesi." }, device: "phone" },
    ],
  },
  {
    slug: "kasly",
    scene: "kasly",
    title: { en: "Log spending by snapping a receipt", id: "Catat pengeluaran cukup dengan memotret struk" },
    org: { en: "Kasly (own product)", id: "Kasly (produk sendiri)" },
    cardMeta: { en: "Kasly · own product", id: "Kasly · produk sendiri" },
    status: "in use",
    summary: { en: "AI reads receipts and QRIS screenshots. Used daily by me and a few friends.", id: "AI membaca struk dan screenshot QRIS. Dipakai setiap hari oleh saya dan beberapa teman." },
    intro: {
      en: "A personal finance app where you add transactions by photographing a receipt, sharing a QRIS screenshot or typing a sentence.",
      id: "Aplikasi keuangan pribadi untuk mencatat transaksi dengan memotret struk, membagikan screenshot QRIS, atau mengetik satu kalimat.",
    },
    meta: [
      { label: { en: "Type", id: "Jenis" }, value: { en: "Own product", id: "Produk sendiri" } },
      { label: { en: "Users", id: "Pengguna" }, value: { en: "Me and a few friends", id: "Saya dan beberapa teman" } },
      { label: { en: "Platform", id: "Platform" }, value: { en: "Installable web app", id: "Aplikasi web yang bisa diinstal" } },
      { label: { en: "Year", id: "Tahun" }, value: same("2026") },
    ],
    problem: { en: "Most people stop tracking expenses because typing every purchase is tedious.", id: "Kebanyakan orang berhenti mencatat pengeluaran karena mengetik setiap belanja itu melelahkan." },
    built: [
      { en: "AI that reads receipts and QRIS screenshots, or plain text like \"coffee 25k this morning\", and fills in the transaction.", id: "AI yang membaca struk dan screenshot QRIS, atau teks biasa seperti \"kopi 25rb tadi pagi\", lalu mengisi transaksinya." },
      { en: "Automatic categories, budgets, split bills, recurring transactions and bank statement import.", id: "Kategori otomatis, anggaran, patungan, transaksi berulang, dan impor mutasi rekening." },
      { en: "Multiple wallets, Indonesian and English, installable on the phone.", id: "Banyak dompet, Bahasa Indonesia dan Inggris, bisa diinstal di HP." },
    ],
    outcome: [{ en: "Used daily by me and a small group of friends.", id: "Dipakai setiap hari oleh saya dan sekelompok kecil teman." }],
    next: { en: "A free tier with a monthly AI quota, and an app-store version built from the same code.", id: "Paket gratis dengan kuota AI bulanan, dan versi app store dari kode yang sama." },
    stack: ["React", "TypeScript", "Supabase Edge Functions", "pg_cron", "PWA"],
    screens: [],
    screensNote: { en: "The app holds real people's finances, so this page shows the flow as an illustration.", id: "Aplikasi ini berisi data keuangan orang sungguhan, jadi halaman ini menampilkan alurnya sebagai ilustrasi." },
    link: { href: "https://mykasly.vercel.app", label: "mykasly.vercel.app" },
  },
  {
    slug: "hermes-hq",
    scene: "hermes",
    title: { en: "A team of AI agents in one Discord server", id: "Tim agen AI dalam satu server Discord" },
    org: { en: "Hermes HQ (own project)", id: "Hermes HQ (proyek sendiri)" },
    cardMeta: { en: "Hermes HQ · own project", id: "Hermes HQ · proyek sendiri" },
    summary: { en: "One agent per channel, each with only the tools it needs.", id: "Satu agen per channel, masing-masing hanya memegang tools yang dibutuhkan." },
    intro: {
      en: "A Discord hub where each channel is a specialised agent: a daily assistant, server operations, monitoring of client sites and backups, and nutrition logging for friends.",
      id: "Hub Discord di mana setiap channel adalah agen khusus: asisten harian, operasional server, pemantauan situs klien dan backup, serta pencatatan gizi untuk teman.",
    },
    meta: [
      { label: { en: "Type", id: "Jenis" }, value: { en: "Own project", id: "Proyek sendiri" } },
      { label: { en: "Agents", id: "Agen" }, value: { en: "One per channel", id: "Satu per channel" } },
      { label: { en: "Runs on", id: "Berjalan di" }, value: { en: "A Linux VPS", id: "VPS Linux" } },
      { label: { en: "Year", id: "Tahun" }, value: same("2026") },
    ],
    problem: { en: "Checking servers, client sites and backups by hand every day does not scale when you look after several systems alone.", id: "Mengecek server, situs klien, dan backup secara manual setiap hari tidak sanggup lagi saat mengurus beberapa sistem sendirian." },
    built: [
      { en: "One gateway and one agent profile per channel, each with only the tools it needs.", id: "Satu gateway dan satu profil agen per channel, masing-masing hanya memegang tools yang dibutuhkan." },
      { en: "Scheduled jobs for briefings, uptime and backup checks.", id: "Job terjadwal untuk ringkasan harian, cek uptime, dan cek backup." },
      { en: "A food-logging agent shared with friends that estimates nutrition from Indonesian food data.", id: "Agen pencatat makanan untuk teman yang memperkirakan gizi dari data makanan Indonesia." },
    ],
    outcome: [{ en: "Routine checks arrive as messages instead of chores.", id: "Pengecekan rutin datang sebagai pesan, bukan pekerjaan manual." }],
    next: { en: "Give every scheduled job a fallback model, so briefings keep running when one provider goes down.", id: "Memberi setiap job terjadwal model cadangan, supaya ringkasan tetap jalan saat satu penyedia sedang mati." },
    stack: ["Hermes Agent", "Python", "Discord", "cron", "Linux"],
    screens: [],
    screensNote: { en: "The channels hold private messages, so this page shows the setup as an illustration.", id: "Channel-nya berisi pesan pribadi, jadi halaman ini menampilkan susunannya sebagai ilustrasi." },
  },
];

export const experience: { period: L; title: L; org: L; text: L }[] = [
  { period: same("Feb – Nov 2026"), title: { en: "IT & systems developer", id: "IT & systems developer" }, org: same("Wisata Bumi Perkemahan Bedengan, Malang"), text: { en: "Sole IT staff. Built and ran every internal system, from sign-in and ERP to the public website.", id: "Satu-satunya staf IT. Membangun dan menjalankan semua sistem internal, dari login dan ERP sampai website publik." } },
  { period: { en: "2022 – now", id: "2022 – sekarang" }, title: { en: "Freelance full-stack developer", id: "Freelance full-stack developer" }, org: { en: "Travel agency, swimming club, small businesses", id: "Biro perjalanan, klub renang, bisnis kecil" }, text: { en: "Dashboards, client apps and websites for a travel agency, a swimming club, a construction team and friends' businesses.", id: "Dashboard, aplikasi klien, dan website untuk biro perjalanan, klub renang, tim konstruksi, dan usaha teman." } },
  { period: same("2023"), title: { en: "Front-end developer intern", id: "Magang front-end developer" }, org: same("PT Aero Systems Indonesia"), text: { en: "Front-end interfaces for aviation information systems, four months.", id: "Antarmuka front-end untuk sistem informasi penerbangan, empat bulan." } },
  { period: { en: "2020 – now", id: "2020 – sekarang" }, title: { en: "Informatics engineering", id: "Teknik Informatika" }, org: { en: "Universitas Brawijaya · thesis complete, defense pending", id: "Universitas Brawijaya · skripsi selesai, menunggu sidang" }, text: { en: "Thesis: a camping-site booking web app.", id: "Skripsi: aplikasi web pemesanan bumi perkemahan." } },
];

export type Tool = { name: string; icon?: IconName };

export const toolkit: { group: L; tools: Tool[] }[] = [
  { group: { en: "AI & automation", id: "AI & otomasi" }, tools: [
    { name: "Claude", icon: "claude" }, { name: "Gemini", icon: "googlegemini" }, { name: "OpenAI", icon: "openai" },
    { name: "n8n", icon: "n8n" }, { name: "MCP" }, { name: "WhatsApp API", icon: "whatsapp" },
  ] },
  { group: { en: "Web & backend", id: "Web & backend" }, tools: [
    { name: "TypeScript", icon: "typescript" }, { name: "Python", icon: "python" }, { name: "PHP", icon: "php" },
    { name: "Next.js", icon: "nextdotjs" }, { name: "React", icon: "react" }, { name: "Node.js", icon: "nodedotjs" },
    { name: "Laravel", icon: "laravel" }, { name: "Angular", icon: "angular" }, { name: "Astro", icon: "astro" }, { name: "Tailwind", icon: "tailwindcss" },
  ] },
  { group: { en: "Business data", id: "Data bisnis" }, tools: [
    { name: "PostgreSQL", icon: "postgresql" }, { name: "Supabase", icon: "supabase" }, { name: "Prisma", icon: "prisma" },
    { name: "SQLite", icon: "sqlite" }, { name: "Odoo", icon: "odoo" },
  ] },
  { group: { en: "Infrastructure", id: "Infrastruktur" }, tools: [
    { name: "Linux", icon: "linux" }, { name: "Docker", icon: "docker" }, { name: "Caddy", icon: "caddy" },
    { name: "Authentik", icon: "authentik" }, { name: "Vercel", icon: "vercel" }, { name: "Cloudflare", icon: "cloudflare" }, { name: "GitHub Actions", icon: "githubactions" },
  ] },
];
