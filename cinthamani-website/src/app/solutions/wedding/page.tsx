import type { Metadata } from "next";
import Link from "next/link";
import {
  Camera,
  Wifi,
  RotateCcw,
  ArrowRight,
  CheckCircle,
  Radio,
  Video,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Wedding Technology Solutions | Cinthamani Computers",
  description:
    "Premium wedding technology -- Selfie Horizon 360 rotating platforms, Neolive R2 Plus live streaming, and MD2-4K wireless 4K transmission up to 200 metres.",
  openGraph: {
    title: "Wedding Technology Solutions | Cinthamani Computers",
    description:
      "360 photo booths, live streaming, and wireless 4K video for unforgettable weddings.",
  },
};

const selfieFeatures = [
  '29-inch rotating platform with 360-degree capture',
  "Slow-motion and boomerang video modes",
  "Fog machine model for dramatic effect",
  "Instant sharing to social media",
  "Custom overlays and branding",
  "Compact, portable design for any venue",
  "Professional lighting ring included",
  "Touchscreen operation for guests",
];

const streamingFeatures = [
  "Full HD and 4K live streaming",
  "Multi-platform simulcast (YouTube, Facebook, custom RTMP)",
  "On-screen graphics and lower thirds",
  "Multi-camera switching",
  "Recording with simultaneous streaming",
  "Remote viewer analytics",
];

const wirelessFeatures = [
  "Wireless 4K video transmission",
  "Range up to 200 metres line-of-sight",
  "Zero-latency monitoring",
  "Dual-band operation for interference resistance",
  "Battery-powered transmitter for full mobility",
  "Multiple receiver support for distributed monitoring",
];

export default function WeddingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark py-24 md:py-32">
        <div className="container-narrow text-center">
          <p className="text-sm uppercase tracking-widest text-[#CA8A04] mb-4">
            Solutions
          </p>
          <h1 className="mb-6">Wedding Technology Solutions</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Elevate every celebration with cutting-edge technology -- 360
            photo experiences, professional live streaming, and cinema-grade
            wireless video for wedding videographers.
          </p>
        </div>
      </section>

      {/* Selfie Horizon 360 */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-3">
              <RotateCcw
                className="w-10 h-10 text-[#CA8A04]"
                strokeWidth={1.5}
              />
              <h2>Selfie Horizon 360</h2>
            </div>
            <p className="text-[var(--color-text-tertiary)] mb-10 max-w-2xl">
              The showstopper of any wedding reception. A 29-inch rotating
              platform that captures stunning 360-degree slow-motion videos of
              guests, complete with dramatic fog effects and instant social
              sharing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selfieFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 bg-[var(--color-light-gray)] rounded-lg px-5 py-4"
                >
                  <CheckCircle className="w-5 h-5 text-[#CA8A04] shrink-0 mt-0.5" />
                  <span className="text-[15px]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neolive R2 Plus */}
      <section className="section-light py-20 md:py-28">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-3">
              <Radio
                className="w-10 h-10 text-[#CA8A04]"
                strokeWidth={1.5}
              />
              <h2>Live Streaming -- Neolive R2 Plus</h2>
            </div>
            <p className="text-[var(--color-text-tertiary)] mb-10 max-w-2xl">
              Share the moment with guests who cannot be there in person.
              Professional multi-camera live streaming with on-screen graphics,
              delivered to any platform worldwide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {streamingFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 bg-white rounded-lg px-5 py-4"
                >
                  <CheckCircle className="w-5 h-5 text-[#CA8A04] shrink-0 mt-0.5" />
                  <span className="text-[15px]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MD2-4K Wireless */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-3">
              <Wifi
                className="w-10 h-10 text-[#CA8A04]"
                strokeWidth={1.5}
              />
              <h2>Wireless 4K -- MD2-4K</h2>
            </div>
            <p className="text-[var(--color-text-tertiary)] mb-10 max-w-2xl">
              Untether your cameras. The MD2-4K delivers pristine wireless 4K
              video transmission at distances up to 200 metres -- giving
              wedding videographers complete creative freedom without cable runs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {wirelessFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 bg-[var(--color-light-gray)] rounded-lg px-5 py-4"
                >
                  <CheckCircle className="w-5 h-5 text-[#CA8A04] shrink-0 mt-0.5" />
                  <span className="text-[15px]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-dark py-20 md:py-28">
        <div className="container-narrow text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-6 text-[#CA8A04]" />
          <h2 className="mb-4">Why Wedding Professionals Choose Cinthamani</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-10">
            We bring broadcast-grade technology to the wedding industry.
            Our products are built for reliability under pressure, ease of use
            in fast-paced environments, and results that leave a lasting
            impression.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Broadcast-Grade Quality",
                description:
                  "The same technology trusted by TV broadcasters, adapted for wedding professionals.",
              },
              {
                title: "On-Site Support",
                description:
                  "Training, setup assistance, and technical support to ensure flawless events.",
              },
              {
                title: "Competitive Pricing",
                description:
                  "Direct partnerships with manufacturers mean better value for wedding businesses.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg bg-white/5 border border-white/10 p-6 text-left"
              >
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-[15px] text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Upgrade Your Wedding Production Kit</h2>
          <p className="text-[var(--color-text-tertiary)] max-w-xl mx-auto mb-8">
            Get a personalized demo of our wedding technology products or request
            pricing for your business.
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
