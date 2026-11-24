import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Enhancements } from "./ui/interactive";
import { Footer, Nav } from "./ui/chrome";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

const description =
  "Daffario Alexandra builds internal tools, integrations and practical AI for small businesses in tourism and hospitality.";

export const metadata: Metadata = {
  metadataBase: new URL("https://daffario.dev"),
  title: { default: "Daffario Alexandra, IT / AI developer", template: "%s | Daffario Alexandra" },
  description,
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: "/", languages: { en: "/", id: "/id" } },
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
        <div className="page">
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </div>
        <Enhancements />
      </body>
    </html>
  );
}
