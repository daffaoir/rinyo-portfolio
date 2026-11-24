import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { studies, type Screen } from "@/lib/content";
import SceneArt from "../../scenes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = studies.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.summary } : {};
}

function Shot({ s }: { s: Screen }) {
  /* eslint-disable @next/next/no-img-element */
  return s.device === "desktop" ? (
    <figure className="frame">
      <div className="bar" aria-hidden="true"><i /><i /><i /><span>{s.bar}</span></div>
      <img className="zoomable" src={s.src} alt={s.alt} loading="lazy" />
      <figcaption>{s.caption}</figcaption>
    </figure>
  ) : (
    <figure className="phone">
      <img className="zoomable" src={s.src} alt={s.alt} loading="lazy" />
      <figcaption>{s.caption}</figcaption>
    </figure>
  );
}

export default async function Study({ params }: Props) {
  const { slug } = await params;
  const i = studies.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const s = studies[i];
  const next = studies[(i + 1) % studies.length];
  const desktops = s.screens.filter((x) => x.device === "desktop");
  const phones = s.screens.filter((x) => x.device === "phone");

  return (
    <article className="stack-md">
      <Link className="back" href="/#work">← All work</Link>

      <header className="case-head">
        <span className="mono">{s.org}</span>
        <h1>{s.title}</h1>
        <p className="case-lede">{s.intro}</p>
      </header>

      <div className="meta">
        {s.meta.map((m) => (
          <div key={m.label}><span className="mono">{m.label}</span><span>{m.value}</span></div>
        ))}
      </div>

      <div className="hero-scene" aria-hidden="true"><SceneArt name={s.scene} /></div>

      {s.screens.length > 0 && (
        <section aria-labelledby="scr-h">
          <h2 className="eyebrow" id="scr-h">Screens</h2>
          <div className="gallery">
            <div className="gallery-main">{desktops.map((x) => <Shot key={x.src} s={x} />)}</div>
            {phones.length > 0 && <div className="gallery-side">{phones.map((x) => <Shot key={x.src} s={x} />)}</div>}
          </div>
          <p className="mono">Click a screen to enlarge. Names and figures are sample data.</p>
        </section>
      )}
      {s.screensNote && <p className="note">{s.screensNote}</p>}

      <section aria-labelledby="prob-h">
        <h2 className="eyebrow" id="prob-h">The problem</h2>
        <p className="prose">{s.problem}</p>
      </section>

      <section aria-labelledby="built-h">
        <h2 className="eyebrow" id="built-h">What I built{s.services ? ` · ${s.services.length} services` : ""}</h2>
        {s.services ? (
          <ul className="services">
            {s.services.map((v, n) => (
              <li key={v.name}>
                <details open={n === 0}>
                  <summary>
                    <span className="n">{String(n + 1).padStart(2, "0")}</span>
                    <h3>{v.name}</h3>
                    <span className={v.status === "prototype" ? "tag" : "tag live"}>{v.status}</span>
                    <span className="chev" aria-hidden="true">+</span>
                  </summary>
                  <div className="svc-detail">
                    <p>{v.detail}</p>
                    <div className="tags">{v.stack.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="outcomes">{s.built?.map((b) => <li key={b}>{b}</li>)}</ul>
        )}
      </section>

      <section aria-labelledby="out-h">
        <h2 className="eyebrow" id="out-h">Outcome</h2>
        <ul className="outcomes">{s.outcome.map((o) => <li key={o}>{o}</li>)}</ul>
      </section>

      <section aria-labelledby="next-h">
        <h2 className="eyebrow" id="next-h">What I&apos;d do next</h2>
        <p className="prose">{s.next}</p>
      </section>

      <section aria-labelledby="stack-h">
        <h2 className="eyebrow" id="stack-h">Tools</h2>
        <div className="tags">{s.stack.map((t) => <span key={t} className="tag">{t}</span>)}</div>
        {s.link && <p className="prose"><a href={s.link.href}>{s.link.label}</a></p>}
      </section>

      <Link href={`/work/${next.slug}`} className="next-card">
        <span className="mono">Next project</span>
        <span className="next-title">{next.title} <b aria-hidden="true">→</b></span>
      </Link>
    </article>
  );
}
