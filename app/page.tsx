import Link from "next/link";
import SystemMap from "./system-map";
import { experience, profile, skills, studies } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <div>
          <h1>I connect the systems a business runs on.</h1>
          <p className="lede">{profile.intro}</p>
          <p className="avail">
            <span className="dot" aria-hidden="true" />
            <span>{profile.availability}</span>
          </p>
          <div className="actions">
            <Link className="btn primary" href="#work">See the work</Link>
            <Link className="btn" href="/cv">Read my CV</Link>
          </div>
        </div>
        <SystemMap />
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <div className="wrap">
          <h2 id="work-title">Work</h2>
          <p className="sub">Systems in daily use at a tourism destination, a travel agency, a swimming club, and my own products.</p>
          <ul className="work">
            {studies.map((s) => (
              <li key={s.slug}>
                <Link href={`/work/${s.slug}`}>
                  <div>
                    <h3>{s.title}</h3>
                    <p className="org">{s.org}</p>
                  </div>
                  <div>
                    <p className="sum">{s.summary}</p>
                    <ul className="stack" aria-label="Tools used">
                      {s.stack.slice(0, 5).map((t) => <li key={t}>{t}</li>)}
                    </ul>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="approach-title">
        <div className="wrap">
          <h2 id="approach-title">How I work</h2>
          <div className="approach">
            <div>
              <h3>Start where the hours go</h3>
              <p>I sit with the people doing the work and look for the step they repeat every day. That is usually the first thing worth automating.</p>
            </div>
            <div>
              <h3>Small tools, one front door</h3>
              <p>Each tool does one job, and they share one sign-in and one source of data, so nobody retypes numbers between systems.</p>
            </div>
            <div>
              <h3>AI where it removes a task</h3>
              <p>Answering a guest at night, reading a receipt or drafting a report. If the AI does not save someone time, it does not ship.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="experience" aria-labelledby="exp-title">
        <div className="wrap">
          <h2 id="exp-title">Experience</h2>
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
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group} style={{ display: "contents" }}>
                <dt>{s.group}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <div className="wrap">
          <h2 id="contact-title">Have a process that eats your team&apos;s time?</h2>
          <p className="sub" style={{ marginTop: "1rem" }}>Tell me how it works today, and I will tell you what I would build.</p>
          <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="links">
            <a href={profile.github}>GitHub</a>
            <a href={profile.linkedin}>LinkedIn</a>
            <Link href="/cv">CV</Link>
          </div>
        </div>
      </section>
    </>
  );
}
