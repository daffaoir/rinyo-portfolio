import type { CSSProperties } from "react";
import type { Scene } from "@/lib/content";

// Schematic, looping illustrations for each project. Pure SVG + CSS (see globals.css "scenes").
// They are illustrations, not screenshots, and freeze on prefers-reduced-motion.

const i = (n: number) => ({ "--i": n }) as CSSProperties;

function Bedengan() {
  const tiles = ["POS", "Finance", "Docs", "HR", "Roster", "Assets", "App Hub", "Website", "Chat"];
  return (
    <svg viewBox="0 0 400 225">
      <rect className="sc-bg" width="400" height="225" />
      <g className="b-user"><circle cx="22" cy="112" r="7" className="sc-accent" /></g>
      <path className="sc-line" d="M30 112 H100" />
      <rect className="sc-card b-gate" x="100" y="94" width="84" height="36" rx="18" />
      <rect className="b-ring" x="100" y="94" width="84" height="36" rx="18" />
      <text className="sc-txt-b" x="142" y="116" textAnchor="middle">Sign in once</text>
      <path className="flow" d="M184 112 H214" />
      <path className="sc-line" d="M214 40 V184" />
      <path className="sc-line" d="M214 52 H228 M214 112 H228 M214 172 H228" />
      {tiles.map((t, n) => {
        const x = 228 + (n % 3) * 56;
        const y = 34 + Math.floor(n / 3) * 60;
        return (
          <g key={t} className="b-tile" style={i(n)}>
            <rect x={x} y={y} width="50" height="36" rx="6" />
            <text className="sc-txt" x={x + 25} y={y + 22} textAnchor="middle">{t}</text>
          </g>
        );
      })}
    </svg>
  );
}

function Doc({ x, label }: { x: number; label: string }) {
  return (
    <>
      <rect className="sc-card" x={x} y="36" width="78" height="100" rx="6" />
      <text className="sc-txt" x={x + 10} y="54">{label}</text>
      <rect className="sc-faint" x={x + 10} y="64" width="50" height="5" rx="2" />
      <rect className="sc-faint" x={x + 10} y="76" width="58" height="5" rx="2" />
      <rect className="sc-faint" x={x + 10} y="88" width="40" height="5" rx="2" />
    </>
  );
}

function Bunga() {
  return (
    <svg viewBox="0 0 320 200">
      <rect className="sc-bg" width="320" height="200" />
      <g><Doc x={20} label="QUOTATION" /><text className="sc-txt-b" x="30" y="124" style={{ fontSize: 11 }}>Rp 18.4jt</text></g>
      <path className="flow q-arrow" d="M104 86 H124" />
      <g className="q-inv">
        <Doc x={128} label="INVOICE" />
        <g className="q-stamp">
          <rect x="146" y="102" width="44" height="18" rx="3" fill="none" stroke="var(--ok)" strokeWidth="1.5" />
          <text x="168" y="115" textAnchor="middle" className="sc-ok-txt">PAID</text>
        </g>
      </g>
      <path className="flow q-arrow2" d="M212 86 H230" />
      <g className="q-msg">
        <rect className="sc-card" x="234" y="58" width="72" height="56" rx="10" />
        <rect x="244" y="68" width="18" height="22" rx="2" className="sc-accent" opacity=".85" />
        <text x="253" y="83" textAnchor="middle" className="sc-on-accent" style={{ fontSize: 6 }}>PDF</text>
        <rect className="sc-faint" x="268" y="70" width="28" height="4" rx="2" />
        <rect className="sc-faint" x="268" y="80" width="20" height="4" rx="2" />
        <text className="sc-txt" x="244" y="105" style={{ fontSize: 8 }}>sent to team ✓✓</text>
      </g>
      <text className="sc-txt" x="20" y="170">quotation → invoice → WhatsApp</text>
    </svg>
  );
}

function Swim() {
  const wave = "q10 -6 20 0 " + "t20 0 ".repeat(17);
  return (
    <svg viewBox="0 0 320 200">
      <rect className="sc-bg" width="320" height="200" />
      <g className="s-lane" opacity=".7">
        {[40, 100, 160].map((y) => <path key={y} className="sc-line" d={`M0 ${y} ${wave}`} />)}
      </g>
      <rect className="sc-card" x="105" y="14" width="110" height="180" rx="14" />
      <text className="sc-txt-b" x="117" y="38" style={{ fontSize: 10 }}>Group B · 16:00</text>
      <text className="sc-txt" x="117" y="51" style={{ fontSize: 8 }}>attendance</text>
      {[54, 44, 58, 48].map((w, n) => {
        const y = 62 + n * 20;
        return (
          <g key={n} className="s-chk" style={i(n)}>
            <rect className="sc-faint" x="117" y={y} width={w} height="6" rx="3" />
            <circle cx="198" cy={y + 3} r="7" strokeWidth="1.2" />
            <path d={`M194.5 ${y + 3} l2.5 2.5 l4.5 -5`} />
          </g>
        );
      })}
      <g className="s-bill">
        <rect x="117" y="150" width="86" height="24" rx="12" className="sc-accent" />
        <text x="160" y="166" textAnchor="middle" className="sc-on-accent" style={{ fontSize: 8.5 }}>monthly bill sent</text>
      </g>
    </svg>
  );
}

function Kasly() {
  const zig = "l-7 6 l-7 -6 ".repeat(6).trim();
  return (
    <svg viewBox="0 0 320 200">
      <rect className="sc-bg" width="320" height="200" />
      <path className="sc-card" d={`M36 30 H120 V160 ${zig} Z`} />
      <text className="sc-txt" x="78" y="48" textAnchor="middle" style={{ fontSize: 8 }}>KOPI KITA</text>
      <rect className="sc-faint" x="46" y="60" width="46" height="5" rx="2" /><rect className="sc-faint" x="98" y="60" width="14" height="5" rx="2" />
      <rect className="sc-faint" x="46" y="74" width="38" height="5" rx="2" /><rect className="sc-faint" x="98" y="74" width="14" height="5" rx="2" />
      <rect className="sc-faint" x="46" y="88" width="52" height="5" rx="2" />
      <text className="sc-txt-b" x="46" y="140" style={{ fontSize: 10 }}>TOTAL 25.000</text>
      <g className="k-scan">
        <rect x="30" y="32" width="96" height="2" className="sc-accent" />
        <rect x="30" y="20" width="96" height="14" className="sc-accent" opacity=".12" />
      </g>
      <path className="flow" d="M130 96 H158" />
      <rect className="sc-card" x="162" y="40" width="138" height="112" rx="10" />
      <text className="sc-txt" x="174" y="60" style={{ fontSize: 8 }}>NEW TRANSACTION</text>
      <g className="k-f" style={i(0)}><text className="sc-txt-b" x="174" y="82">Kopi susu</text></g>
      <g className="k-f" style={i(1)}><text className="sc-txt-b" x="174" y="104" style={{ fontSize: 15 }}>Rp 25.000</text></g>
      <g className="k-f" style={i(2)}>
        <rect x="174" y="116" width="72" height="18" rx="9" className="sc-accent-soft" />
        <text x="210" y="128" textAnchor="middle" className="sc-accent-txt">Food &amp; drink</text>
      </g>
      <text className="sc-txt" x="36" y="186">receipt photo → transaction</text>
    </svg>
  );
}

function Hermes() {
  const channels = ["#assistant", "#ops", "#sentry", "#nutrition"];
  const msgs = [
    ["assistant", "Morning brief is ready.", "3 meetings, 2 reminders.", "sc-accent"],
    ["ops", "Disk 61% · memory ok", "No failed services.", "sc-accent"],
    ["sentry", "3/3 client sites up.", "Backup verified 02:30.", "sc-ok"],
    ["nutrition", "Nasi pecel logged.", "≈ 520 kcal, 18 g protein.", "sc-accent"],
  ];
  return (
    <svg viewBox="0 0 320 200">
      <rect className="sc-bg" width="320" height="200" />
      <rect className="sc-card" x="16" y="20" width="288" height="160" rx="10" />
      <path className="sc-line" d="M104 20 V180" />
      {channels.map((c, n) => (
        <g key={c} className="h-ch" style={i(n)}>
          <rect x="22" y={34 + n * 24} width="76" height="20" rx="4" />
          <text className="sc-txt" x="30" y={48 + n * 24}>{c}</text>
        </g>
      ))}
      {msgs.map(([who, a, b, dot], n) => (
        <g key={who} className={n === 0 ? "h-msg h-first" : "h-msg"} style={i(n)}>
          <circle cx="124" cy="62" r="8" className={dot} />
          <text className="sc-txt-b" x="138" y="60" style={{ fontSize: 10 }}>{who}</text>
          <text className="sc-txt" x="138" y="76">{a}</text>
          <text className="sc-txt" x="138" y="90">{b}</text>
        </g>
      ))}
      <text className="sc-txt" x="118" y="164" style={{ fontSize: 8 }}>one agent per channel</text>
    </svg>
  );
}

const scenes: Record<Scene, () => React.JSX.Element> = {
  bedengan: Bedengan,
  bunga: Bunga,
  swim: Swim,
  kasly: Kasly,
  hermes: Hermes,
};

export default function SceneArt({ name }: { name: Scene }) {
  const Art = scenes[name];
  return <Art />;
}
