import { profile } from "@/lib/content";
import type { IconName } from "@/lib/icons";
import Icon from "./brand-icon";

/** Icon links: Gmail, GitHub, LinkedIn and (when set) Instagram. */
export default function Socials({ large = false }: { large?: boolean }) {
  const links: { name: IconName; label: string; href: string }[] = [
    { name: "gmail", label: `Email ${profile.email}`, href: `mailto:${profile.email}` },
    { name: "github", label: "GitHub", href: profile.github },
    { name: "linkedin", label: "LinkedIn", href: profile.linkedin },
    ...(profile.instagram ? [{ name: "instagram" as IconName, label: "Instagram", href: profile.instagram }] : []),
  ];
  return (
    <ul className={large ? "socials large" : "socials"}>
      {links.map((l) => (
        <li key={l.name}>
          <a href={l.href} aria-label={l.label} title={l.label} className="brand-link"
             {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
            <Icon name={l.name} size={large ? 22 : 18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
