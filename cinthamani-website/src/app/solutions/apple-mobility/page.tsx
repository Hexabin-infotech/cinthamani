import type { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Tablet,
  Laptop,
  Monitor,
  Shield,
  Users,
  GraduationCap,
  Heart,
  Video,
  ArrowRight,
  CheckCircle,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Apple & Mobility Solutions | Cinthamani Computers",
  description:
    "Apple Authorized Reseller offering iPhone, iPad, Mac, iMac, and MacBook. Enterprise mobility with Jamf MDM. AV solutions with Magewell, PTZ cameras, and LED displays.",
  openGraph: {
    title: "Apple & Mobility Solutions | Cinthamani Computers",
    description:
      "Apple Authorized Reseller with enterprise MDM and professional AV solutions.",
  },
};

const appleProducts = [
  {
    name: "iPhone",
    description:
      "Enterprise and consumer iPhone deployments with volume purchasing, configuration, and lifecycle management.",
    icon: Smartphone,
  },
  {
    name: "iPad",
    description:
      "iPad solutions for education, healthcare, retail, and field operations. Custom configurations with MDM enrollment.",
    icon: Tablet,
  },
  {
    name: "Mac & iMac",
    description:
      "Desktop Mac solutions for creative professionals, developers, and enterprise workstations. Apple Silicon performance.",
    icon: Monitor,
  },
  {
    name: "MacBook Pro & MacBook Air",
    description:
      "Portable computing for professionals on the move. Custom configurations, AppleCare, and enterprise deployment.",
    icon: Laptop,
  },
];

const jamfFeatures = [
  "Zero-touch deployment for new devices",
  "Automated app installation and updates",
  "Security policy enforcement and compliance",
  "Remote lock, wipe, and device recovery",
  "Inventory and asset management",
  "Self-service app catalog for employees",
  "Integration with existing directory services",
  "Trusted by 75,900+ organizations worldwide",
];

const avSolutions = [
  {
    name: "Magewell Capture & Encoding",
    description:
      "Professional video capture cards, USB capture devices, and NDI encoders/decoders for broadcast and enterprise AV.",
  },
  {
    name: "PTZ Cameras",
    description:
      "Remote-controlled PTZ cameras for studios, houses of worship, lecture halls, and corporate boardrooms.",
  },
  {
    name: "LED Display Solutions",
    description:
      "Indoor and outdoor LED displays and video walls for corporate lobbies, command centers, and event venues.",
  },
  {
    name: "Conferencing Systems",
    description:
      "Complete video conferencing solutions for meeting rooms, boardrooms, and hybrid workspaces.",
  },
];

const applicationAreas = [
  {
    title: "Classroom & Education",
    description:
      "iPad and Mac deployments for schools, universities, and training centers. Apple School Manager integration with Jamf.",
    icon: GraduationCap,
  },
  {
    title: "Healthcare",
    description:
      "HIPAA-aware device management for hospitals and clinics. iPad at bedside, shared device workflows, and telehealth-ready AV.",
    icon: Heart,
  },
  {
    title: "Conference & Corporate",
    description:
      "Boardroom AV systems, digital signage, video conferencing, and enterprise Mac/iPad fleet management.",
    icon: Building2,
  },
  {
    title: "Emergency & Command",
    description:
      "Ruggedized iPad deployments, mobile command center AV, and real-time video distribution for emergency services.",
    icon: Shield,
  },
];

export default function AppleMobilityPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark py-24 md:py-32">
        <div className="container-narrow text-center">
          <p className="text-sm uppercase tracking-widest text-[#CA8A04] mb-4">
            Apple Authorized Reseller
          </p>
          <h1 className="mb-6">Apple & Mobility Solutions</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            From individual devices to enterprise-wide deployments -- we bring
            Apple's ecosystem to your organization with expert configuration,
            management, and support.
          </p>
        </div>
      </section>

      {/* Apple Products */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow">
          <h2 className="text-center mb-4">Apple Products</h2>
          <p className="text-center text-[var(--color-text-tertiary)] mb-14 max-w-xl mx-auto">
            As an Apple Authorized Reseller, we offer the full range of Apple
            hardware with enterprise-grade procurement and support.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {appleProducts.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.name}
                  className="card flex gap-5 p-8"
                >
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
                    <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jamf MDM */}
      <section className="section-light py-20 md:py-28">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <Shield
              className="w-12 h-12 mx-auto mb-6 text-[#CA8A04]"
              strokeWidth={1.5}
            />
            <h2 className="mb-4">Enterprise Device Management with Jamf</h2>
            <p className="text-[var(--color-text-tertiary)] mb-10 max-w-xl mx-auto">
              Jamf is the standard for Apple device management, trusted by
              75,900+ organizations worldwide. We are certified Jamf partners
              delivering end-to-end MDM solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {jamfFeatures.map((feature) => (
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
      </section>

      {/* AV Solutions */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow">
          <h2 className="text-center mb-4">AV Solutions</h2>
          <p className="text-center text-[var(--color-text-tertiary)] mb-14 max-w-xl mx-auto">
            Professional audio-visual systems for every environment, from
            intimate meeting rooms to large-scale command centers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {avSolutions.map((solution) => (
              <div key={solution.name} className="card p-8">
                <Video
                  className="w-8 h-8 mb-4 text-[#CA8A04]"
                  strokeWidth={1.5}
                />
                <h4 className="font-semibold mb-2">{solution.name}</h4>
                <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="section-dark py-20 md:py-28">
        <div className="container-narrow">
          <h2 className="text-center mb-4">Application Areas</h2>
          <p className="text-center text-white/50 mb-14 max-w-xl mx-auto">
            Apple and AV solutions tailored to the unique needs of every
            industry vertical.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {applicationAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="rounded-lg bg-white/5 border border-white/10 p-8"
                >
                  <Icon className="w-8 h-8 mb-4 text-[#CA8A04]" strokeWidth={1.5} />
                  <h4 className="text-white font-semibold mb-2">{area.title}</h4>
                  <p className="text-[15px] text-white/60 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Bring Apple to Your Organization</h2>
          <p className="text-[var(--color-text-tertiary)] max-w-xl mx-auto mb-8">
            From a single MacBook to a fleet of thousands, our team will
            configure, deploy, and manage your Apple ecosystem.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
