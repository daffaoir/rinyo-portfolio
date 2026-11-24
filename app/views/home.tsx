import Link from "next/link";
import { experience, facts, localePath, profile, studies, toolkit, tr, ui, type Lang } from "@/lib/content";
import SceneArt from "../ui/scenes";
import Icon from "../ui/brand-icon";
import { CountUp } from "../ui/interactive";
import Socials from "../ui/socials";

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2);
}

export default function HomeView({ lang }: { lang: Lang }) {
  const [h1, h2, h3, h4] = profile.headline[lang];
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
            <span className="mono">{tr(profile.role, lang)} · {profile.location}</span>
          </div>
        </div>
        <p className="lede rise" style={{ animationDelay: ".08s" }}>
          {h1} <span>{h2} <em>{h3}</em> {h4}</span>
        </p>
        <p className="body-text rise" style={{ animationDelay: ".16s" }}>{tr(profile.intro, lang)}</p>
        <p className="status rise" style={{ animationDelay: ".24s" }}>{tr(profile.availability, lang)}</p>
        <div className="cta rise" style={{ animationDelay: ".32s" }}>
          <Link className="pill-cta" href={localePath("/cv", lang)}>{tr(ui.readCv, lang)}</Link>
          <Socials />
        </div>
      </header>

      <div className="facts" aria-label="At a glance">
        {facts.map((f) => (
          <div key={f.label.en}>
            {"value" in f ? <CountUp to={f.value} suffix={f.suffix} /> : <b>{tr(f.text, lang)}</b>}
            <span>{tr(f.label, lang)}</span>
          </div>
        ))}
      </div>

      <section id="work" aria-labelledby="work-h">
        <h2 className="eyebrow" id="work-h">{tr(ui.selectedWork, lang)}</h2>
        <div className="cards">
          {studies.map((s, n) => {
            const shot = s.screens.find((x) => x.device === "desktop");
            return (
              <Link key={s.slug} href={localePath(`/work/${s.slug}`, lang)} className={n === 0 ? "card wide" : "card"}>
                <span className="scene" aria-hidden="true">
                  <SceneArt name={s.scene} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {shot && <img className="shot" src={shot.src} alt="" loading="lazy" />}
                </span>
                <div className="card-body">
                  <div className="card-meta">
                    <span className="mono">{tr(s.cardMeta, lang)}</span>
                    {s.status && <span className={s.status === "prototype" ? "tag" : "tag live"}>{tr(ui.status[s.status], lang)}</span>}
                  </div>
                  <h3>{tr(s.title, lang)}</h3>
                  <p>{tr(s.summary, lang)}</p>
                  <span className="go">{tr(ui.readCase, lang)} <b aria-hidden="true">→</b></span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="experience" aria-labelledby="exp-h">
        <h2 className="eyebrow" id="exp-h">{tr(ui.experience, lang)}</h2>
        <ul className="rows">
          {experience.map((e) => (
            <li key={e.title.en}>
              <span className="mono">{tr(e.period, lang)}</span>
              <div><h3>{tr(e.title, lang)}</h3><p>{tr(e.org, lang)}</p></div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="tools-h">
        <h2 className="eyebrow" id="tools-h">{tr(ui.toolkit, lang)}</h2>
        <div className="toolkit">
          {toolkit.map((g) => (
            <div key={g.group.en} className="tool-group">
              <span className="mono">{tr(g.group, lang)}</span>
              <ul className="tool-list">
                {g.tools.map((t) => (
                  <li key={t.name} className="tool" title={t.name}>
                    {t.icon
                      ? <><Icon name={t.icon} size={22} /><span className="tool-name">{t.name}</span></>
                      : <span className="tool-text">{t.name}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-h">
        <h2 className="eyebrow" id="contact-h">{tr(ui.contact, lang)}</h2>
        <p className="big">{tr(ui.contactLine, lang)}</p>
        <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        <Socials large />
      </section>
    </div>
  );
}
