import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Box,
  MonitorPlay,
  Radio,
  HardDrive,
  Timer,
  Clapperboard,
  Tv,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Solutions | Cinthamani Computers",
  description:
    "Proprietary products from Cinthamani -- TransLogger, PlayCast Pro, TransMaster, TimeShift Streamer, TransVTR, and Channel Magick. Plus Apple products as an Authorized Reseller.",
  openGraph: {
    title: "Products & Solutions | Cinthamani Computers",
    description:
      "Proprietary broadcast products and Apple hardware from Cinthamani Computers.",
  },
};

const proprietaryProducts = [
  {
    name: "TransLogger",
    description:
      "Automated broadcast logging and compliance recording system. Captures and archives broadcast output 24/7 with frame-accurate search, playback, and export. Essential for regulatory compliance and quality assurance.",
    icon: HardDrive,
  },
  {
    name: "PlayCast Pro",
    description:
      "Professional playout and streaming engine for broadcasters and content creators. Supports scheduled playout, live switching, graphics overlay, and simultaneous multi-platform streaming.",
    icon: MonitorPlay,
  },
  {
    name: "TransMaster",
    description:
      "High-speed transcoding and format conversion at up to 5x real-time. Batch processing, watch-folder automation, and support for all major broadcast codecs including ProRes, DNxHD, H.264, and H.265.",
    icon: Radio,
  },
  {
    name: "TimeShift Streamer",
    description:
      "Time-shift and catch-up TV solution for IPTV and OTT operators. Allows viewers to rewind live broadcasts, pause, and resume -- with seamless DVR-like functionality across devices.",
    icon: Timer,
  },
  {
    name: "TransVTR",
    description:
      "Virtual tape recorder for file-based broadcast workflows. Replaces traditional VTRs with software-based record and playback, supporting SDI/HDMI input and output with frame-accurate control.",
    icon: Clapperboard,
  },
  {
    name: "Channel Magick",
    description:
      "Complete cable TV playout platform with automated scheduling, CG overlays, live chroma, multi-language audio, and streaming. Available in Deluxe, Premium, and Supreme packages.",
    icon: Tv,
    href: "/solutions/cable-tv",
  },
];

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark py-24 md:py-32">
        <div className="container-narrow text-center">
          <p className="text-sm uppercase tracking-widest text-[#CA8A04] mb-4">
            Products
          </p>
          <h1 className="mb-6">Our Products & Solutions</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Purpose-built products for broadcast, playout, transcoding, and
            streaming -- designed and supported by the Cinthamani engineering
            team.
          </p>
        </div>
      </section>

      {/* Proprietary Products */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow">
          <h2 className="text-center mb-4">Cinthamani Products</h2>
          <p className="text-center text-[var(--color-text-tertiary)] mb-14 max-w-xl mx-auto">
            Proprietary products engineered for Indian and international
            broadcast workflows. Built on decades of domain expertise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proprietaryProducts.map((product) => {
              const Icon = product.icon;
              return (
                <div key={product.name} className="card flex gap-5 p-8">
                  <div className="shrink-0">
                    <Icon
                      className="w-10 h-10 text-[#CA8A04]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed mb-4">
                      {product.description}
                    </p>
                    {product.href && (
                      <Link href={product.href} className="btn-pill w-fit">
                        View Details
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Apple Products */}
      <section className="section-light py-20 md:py-28">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <Smartphone
              className="w-12 h-12 mx-auto mb-6 text-[#CA8A04]"
              strokeWidth={1.5}
            />
            <h2 className="mb-4">Apple Products</h2>
            <p className="text-[var(--color-text-tertiary)] mb-8 max-w-xl mx-auto">
              As an Apple Authorized Reseller, we offer the full range of Apple
              hardware -- iPhone, iPad, Mac, iMac, MacBook Pro, and MacBook
              Air -- with enterprise procurement, configuration, and Jamf MDM
              management.
            </p>
            <Link href="/solutions/apple-mobility" className="btn-pill">
              Explore Apple Solutions
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Products callout */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow text-center">
          <h2 className="mb-4">400+ Products from 35+ Partners</h2>
          <p className="text-[var(--color-text-tertiary)] max-w-xl mx-auto mb-8">
            Beyond our proprietary products, we distribute and integrate
            solutions from Blackmagic Design, Sony, Panasonic, Harmonic, LiveU,
            Ross Video, and many more.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Blackmagic Design",
              "Sony",
              "Panasonic",
              "Harmonic",
              "LiveU",
              "Ross Video",
              "AJA",
              "Magewell",
              "Vizrt",
              "PlayBox Neo",
            ].map((partner) => (
              <span
                key={partner}
                className="px-4 py-2 bg-[var(--color-light-gray)] rounded-full text-sm font-medium"
              >
                {partner}
              </span>
            ))}
          </div>
          <Link href="/partners" className="btn-pill">
            View All Partners
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20 md:py-28">
        <div className="container-narrow text-center">
          <Box className="w-12 h-12 mx-auto mb-6 text-[#CA8A04]" />
          <h2 className="mb-4">Need Pricing or a Custom Configuration?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Every requirement is different. Contact our team for product
            pricing, bundle configurations, or a personalized demo.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact for Pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
