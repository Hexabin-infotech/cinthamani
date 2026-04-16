import type { Metadata } from "next";
import Link from "next/link";
import {
  Radio,
  Smartphone,
  Film,
  PartyPopper,
  Tv,
  Box,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions | Cinthamani Computers",
  description:
    "End-to-end technology solutions for broadcast, OTT, post-production, Apple enterprise mobility, wedding technology, and cable TV playout. Explore our complete portfolio.",
  openGraph: {
    title: "Solutions | Cinthamani Computers",
    description:
      "Comprehensive technology solutions spanning broadcast, post-production, enterprise mobility, and more.",
  },
};

const solutions = [
  {
    title: "Broadcast & OTT",
    href: "/solutions/broadcast",
    icon: Radio,
    description:
      "Complete broadcast infrastructure -- from studio and control room design to IPTV/OTT encoding, TV playout, DSNG, and multi-camera production.",
  },
  {
    title: "Apple & Mobility",
    href: "/solutions/apple-mobility",
    icon: Smartphone,
    description:
      "Apple Authorized Reseller for iPhone, iPad, Mac, and MacBook. Enterprise mobility with Jamf MDM and AV solutions for every environment.",
  },
  {
    title: "Post-Production",
    href: "/solutions/post-production",
    icon: Film,
    description:
      "Centralized storage, high-speed ingest, professional edit suites, media asset management, and long-term archive solutions.",
  },
  {
    title: "Wedding Technology",
    href: "/solutions/wedding",
    icon: PartyPopper,
    description:
      "Selfie Horizon 360 platforms, live streaming with Neolive R2 Plus, and wireless 4K transmission for cinematic wedding coverage.",
  },
  {
    title: "Cable TV Playout",
    href: "/solutions/cable-tv",
    icon: Tv,
    description:
      "Channel Magick playout systems with CG overlays, live chroma, multi-language audio, and streaming -- in Deluxe, Premium, and Supreme tiers.",
  },
  {
    title: "Products",
    href: "/products",
    icon: Box,
    description:
      "Proprietary products including TransLogger, PlayCast Pro, TransMaster, TimeShift Streamer, TransVTR, and Channel Magick.",
  },
];

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark py-24 md:py-32">
        <div className="container-narrow text-center">
          <p className="text-sm uppercase tracking-widest text-[#CA8A04] mb-4">
            What We Do
          </p>
          <h1 className="mb-6">Our Solutions</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            End-to-end technology solutions built on 40 years of expertise and
            partnerships with the world's leading technology brands.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={solution.title}
                  href={solution.href}
                  className="card group flex flex-col p-8"
                >
                  <Icon
                    className="w-10 h-10 mb-5 text-[#CA8A04]"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-semibold mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed mb-6 flex-1">
                    {solution.description}
                  </p>
                  <span className="btn-pill w-fit group-hover:bg-[var(--color-link)] group-hover:text-white">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Callout */}
      <section className="section-light py-20 md:py-28">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Backed by 35+ Technology Partners</h2>
          <p className="text-[var(--color-text-tertiary)] max-w-xl mx-auto mb-8">
            Every solution we deliver is powered by partnerships with the
            industry's most trusted brands -- Apple, Blackmagic Design, Sony,
            Harmonic, LiveU, and many more.
          </p>
          <Link href="/partners" className="btn-pill">
            View All Partners
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20 md:py-28">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Not Sure Where to Start?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Our team will help you identify the right combination of products
            and services to meet your goals. No obligation, no pressure.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
