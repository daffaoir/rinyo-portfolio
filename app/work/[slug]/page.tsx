import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { studies } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = studies.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.summary } : {};
}

export default async function Study({ params }: Props) {
  const { slug } = await params;
  const i = studies.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const s = studies[i];
  const next = studies[(i + 1) % studies.length];

  return (
    <article>
      <div className="wrap study-head">
        <Link className="back" href="/#work">Back to all work</Link>
        <h1>{s.title}</h1>
        <p className="org">{s.org}, {s.year}</p>
        <p className="lede">{s.summary}</p>
        {s.note && <p className="note">{s.note}</p>}
      </div>
      <div className="wrap study-body">
        <div className="measure">
          <h2>The problem</h2>
          <p>{s.problem}</p>
          <h2>What I built</h2>
          <ul>{s.built.map((b) => <li key={b}>{b}</li>)}</ul>
          <h2>Result</h2>
          <ul>{s.outcome.map((o) => <li key={o}>{o}</li>)}</ul>
        </div>
        <aside className="aside">
          <h2>Tools</h2>
          <ul className="stack">{s.stack.map((t) => <li key={t}>{t}</li>)}</ul>
          {s.link && (
            <>
              <h2>Link</h2>
              <a href={s.link.href}>{s.link.label}</a>
            </>
          )}
        </aside>
      </div>
      <div className="wrap next">
        Next: <Link href={`/work/${next.slug}`}>{next.title}</Link>
      </div>
    </article>
  );
}
