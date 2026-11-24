import Link from "next/link";
import { notFound } from "next/navigation";
import { localePath, studies, tr, ui, type Lang, type Screen } from "@/lib/content";
import SceneArt from "../ui/scenes";

export function studyMeta(slug: string, lang: Lang) {
  const s = studies.find((x) => x.slug === slug);
  return s ? { title: tr(s.title, lang), description: tr(s.summary, lang) } : {};
}

function Shot({ s, lang }: { s: Screen; lang: Lang }) {
  /* eslint-disable @next/next/no-img-element */
  return s.device === "desktop" ? (
    <figure className="frame">
      <div className="bar" aria-hidden="true"><i /><i /><i /><span>{s.bar}</span></div>
      <img className="zoomable" src={s.src} alt={tr(s.alt, lang)} loading="lazy" />
      <figcaption>{tr(s.caption, lang)}</figcaption>
    </figure>
  ) : (
    <figure className="phone">
      <img className="zoomable" src={s.src} alt={tr(s.alt, lang)} loading="lazy" />
      <figcaption>{tr(s.caption, lang)}</figcaption>
    </figure>
  );
}

export default function StudyView({ slug, lang }: { slug: string; lang: Lang }) {
  const i = studies.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const s = studies[i];
  const next = studies[(i + 1) % studies.length];
  const desktops = s.screens.filter((x) => x.device === "desktop");
  const phones = s.screens.filter((x) => x.device === "phone");
  const t = (x: Parameters<typeof tr>[0]) => tr(x, lang);

  return (
    <article className="stack-md">
      <Link className="back" href={`${localePath("/", lang)}#work`}>← {t(ui.allWork)}</Link>

      <header className="case-head">
        <span className="mono">{t(s.org)}</span>
        <h1>{t(s.title)}</h1>
        <p className="case-lede">{t(s.intro)}</p>
      </header>

      <div className="meta">
        {s.meta.map((m) => (
          <div key={m.label.en}><span className="mono">{t(m.label)}</span><span>{t(m.value)}</span></div>
        ))}
      </div>

      <div className="hero-scene" aria-hidden="true"><SceneArt name={s.scene} /></div>

      {s.screens.length > 0 && (
        <section aria-labelledby="scr-h">
          <h2 className="eyebrow" id="scr-h">{t(ui.screens)}</h2>
          <div className="gallery">
            <div className="gallery-main">{desktops.map((x) => <Shot key={x.src} s={x} lang={lang} />)}</div>
            {phones.length > 0 && <div className="gallery-side">{phones.map((x) => <Shot key={x.src} s={x} lang={lang} />)}</div>}
          </div>
          <p className="mono">{t(ui.screensHint)}</p>
        </section>
      )}
      {s.screensNote && <p className="note">{t(s.screensNote)}</p>}

      <section aria-labelledby="prob-h">
        <h2 className="eyebrow" id="prob-h">{t(ui.problem)}</h2>
        <p className="prose">{t(s.problem)}</p>
      </section>

      <section aria-labelledby="built-h">
        <h2 className="eyebrow" id="built-h">{t(ui.built)}{s.services ? ` · ${s.services.length} ${t(ui.services)}` : ""}</h2>
        {s.services ? (
          <ul className="services">
            {s.services.map((v, n) => (
              <li key={v.name.en}>
                <details open={n === 0}>
                  <summary>
                    <span className="n">{String(n + 1).padStart(2, "0")}</span>
                    <h3>{t(v.name)}</h3>
                    <span className={v.status === "prototype" ? "tag" : "tag live"}>{t(ui.status[v.status])}</span>
                    <span className="chev" aria-hidden="true">+</span>
                  </summary>
                  <div className="svc-detail">
                    <p>{t(v.detail)}</p>
                    <div className="tags">{v.stack.map((x) => <span key={x} className="tag">{x}</span>)}</div>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="outcomes">{s.built?.map((b) => <li key={b.en}>{t(b)}</li>)}</ul>
        )}
      </section>

      <section aria-labelledby="out-h">
        <h2 className="eyebrow" id="out-h">{t(ui.outcome)}</h2>
        <ul className="outcomes">{s.outcome.map((o) => <li key={o.en}>{t(o)}</li>)}</ul>
      </section>

      <section aria-labelledby="next-h">
        <h2 className="eyebrow" id="next-h">{t(ui.next)}</h2>
        <p className="prose">{t(s.next)}</p>
      </section>

      <section aria-labelledby="stack-h">
        <h2 className="eyebrow" id="stack-h">{t(ui.tools)}</h2>
        <div className="tags">{s.stack.map((x) => <span key={x} className="tag">{x}</span>)}</div>
        {s.link && <p className="prose"><a href={s.link.href}>{s.link.label}</a></p>}
      </section>

      <Link href={localePath(`/work/${next.slug}`, lang)} className="next-card">
        <span className="mono">{t(ui.nextProject)}</span>
        <span className="next-title">{t(next.title)} <b aria-hidden="true">→</b></span>
      </Link>
    </article>
  );
}
