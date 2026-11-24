import Link from "next/link";
import { experience, facts, profile, skills, studies } from "@/lib/content";
import SceneArt from "./scenes";
import { CountUp } from "./interactive";

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2);
}

export default function Home() {
  return (
    <div className="stack-lg">
      <header className="intro">
        <div className="who rise">
          <div className="photo">
            {profile.photo
              ? // eslint-disable-next-line @next/next/no-img-element
                <img src={profile.photo} alt={profile.name} />
              : <span aria-hidden="true">{initials(profile.name)}</span>}
          </div>
          <div>
            <h1>{profile.name}</h1>
            <span className="mono">{profile.role} · {profile.location}</span>
          </div>
        </div>
        <p className="lede rise" style={{ animationDelay: ".08s" }}>
          {profile.headline} <span>and put <em>AI where it takes real work</em> off people&apos;s hands.</span>
        </p>
        <p className="body-text rise" style={{ animationDelay: ".16s" }}>{profile.intro}</p>
        <p className="status rise" style={{ animationDelay: ".24s" }}>{profile.availability}</p>
        <div className="cta rise" style={{ animationDelay: ".32s" }}>
          <a className="primary" href={`mailto:${profile.email}`}>{profile.email}</a>
          <Link href="/cv">Read my CV</Link>
        </div>
      </header>

      <div className="facts" aria-label="At a glance">
        {facts.map((f) => (
          <div key={f.label}>
            {"value" in f ? <CountUp to={f.value} suffix={f.suffix} /> : <b>{f.text}</b>}
            <span>{f.label}</span>
          </div>
        ))}
      </div>

      <section id="work" aria-labelledby="work-h">
        <h2 className="eyebrow" id="work-h">Selected work</h2>
        <div className="cards">
          {studies.map((s, n) => {
            const shot = s.screens.find((x) => x.device === "desktop");
            return (
              <Link key={s.slug} href={`/work/${s.slug}`} className={n === 0 ? "card wide" : "card"}>
                <span className="scene" aria-hidden="true">
                  <SceneArt name={s.scene} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {shot && <img className="shot" src={shot.src} alt="" loading="lazy" />}
                </span>
                <div className="card-body">
                  <div className="card-meta">
                    <span className="mono">{s.cardMeta}</span>
                    {s.status && <span className={s.status === "prototype" ? "tag" : "tag live"}>{s.status}</span>}
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <span className="go">Read case study <b aria-hidden="true">→</b></span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="experience" aria-labelledby="exp-h">
        <h2 className="eyebrow" id="exp-h">Experience</h2>
        <ul className="rows">
          {experience.map((e) => (
            <li key={e.title}>
              <span className="mono">{e.period}</span>
              <div><h3>{e.title}</h3><p>{e.org}</p></div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="tools-h">
        <h2 className="eyebrow" id="tools-h">Toolkit</h2>
        <dl className="kv">
          {skills.map((s) => (
            <div key={s.group} style={{ display: "contents" }}>
              <dt>{s.group}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-h">
        <h2 className="eyebrow" id="contact-h">Contact</h2>
        <p className="big">Have a process that eats your team&apos;s time? Tell me how it works today.</p>
        <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="socials">
          <a href={profile.github}>GitHub</a>
          <a href={profile.linkedin}>LinkedIn</a>
          {profile.instagram && <a href={profile.instagram}>Instagram</a>}
          <Link href="/cv">CV</Link>
        </div>
      </section>
    </div>
  );
}
