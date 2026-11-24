import { experience, profile, studies, toolkit, tr, ui, type Lang } from "@/lib/content";
import PrintButton from "../ui/print-button";

export default function CvView({ lang }: { lang: Lang }) {
  const t = (x: Parameters<typeof tr>[0]) => tr(x, lang);
  return (
    <div className="cv stack-md">
      <div className="cv-head">
        <div>
          <h1>{profile.fullName}</h1>
          <p className="mono">{t(profile.role)} · {profile.location}</p>
          <p className="cv-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href="https://daffario.dev">daffario.dev</a>
            <a href={profile.github}>github.com/daffaoir</a>
            <a href={profile.linkedin}>linkedin.com/in/daffarioalexandra</a>
          </p>
        </div>
        <PrintButton label={t(ui.savePdf)} />
      </div>

      <p className="prose">{t(profile.cvIntro)} {t(profile.availability)}</p>

      <section>
        <h2 className="eyebrow">{t(ui.experience)}</h2>
        <ul className="rows">
          {experience.map((e) => (
            <li key={e.title.en}>
              <span className="mono">{t(e.period)}</span>
              <div><h3>{t(e.title)}</h3><p>{t(e.org)}. {t(e.text)}</p></div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="eyebrow">{t(ui.selectedWork)}</h2>
        <ul className="rows">
          {studies.map((s) => (
            <li key={s.slug}>
              <span className="mono">{t(s.cardMeta).split(" · ")[0]}</span>
              <div><h3>{t(s.title)}</h3><p>{t(s.intro)}</p></div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="eyebrow">{t(ui.skills)}</h2>
        <dl className="kv">
          {toolkit.map((g) => (
            <div key={g.group.en} style={{ display: "contents" }}>
              <dt>{t(g.group)}</dt>
              <dd>{g.tools.map((x) => x.name).join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="eyebrow">{t(ui.languages)}</h2>
        <p className="prose">{t(ui.languagesText)}</p>
      </section>
    </div>
  );
}
