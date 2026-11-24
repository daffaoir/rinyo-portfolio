import type { Metadata } from "next";
import { experience, profile, skills, studies } from "@/lib/content";
import PrintButton from "./print-button";

export const metadata: Metadata = {
  title: "CV",
  description: "CV of Daffario Alexandra Agung Pradana, IT / AI developer.",
};

export default function Cv() {
  return (
    <div className="cv stack-md">
      <div className="cv-head">
        <div>
          <h1>{profile.fullName}</h1>
          <p className="mono">{profile.role} · {profile.location}</p>
          <p className="cv-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href="https://daffario.dev">daffario.dev</a>
            <a href={profile.github}>github.com/daffaoir</a>
            <a href={profile.linkedin}>linkedin.com/in/daffarioalexandra</a>
          </p>
        </div>
        <PrintButton />
      </div>

      <p className="prose">{profile.cvIntro} {profile.availability}</p>

      <section>
        <h2 className="eyebrow">Experience</h2>
        <ul className="rows">
          {experience.map((e) => (
            <li key={e.title}>
              <span className="mono">{e.period}</span>
              <div><h3>{e.title}</h3><p>{e.org}. {e.text}</p></div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="eyebrow">Selected work</h2>
        <ul className="rows">
          {studies.map((s) => (
            <li key={s.slug}>
              <span className="mono">{s.cardMeta.split(" · ")[0]}</span>
              <div><h3>{s.title}</h3><p>{s.intro}</p></div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="eyebrow">Skills</h2>
        <dl className="kv">
          {skills.map((s) => (
            <div key={s.group} style={{ display: "contents" }}>
              <dt>{s.group}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="eyebrow">Languages</h2>
        <p className="prose">Indonesian (native), English (professional working).</p>
      </section>
    </div>
  );
}
