"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "cinthamani-cookie-consent";

type ConsentValue = "accepted" | "rejected" | null;

export default function CookieBanner() {
  // Three-state model: null = initial (don't render anything yet, prevents flash),
  // "show" = no prior choice → show banner, "hide" = already chose → render nothing.
  const [phase, setPhase] = useState<"loading" | "show" | "hide">("loading");
  const [visible, setVisible] = useState(false);

  // Read prior choice on mount
  useEffect(() => {
    let prior: ConsentValue = null;
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === "accepted" || v === "rejected") prior = v;
    } catch {}

    if (prior) {
      setPhase("hide");
      return;
    }

    // Wait briefly for above-the-fold to settle, then slide in
    const t = setTimeout(() => {
      setPhase("show");
      requestAnimationFrame(() => setVisible(true));
    }, 800);
    return () => clearTimeout(t);
  }, []);

  const persist = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setVisible(false);
    // Wait for fade-out, then unmount
    setTimeout(() => setPhase("hide"), 350);
  };

  if (phase !== "show") return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className={`fixed bottom-4 left-4 z-[90] w-[calc(100vw-2rem)] max-w-sm transition-all duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div
        className="overflow-hidden rounded-2xl border border-white/15 bg-[#1010c8]/95 backdrop-blur-xl"
        style={{
          boxShadow:
            "0 10px 40px rgba(0, 0, 0, 0.35), 0 0 60px rgba(202, 138, 4, 0.08)",
        }}
      >
        {/* Subtle gold hairline at top */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-cta)]/50 to-transparent" />

        <div className="p-5">
          {/* Header */}
          <div className="mb-3 flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-cta)]/15 ring-1 ring-[var(--color-cta)]/30">
              <Cookie
                className="h-4 w-4 text-[var(--color-cta)]"
                strokeWidth={2}
              />
            </div>
            <div className="flex-1">
              <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-white">
                Cookie Notice
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-white/75">
                We use cookies to improve your experience, analyse traffic, and
                personalise content. Read our{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-white underline-offset-2 hover:underline cursor-pointer"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <button
              onClick={() => persist("rejected")}
              aria-label="Dismiss"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
            >
              <X size={14} strokeWidth={2.5} />
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => persist("accepted")}
              className="flex-1 cursor-pointer rounded-lg bg-[var(--color-cta)] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-[var(--color-cta-hover)] hover:-translate-y-0.5"
            >
              Accept All
            </button>
            <button
              onClick={() => persist("rejected")}
              className="cursor-pointer rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
            >
              Reject
            </button>
            <Link
              href="/privacy#cookies"
              className="cursor-pointer text-xs font-medium text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
