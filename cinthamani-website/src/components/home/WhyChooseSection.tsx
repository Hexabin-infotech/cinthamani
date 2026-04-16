import { Shield, Layers, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Four Decades of Trust",
    description:
      "Since 1984, we've been designing and deploying broadcast solutions across India",
  },
  {
    icon: Layers,
    title: "End-to-End Solutions",
    description:
      "From studio design to post-production, storage to playout -- one partner for everything",
  },
  {
    icon: Zap,
    title: "Proprietary Technology",
    description:
      "TransLogger, PlayCast Pro, Channel Magick -- solutions we built for broadcasters",
  },
  {
    icon: Globe,
    title: "Global Presence",
    description:
      "Offices in Chennai, USA, and Dubai with pan-India support infrastructure",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="section-white py-20 md:py-28">
      <div className="container-narrow px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] font-semibold tracking-tight">
            Why Choose Cinthamani
          </h2>
        </div>

        {/* Feature grid */}
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-16">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-start">
              <feature.icon
                className="h-8 w-8 text-[var(--color-cta)]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-4 text-lg font-semibold tracking-tight font-[family-name:var(--font-display)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
