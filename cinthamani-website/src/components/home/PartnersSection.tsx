"use client";

const partners = [
  "Apple",
  "Sony",
  "Panasonic",
  "Blackmagic Design",
  "Canon",
  "Nikon",
  "LiveU",
  "Ross",
  "Vizrt",
  "Harmonic",
  "AJA",
  "Magewell",
  "PlayBox Neo",
  "Broadcast Pix",
  "Softron",
  "Data Video",
  "Lumens",
  "Kiloview",
  "Venera",
  "BroadStream",
];

export default function PartnersSection() {
  return (
    <section className="section-white overflow-hidden py-20 md:py-28">
      <div className="container-narrow px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] font-semibold tracking-tight">
            Trusted Technology Partners
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Elite partnerships with 35+ global brands
          </p>
        </div>
      </div>

      {/* Marquee container */}
      <div className="relative mt-14">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-24" />

        {/* Scrolling track */}
        <div className="flex animate-marquee gap-4">
          {/* Duplicate the list for seamless loop */}
          {[...partners, ...partners].map((partner, i) => (
            <span
              key={`${partner}-${i}`}
              className="inline-flex flex-shrink-0 items-center rounded-full border border-[var(--color-overlay)] bg-[var(--color-light-gray)] px-5 py-2.5 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-cta)] hover:text-[var(--color-cta)]"
            >
              {partner}
            </span>
          ))}
        </div>

        {/* Second row scrolling in reverse for visual interest */}
        <div className="mt-4 flex animate-marquee-reverse gap-4">
          {[...partners.slice(10), ...partners.slice(0, 10), ...partners.slice(10), ...partners.slice(0, 10)].map(
            (partner, i) => (
              <span
                key={`rev-${partner}-${i}`}
                className="inline-flex flex-shrink-0 items-center rounded-full border border-[var(--color-overlay)] bg-[var(--color-light-gray)] px-5 py-2.5 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-cta)] hover:text-[var(--color-cta)]"
              >
                {partner}
              </span>
            )
          )}
        </div>
      </div>

      {/* CSS-only marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
          width: max-content;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee,
          .animate-marquee-reverse {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
