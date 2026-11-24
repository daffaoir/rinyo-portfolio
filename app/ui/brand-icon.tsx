import type { CSSProperties } from "react";
import { icons, type IconName } from "@/lib/icons";

/** A simple-icons brand mark. Monochrome by default; `.brand` hover can switch to the brand colour via --brand. */
export default function Icon({ name, size = 18, label }: { name: IconName; size?: number; label?: string }) {
  const i = icons[name];
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className="icon"
      style={{ "--brand": i.hex } as CSSProperties}
    >
      <path d={i.path} fill="currentColor" />
    </svg>
  );
}
