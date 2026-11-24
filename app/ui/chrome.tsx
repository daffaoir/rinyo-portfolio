"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localePath, profile, tr, ui, type Lang } from "@/lib/content";
import { Clock, ThemeToggle } from "./interactive";

function useLang(): { lang: Lang; base: string } {
  const path = usePathname() || "/";
  const isId = path === "/id" || path.startsWith("/id/");
  const base = isId ? path.slice(3) || "/" : path;
  return { lang: isId ? "id" : "en", base };
}

/** EN / ID switch with a sliding marker. Links to the same page in the other language. */
export function LangToggle() {
  const { lang, base } = useLang();
  const remember = (l: Lang) => { try { localStorage.setItem("lang", l); } catch {} };
  return (
    <div className="lang" role="group" aria-label="Language / Bahasa" data-active={lang}>
      <span className="lang-pill" aria-hidden="true" />
      {(["en", "id"] as Lang[]).map((l) => (
        <Link
          key={l}
          href={localePath(base, l)}
          hrefLang={l}
          aria-current={lang === l ? "true" : undefined}
          aria-label={l === "en" ? "English" : "Bahasa Indonesia"}
          onClick={() => remember(l)}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}

export function Nav() {
  const { lang } = useLang();
  return (
    <>
      <a className="skip" href="#main">{tr(ui.skip, lang)}</a>
      <nav className="top" aria-label="Main">
        <Link href={localePath("/", lang)} className="brand">daffario.dev <Clock /></Link>
        <div className="links">
          <Link href={`${localePath("/", lang)}#work`}>{tr(ui.work, lang)}</Link>
          <Link href={`${localePath("/", lang)}#experience`}>{tr(ui.experience, lang)}</Link>
          <Link href={localePath("/cv", lang)}>{tr(ui.cv, lang)}</Link>
          <LangToggle />
          <ThemeToggle label={tr(ui.theme, lang)} />
        </div>
      </nav>
    </>
  );
}

export function Footer() {
  const { lang } = useLang();
  return (
    <footer>
      {profile.fullName}, {profile.location}. {tr(ui.footer, lang)}
    </footer>
  );
}
