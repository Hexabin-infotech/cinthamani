import { Radio, Monitor, Film, Cpu, Camera, Tv, ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    title: "Broadcast & OTT",
    description:
      "End-to-end broadcast infrastructure from studio design to cloud playout",
    icon: Radio,
    slug: "broadcast-ott",
  },
  {
    title: "Apple & Mobility",
    description:
      "Apple Authorized Reseller with 25+ years of enterprise deployment expertise",
    icon: Monitor,
    slug: "apple-mobility",
  },
  {
    title: "Post-Production",
    description:
      "Centralized storage, editing suites, MAM, and archival solutions",
    icon: Film,
    slug: "post-production",
  },
  {
    title: "Proprietary Products",
    description:
      "TransLogger, PlayCast Pro, TransMaster -- built for broadcast",
    icon: Cpu,
    slug: "proprietary-products",
  },
  {
    title: "Wedding Tech",
    description:
      "Selfie Horizon 360, streaming solutions, and wireless transmission",
    icon: Camera,
    slug: "wedding-tech",
  },
  {
    title: "Cable TV Playout",
    description:
      "Channel Magick -- revolutionary broadcast automation software",
    icon: Tv,
    slug: "cable-tv-playout",
  },
];

export default function SolutionsSection() {
  return (
    <section className="section-light py-20 md:py-28">
      <div className="container-narrow px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] font-semibold tracking-tight">
            Solutions That Power Your Vision
          </h2>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              href={`/solutions/${solution.slug}`}
              className="group flex flex-col rounded-lg bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
            >
              <solution.icon
                className="h-8 w-8 text-[var(--color-cta)]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-[var(--color-near-black)] font-[family-name:var(--font-display)]">
                {solution.title}
              </h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
                {solution.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-link)] transition-colors group-hover:text-[var(--color-cta)]">
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
