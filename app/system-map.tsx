"use client";

import { useState } from "react";
import { systemMap } from "@/lib/content";

const W = 142;
const H = 46;

export default function SystemMap() {
  const { hub, nodes, extraEdges } = systemMap;
  const [active, setActive] = useState<string | null>(null);
  const pos = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const current = nodes.find((n) => n.id === active);

  const isOn = (a: string, b?: string) =>
    active !== null && (a === active || b === active);

  return (
    <figure className="map" aria-label="Map of the internal systems I built and connected at Wisata Bedengan">
      <svg viewBox="0 0 640 420" role="group" onMouseLeave={() => setActive(null)}>
        {nodes.map((n) => (
          <line key={`e-${n.id}`} className={`edge${isOn(n.id) ? " on" : ""}`} x1={hub.x} y1={hub.y} x2={n.x} y2={n.y} />
        ))}
        {extraEdges.map(([a, b]) => (
          <line
            key={`x-${a}-${b}`}
            className={`edge extra${isOn(a, b) ? " on" : ""}`}
            x1={pos[a].x} y1={pos[a].y} x2={pos[b].x} y2={pos[b].y}
          />
        ))}
        <g className="hub">
          <circle className="pulse" cx={hub.x} cy={hub.y} r={58} />
          <circle cx={hub.x} cy={hub.y} r={58} />
          <text x={hub.x} y={hub.y + 5} textAnchor="middle">{hub.label}</text>
        </g>
        {nodes.map((n) => (
          <g
            key={n.id}
            className={`node${active === n.id ? " on" : ""}`}
            tabIndex={0}
            role="button"
            aria-label={`${n.label}: ${n.detail}`}
            aria-pressed={active === n.id}
            onMouseEnter={() => setActive(n.id)}
            onFocus={() => setActive(n.id)}
            onClick={() => setActive(n.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive(n.id);
              }
            }}
          >
            <rect x={n.x - W / 2} y={n.y - H / 2} width={W} height={H} rx={23} />
            <text x={n.x} y={n.y + 5} textAnchor="middle">{n.label}</text>
          </g>
        ))}
      </svg>
      <div className="map-list">
        <p className="map-hub">{hub.label}, connected to</p>
        <ul>
          {nodes.map((n) => (
            <li key={n.id}>
              <button
                type="button"
                aria-pressed={active === n.id}
                className={active === n.id ? "on" : undefined}
                onClick={() => setActive(n.id)}
              >
                {n.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="caption" aria-live="polite">
        {current ? (
          <>
            <strong>{current.label}.</strong> {current.detail}
          </>
        ) : (
          <>
            <strong>{hub.label}.</strong> {hub.detail} Point at a system to see what it does.
          </>
        )}
      </figcaption>
    </figure>
  );
}
