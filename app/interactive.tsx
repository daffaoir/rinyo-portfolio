"use client";

import { useEffect, useRef, useState } from "react";

function systemDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function currentDark() {
  const t = document.documentElement.dataset.theme;
  return t ? t === "dark" : systemDark();
}

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(currentDark());
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setDark(currentDark());
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function flip() {
    const next = currentDark() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    setDark(next === "dark");
  }

  return (
    <button type="button" className="toggle" onClick={flip} aria-label="Switch colour theme">
      <i aria-hidden="true" />
      <span>{dark === null ? "theme" : dark ? "light" : "dark"}</span>
    </button>
  );
}

export function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Jakarta" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return <span className="clock" suppressHydrationWarning>Malang {time || "--:--"} WIB</span>;
}

/** Renders the final value on the server; counts up once on the client. */
export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let t0 = 0;
    const step = (t: number) => {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / 1100, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) raf = requestAnimationFrame(step);
    };
    el.textContent = "0" + suffix;
    const start = setTimeout(() => { raf = requestAnimationFrame(step); }, 350);
    return () => { clearTimeout(start); cancelAnimationFrame(raf); el.textContent = to + suffix; };
  }, [to, suffix]);
  return <b ref={ref}>{to}{suffix}</b>;
}

/** Card spotlight that follows the pointer, and a lightbox for any `.zoomable` image. */
export function Enhancements() {
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.(".card") as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    const click = (e: MouseEvent) => {
      const img = (e.target as Element | null)?.closest?.(".zoomable") as HTMLImageElement | null;
      if (img) setZoom({ src: img.currentSrc || img.src, alt: img.alt });
    };
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") setZoom(null); };
    document.addEventListener("pointermove", move);
    document.addEventListener("click", click);
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("click", click);
      document.removeEventListener("keydown", key);
    };
  }, []);

  if (!zoom) return null;
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={zoom.alt} onClick={() => setZoom(null)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={zoom.src} alt={zoom.alt} />
      <button type="button" className="lightbox-close" onClick={() => setZoom(null)}>Close</button>
    </div>
  );
}
