import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology Partners | Cinthamani Computers",
  description:
    "35+ technology partnerships including Apple, Sony, Panasonic, Blackmagic Design, Canon, LiveU, Ross, Vizrt, Harmonic, AJA, Magewell, and more. Apple Authorized Reseller.",
  openGraph: {
    title: "Technology Partners | Cinthamani Computers",
    description:
      "Trusted partnerships with 35+ leading technology brands in broadcast, IT, and AV.",
  },
};

const badges = [
  { label: "Apple Authorized Reseller", icon: Award },
  { label: "Elite System Integrator", icon: ShieldCheck },
];

const partnerCategories = [
  {
    category: "Broadcast & Playout",
    partners: [
      "Blackmagic Design",
      "Ross Video",
      "Vizrt",
      "PlayBox Neo",
      "Broadcast Pix",
      "BroadStream",
      "NewBlue",
      "Mividi",
      "Data Video",
      "Softron",
    ],
  },
  {
    category: "Camera & Imaging",
    partners: ["Sony", "Panasonic", "Canon", "Nikon", "Lumens", "Sprolink"],
  },
  {
    category: "Connectivity & Streaming",
    partners: [
      "LiveU",
      "Kiloview",
      "AJA",
      "Magewell",
      "AVM Matrix",
      "River",
    ],
  },
  {
    category: "Apple & Enterprise IT",
    partners: ["Apple", "Altair", "Samvad"],
  },
  {
    category: "Storage, MAM & Archive",
    partners: ["Harmonic", "Tessact", "Dalet", "Maxon", "Optics"],
  },
  {
    category: "Production & AV",
    partners: [
      "Workflow Labs",
      "Venera",
      "RTS",
      "Wasp",
      "VRI",
    ],
  },
];

export default function PartnersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark py-24 md:py-32">
        <div className="container-narrow text-center">
          <p className="text-sm uppercase tracking-widest text-[#CA8A04] mb-4">
            Partnerships
          </p>
          <h1 className="mb-6">Our Technology Partners</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Every solution we build is backed by partnerships with 35+ of the
            world's most trusted technology brands. Here is who stands behind
            Cinthamani.
          </p>
        </div>
      </section>

      {/* Badges */}
      <section className="section-white py-16">
        <div className="container-narrow">
          <div className="flex flex-wrap justify-center gap-6">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 bg-[var(--color-light-gray)] rounded-full px-6 py-3"
                >
                  <Icon className="w-5 h-5 text-[#CA8A04]" />
                  <span className="text-sm font-semibold">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      {partnerCategories.map((cat, idx) => (
        <section
          key={cat.category}
          className={idx % 2 === 0 ? "section-light" : "section-white"}
        >
          <div className="py-16 md:py-20">
            <div className="container-narrow">
              <h2 className="text-xl font-semibold mb-8">{cat.category}</h2>
              <div className="flex flex-wrap gap-3">
                {cat.partners.map((partner) => (
                  <div
                    key={partner}
                    className="card bg-white px-6 py-4 text-center"
                  >
                    <span className="text-[15px] font-medium">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Full Partner Grid */}
      <section className="section-dark py-20 md:py-28">
        <div className="container-narrow text-center">
          <h2 className="mb-4">All 35+ Partners</h2>
          <p className="text-white/50 mb-12 max-w-xl mx-auto">
            A comprehensive view of every technology brand in our ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Apple",
              "Sony",
              "Panasonic",
              "Blackmagic Design",
              "Canon",
              "Nikon",
              "LiveU",
              "Ross Video",
              "Vizrt",
              "Harmonic",
              "AJA",
              "Magewell",
              "PlayBox Neo",
              "Broadcast Pix",
              "Altair",
              "AVM Matrix",
              "Samvad",
              "Softron",
              "Optics",
              "Workflow Labs",
              "Venera",
              "Sprolink",
              "NewBlue",
              "Mividi",
              "BroadStream",
              "Tessact",
              "Maxon",
              "Data Video",
              "Dalet",
              "Lumens",
              "Kiloview",
              "River",
              "Wasp",
              "RTS",
              "VRI",
            ].map((partner) => (
              <span
                key={partner}
                className="px-4 py-2 rounded-full border border-white/20 text-sm text-white/80 hover:border-[#CA8A04] hover:text-[#CA8A04] transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Become a Partner</h2>
          <p className="text-[var(--color-text-tertiary)] max-w-xl mx-auto mb-8">
            Are you a technology manufacturer looking for a trusted distribution
            and integration partner in India, the Middle East, or the Americas?
            Let's talk.
          </p>
          <Link href="/contact" className="btn-primary">
            Partner With Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
