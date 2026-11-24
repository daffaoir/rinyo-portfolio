import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { profile } from "@/lib/content";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", axes: ["wdth"] });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });

const description =
  "Daffario Alexandra builds and runs internal systems, automations and practical AI for tourism businesses.";

export const metadata: Metadata = {
  metadataBase: new URL("https://daffario.dev"),
  title: { default: "Daffario Alexandra, IT / AI developer", template: "%s | Daffario Alexandra" },
  description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Daffario Alexandra, IT / AI developer",
    description,
    url: "https://daffario.dev",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef2ee" },
    { media: "(prefers-color-scheme: dark)", color: "#111c17" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <header className="wrap top">
          <Link href="/" className="brand">{profile.name}</Link>
          <nav className="nav" aria-label="Main">
            <Link href="/#work">Work</Link>
            <Link href="/#experience">Experience</Link>
            <Link href="/cv">CV</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer className="wrap">
          {profile.fullName}, {profile.location}. Built with Next.js, hosted on Vercel.
        </footer>
      </body>
    </html>
  );
}
