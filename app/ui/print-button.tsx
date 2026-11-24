"use client";

export default function PrintButton({ label }: { label: string }) {
  return (
    <button type="button" className="pill print-btn" onClick={() => window.print()}>
      {label}
    </button>
  );
}
