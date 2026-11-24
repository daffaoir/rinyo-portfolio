import type { Metadata } from "next";
import { experience, profile, skills, studies } from "@/lib/content";
import PrintButton from "./print-button";

export const metadata: Metadata = {
  title: "CV",
  description: "CV of Daffario Alexandra Agung Pradana, IT / AI developer.",
};

export default function Cv() {
  return (
    <div className="wrap cv">
      <div className="cv-head">
        <div>
          <h1>{profile.fullName}</h1>
          <p className="org">{profile.role}, {profile.location}. {profile.availability}</p>
          <p className="cv-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href="https://daffario.dev">daffario.dev</a>
            <a href={profile.github}>github.com/daffaoir</a>
            <a href={profile.linkedin}>linkedin.com/in/daffarioalexandra</a>
          </p>
        </div>
        <PrintButton />
      </div>

      <p className="measure cv-intro">{profile.intro}</p>

      <h2>Experience</h2>
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.title}>
            <span className="when">{e.period}</span>
            <div>
              <h3>{e.title}</h3>
              <span className="org">{e.org}</span>
              <p>{e.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2>Selected work</h2>
      <ul className="cv-work">
        {studies.map((s) => (
          <li key={s.slug}>
            <strong>{s.title}</strong> <span className="org">({s.org})</span>. {s.summary}
          </li>
        ))}
      </ul>

      <h2>Skills</h2>
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group} style={{ display: "contents" }}>
            <dt>{s.group}</dt>
            <dd>{s.items}</dd>
          </div>
        ))}
      </dl>

      <h2>Languages</h2>
      <p>Indonesian (native), English (professional working).</p>
    </div>
  );
}
