import type { Metadata } from "next";
import Link from "next/link";
import {
  Tv,
  ArrowRight,
  CheckCircle,
  Layers,
  Zap,
  Crown,
  Settings,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cable TV Playout Solutions | Cinthamani Computers",
  description:
    "Channel Magick cable TV playout systems in Deluxe, Premium, and Supreme packages. CG overlays, live chroma, multi-language audio, and streaming. Decklink, AJA, Magewell hardware.",
  openGraph: {
    title: "Cable TV Playout Solutions | Cinthamani Computers",
    description:
      "Channel Magick playout systems for cable TV operators -- three tiers to match every budget and requirement.",
  },
};

const packages = [
  {
    name: "Deluxe",
    tier: "Essential",
    description:
      "Everything a small cable operator needs to launch and run a professional-looking channel with automated playout.",
    features: [
      "Automated 24/7 playout scheduling",
      "Basic CG overlay and lower thirds",
      "Single-channel output",
      "EPG (Electronic Program Guide) support",
      "Playlist management and scheduling",
      "File-based content import",
      "Standard technical support",
    ],
    cta: "Get Started",
  },
  {
    name: "Premium",
    tier: "Professional",
    description:
      "Advanced playout capabilities for growing operators who need live integration, multi-language audio, and streaming.",
    features: [
      "Everything in Deluxe, plus:",
      "Live chroma keying",
      "Multi-language audio track support",
      "Advanced CG overlays and tickers",
      "Live input switching",
      "Streaming output (RTMP/HLS)",
      "Multi-channel support",
      "Priority technical support",
    ],
    cta: "Upgrade",
    highlighted: true,
  },
  {
    name: "Supreme",
    tier: "Enterprise",
    description:
      "The complete playout platform for large cable networks and MSOs with demanding multi-channel, multi-format requirements.",
    features: [
      "Everything in Premium, plus:",
      "Unlimited channel outputs",
      "Advanced graphics engine",
      "Disaster recovery and redundancy",
      "Multi-site synchronization",
      "Ad insertion and traffic management",
      "REST API for third-party integration",
      "Dedicated account manager and SLA",
    ],
    cta: "Contact Sales",
  },
];

const addOns = [
  "Social media ticker feed integration",
  "Weather data overlay",
  "Election results graphics package",
  "Sports scoreboard overlay",
  "Ad scheduling and insertion module",
  "Remote monitoring dashboard",
  "Cloud-based disaster recovery",
  "Custom branding and graphics package",
];

const hardwareSupport = [
  {
    brand: "Blackmagic Decklink",
    description:
      "PCIe capture and playout cards. Decklink Mini Monitor, Decklink Duo 2, and Decklink 8K Pro for multi-channel workflows.",
  },
  {
    brand: "AJA Video Systems",
    description:
      "Corvid PCIe cards and KONA series for high-quality SDI and HDMI I/O. Frame synchronizers and converters.",
  },
  {
    brand: "Magewell",
    description:
      "USB and PCIe capture devices, Pro Convert NDI encoders/decoders, and Ultra Stream streaming appliances.",
  },
];

export default function CableTvPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark py-24 md:py-32">
        <div className="container-narrow text-center">
          <p className="text-sm uppercase tracking-widest text-[#CA8A04] mb-4">
            Solutions
          </p>
          <h1 className="mb-6">Cable TV Playout Solutions</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Channel Magick -- our proven playout platform for cable TV operators.
            Three tiers designed to scale with your operation, from single-channel
            to enterprise multi-site deployments.
          </p>
        </div>
      </section>

      {/* Channel Magick Overview */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow text-center">
          <Tv
            className="w-12 h-12 mx-auto mb-6 text-[#CA8A04]"
            strokeWidth={1.5}
          />
          <h2 className="mb-4">Channel Magick</h2>
          <p className="text-[var(--color-text-tertiary)] max-w-2xl mx-auto">
            Built for Indian cable operators, Channel Magick is a reliable,
            cost-effective playout system that handles automated scheduling,
            CG overlays, live chroma, streaming, and multi-language audio.
            Trusted by cable operators across Tamil Nadu, Karnataka, Kerala, and
            beyond.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-light py-20 md:py-28">
        <div className="container-narrow">
          <h2 className="text-center mb-4">Choose Your Package</h2>
          <p className="text-center text-[var(--color-text-tertiary)] mb-14 max-w-xl mx-auto">
            Three tiers to match your scale and requirements. Every package
            includes the core Channel Magick playout engine.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-lg p-8 flex flex-col ${
                  pkg.highlighted
                    ? "bg-[var(--color-near-black)] text-white ring-2 ring-[#CA8A04]"
                    : "bg-white"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-widest font-semibold mb-2 ${
                    pkg.highlighted ? "text-[#CA8A04]" : "text-[#CA8A04]"
                  }`}
                >
                  {pkg.tier}
                </p>
                <h3 className="text-2xl font-semibold mb-3">{pkg.name}</h3>
                <p
                  className={`text-[15px] leading-relaxed mb-6 ${
                    pkg.highlighted
                      ? "text-white/60"
                      : "text-[var(--color-text-secondary)]"
                  }`}
                >
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          pkg.highlighted ? "text-[#CA8A04]" : "text-[#CA8A04]"
                        }`}
                      />
                      <span
                        className={`text-[14px] ${
                          pkg.highlighted
                            ? "text-white/80"
                            : "text-[var(--color-text-secondary)]"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={
                    pkg.highlighted ? "btn-primary w-full" : "btn-secondary w-full"
                  }
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Packages */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow">
          <div className="flex items-center gap-4 mb-3">
            <Layers className="w-8 h-8 text-[#CA8A04]" strokeWidth={1.5} />
            <h2>Add-On Packages</h2>
          </div>
          <p className="text-[var(--color-text-tertiary)] mb-10 max-w-2xl">
            Extend Channel Magick with optional modules tailored to your
            programming needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addOns.map((addon) => (
              <div
                key={addon}
                className="flex items-start gap-3 bg-[var(--color-light-gray)] rounded-lg px-5 py-4"
              >
                <CheckCircle className="w-5 h-5 text-[#CA8A04] shrink-0 mt-0.5" />
                <span className="text-[15px]">{addon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Support */}
      <section className="section-light py-20 md:py-28">
        <div className="container-narrow">
          <div className="flex items-center gap-4 mb-3">
            <Settings className="w-8 h-8 text-[#CA8A04]" strokeWidth={1.5} />
            <h2>Supported Hardware</h2>
          </div>
          <p className="text-[var(--color-text-tertiary)] mb-10 max-w-2xl">
            Channel Magick integrates with industry-standard capture and playout
            hardware from leading manufacturers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hardwareSupport.map((hw) => (
              <div key={hw.brand} className="card bg-white p-6">
                <h4 className="font-semibold mb-2">{hw.brand}</h4>
                <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
                  {hw.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20 md:py-28">
        <div className="container-narrow text-center">
          <Crown className="w-12 h-12 mx-auto mb-6 text-[#CA8A04]" />
          <h2 className="mb-4">Launch Your Channel with Channel Magick</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Get a live demo, discuss your channel requirements, or request a
            custom quote for your cable TV operation.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
