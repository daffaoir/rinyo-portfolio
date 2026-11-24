import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { profile } from "@/lib/content";
import { Clock, Enhancements, ThemeToggle } from "./interactive";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

const description =
  "Daffario Alexandra builds internal tools, integrations and practical AI for small businesses in tourism and hospitality.";

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
    { media: "(prefers-color-scheme: light)", color: "#fbfbfa" },
    { media: "(prefers-color-scheme: dark)", color: "#111214" },
  ],
};

// Applies a saved theme before first paint, so there is no flash of the wrong theme.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <div className="page">
          <nav className="top" aria-label="Main">
            <Link href="/" className="brand">daffario.dev <Clock /></Link>
            <div className="links">
              <Link href="/#work">Work</Link>
              <Link href="/#experience">Experience</Link>
              <Link href="/cv">CV</Link>
              <ThemeToggle />
            </div>
          </nav>
          <main id="main">{children}</main>
          <footer>
            {profile.fullName}, {profile.location}. Built with Next.js, hosted on Vercel.
          </footer>
        </div>
        <Enhancements />
      </body>
    </html>
  );
}
