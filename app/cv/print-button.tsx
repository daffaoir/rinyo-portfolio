"use client";

export default function PrintButton() {
  return (
    <button type="button" className="btn primary print-btn" onClick={() => window.print()}>
      Save as PDF
    </button>
  );
}
