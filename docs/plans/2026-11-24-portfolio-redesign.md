# Portfolio redesign (daffario.dev) — arah B + struktur A

Status: draft, menunggu persetujuan user. Bahan riset: artifact "Arah Baru daffario.dev".

## Keputusan desain
- Arah: B (teks dulu, minim dekorasi; rasa Paco Coursey / Emil Kowalski / Karpathy) dengan struktur A untuk daftar Work & Experience (tahun di kiri, isi di kanan).
- Satu kolom sempit, menu di atas (Work · Experience · CV) + toggle tema.
- Tema: terang sebagai default, mode gelap lewat toggle dan ikut `prefers-color-scheme`.
- Font: grotesk netral (kandidat: Geist / Inter Tight / Hanken Grotesk), satu family display + body, mono kecil untuk label/tahun.
- System map di hero dihapus. Gantinya satu baris fakta.
- Foto diri kecil di samping nama.
- Visual per proyek: ilustrasi skematik beranimasi (SVG + CSS, loop, mati saat `prefers-reduced-motion`); screenshot asli (data disamarkan) boleh ditambah di halaman detail bila app bisa dibuka.
- Interaktif (revisi 2026-11-24): intro muncul bertahap, highlight pada frasa kunci, angka fakta count-up, jam Malang live di nav, spotlight mengikuti kursor di kartu proyek, accordion layanan di halaman detail, transisi tema.
- Kontak menyertakan Instagram (handle menunggu dari user).
- Screenshot (mockup v3): kartu menampilkan screenshot asli saat hover; halaman detail punya galeri (bingkai browser + bingkai HP, klik untuk perbesar). Sumber yang sudah aman (data contoh): Bedengan = wisatabedengan.com live; Bunga Wisata = `dashboard-bungawisata/docs/panduan/img/` (o17, m01); BK Swim = `boyang-kreasi/video/public/rec/` (dashboard, presensi). Jangan pakai screenshot yang memuat QRIS/rekening. Belum ada: app internal Bedengan (perlu izin eks-kantor + data contoh), Kasly (akun demo), Hermes (tetap animasi).
- Referensi visual: artifact "daffario.dev Mockup" v2 (https://claude.ai/code/artifact/3dbe9cee-1104-42e3-a401-fcaf617e02a3).

## Susunan halaman depan (ringkas, detail pindah ke halaman proyek)
1. Header: nama + jam Malang, menu, toggle tema.
2. Intro: foto kecil + nama, satu kalimat besar, 2 kalimat cerita, status open to work, email + CV.
3. Baris fakta: 10+ internal apps behind one sign-in · < 3 months · 63 staff.
4. Selected work: 5 kartu beranimasi. Bedengan satu kartu lebar (semua layanannya di halaman detail), lalu Bunga Wisata, BK Swim, Kasly, Hermes HQ.
5. Experience: periode | peran | organisasi (satu baris).
6. Toolkit (4 baris).
7. Kontak: email + GitHub, LinkedIn, Instagram, CV.
"How I work" dipindah dari halaman depan (kandidat: halaman detail atau /about).

## Halaman detail proyek
Judul + ringkasan → meta (Role · Period · Live in · Users) → visual besar beranimasi → The problem → What I built (accordion; Bedengan berisi 10 layanan: SSO, Odoo, finance, DMS, integrasi POS, inventaris, roster/operasional, App Hub, WhatsApp assistant [prototype], website) → Outcome → Stack → What I'd do next.

## Fakta dari wawancara 2026-11-24 (pakai ini, jangan mengarang angka)
| Proyek | Fakta | Perubahan konten |
|---|---|---|
| Bedengan back office | Sendirian; sistem utama live < 3 bulan; kerja Jul–Nov 2026, sudah keluar | Experience "Jul – Nov 2026" (bukan "now"); POS ditulis "integrated a colleague's offline POS into sign-in and finance"; penghematan waktu < 1 jam/hari, jangan dijadikan klaim utama; DMS: dokumen sudah diimpor (tanpa angka), struktur 572 folder dengan akses per role |
| WhatsApp assistant | Diuji sendiri dan bersama beberapa rekan; tidak pernah dijalankan untuk pengunjung | Label "Prototype, tested with colleagues, not launched before I left" |
| App Hub + MCP | 2–3 app buatan staf non-IT sempat dipublikasikan | Outcome: "2–3 staff-built apps published"; cerita ShiftCraft → dibangun ulang sebagai layanan operasional |
| Bunga Wisata | Dipakai 2–3 orang tim; 10–30 quotation/invoice per bulan | Tambahkan angka ini di outcome |
| BK Swim | Live sejak Nov 2026, < 20 murid terdaftar | "Live with the club since November 2026"; hapus frasa "free-tier hosting" |
| Kasly | Dipakai sendiri, pasangan, beberapa teman | Tetap; screenshot dari akun demo (akun dibuat oleh user, bukan agent) |
| Hermes HQ | Cron utama di-pause sejak 18 Nov | Ringkas, fokus arsitektur (agent per channel, tool terbatas, cron); tanpa nama provider LLM dan tanpa "running continuously" |

Tidak ditampilkan: Agent Meridian.

## Langkah
1. Mockup halaman depan (desktop + mobile, terang + gelap) sebagai artifact untuk disetujui.
2. Perbarui `lib/content.ts` sesuai tabel fakta.
3. Ganti tema/tipografi di `app/globals.css` + `app/layout.tsx`, tambah toggle tema.
4. Susun ulang `app/page.tsx`, hapus `app/system-map.tsx`.
5. Perbarui template `app/work/[slug]/page.tsx` (role & timeline, visual, next).
6. Kumpulkan visual: screenshot app yang bisa dibuka, animasi mockup untuk sisanya, foto dari user.
7. Sesuaikan `/cv` dengan fakta baru.

## Acceptance checklist
- [ ] Tidak ada angka atau klaim di situs yang tidak tercantum di tabel fakta atau repo.
- [ ] Experience Bedengan tertulis Jul – Nov 2026.
- [ ] System map tidak ada lagi di build.
- [ ] Toggle tema bekerja dan mengikuti sistem saat belum dipilih.
- [ ] Tiap proyek punya visual beranimasi; animasi berhenti saat `prefers-reduced-motion`.
- [ ] Halaman depan hanya 5 kartu proyek; layanan Bedengan hanya di halaman detailnya.
- [ ] Dicek di 1280px dan 375px, terang dan gelap, dengan screenshot.
- [ ] `npm run build` lulus; deploy Vercel live.
