import type { Metadata } from "next";
import Link from "next/link";
import {
  Radio,
  Monitor,
  Tv,
  Video,
  Mic,
  Wifi,
  Cloud,
  CheckCircle,
  ArrowRight,
  SatelliteDish,
  Camera,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Broadcast & OTT Solutions | Cinthamani Computers",
  description:
    "Complete broadcast and OTT infrastructure solutions -- intercomm, chroma/live graphics, IPTV/OTT encoders, TV playout, studio design, DSNG, NRCS, and multi-camera production.",
  openGraph: {
    title: "Broadcast & OTT Solutions | Cinthamani Computers",
    description:
      "End-to-end broadcast infrastructure from studio design to OTT delivery.",
  },
};

const services = [
  {
    title: "Intercomm Systems",
    description:
      "Professional intercom solutions for seamless communication across studios, control rooms, and remote production environments. Crystal-clear audio with flexible routing.",
    icon: Mic,
  },
  {
    title: "Chroma & Live Graphics",
    description:
      "Real-time chroma keying and live graphics overlay systems for news, sports, elections, and entertainment programming. Vizrt, Ross, and NewBlue powered.",
    icon: Layers,
  },
  {
    title: "IPTV / OTT Encoders",
    description:
      "Broadcast-grade encoding solutions for IPTV distribution and OTT streaming. Support for H.264, H.265/HEVC, and adaptive bitrate workflows.",
    icon: Wifi,
  },
  {
    title: "TV Playout (On-Prem & Cloud)",
    description:
      "Automated TV playout systems for 24/7 channel operations. On-premise, cloud, or hybrid deployments with PlayBox Neo and BroadStream integration.",
    icon: Tv,
  },
  {
    title: "Studio & Control Room Design",
    description:
      "Turnkey studio and control room design, installation, and commissioning. Lighting, acoustics, furniture, and all technical infrastructure.",
    icon: Monitor,
  },
  {
    title: "Replay Systems",
    description:
      "Instant replay and slow-motion systems for live sports and event production. Multi-angle capture with frame-accurate playback control.",
    icon: Video,
  },
  {
    title: "Teleprompter Solutions",
    description:
      "Professional teleprompter systems for news studios, corporate presentations, and live events. Hardware and software solutions with remote control.",
    icon: Monitor,
  },
  {
    title: "Video Quality Control",
    description:
      "Automated and manual video QC workflows powered by Venera Technologies. Ensure compliance with broadcast standards before transmission.",
    icon: CheckCircle,
  },
  {
    title: "DSNG (Digital Satellite News Gathering)",
    description:
      "Mobile uplink solutions for live news reporting from any location. Compact, reliable satellite and bonded cellular transmission.",
    icon: SatelliteDish,
  },
  {
    title: "NRCS (Newsroom Computer Systems)",
    description:
      "Integrated newsroom automation systems for story planning, scripting, rundown management, and MOS-compliant device control.",
    icon: Radio,
  },
  {
    title: "Multi-Camera & Switcher Systems",
    description:
      "Live multi-camera production switchers and routing systems. From compact units for small studios to enterprise-grade solutions for large broadcast facilities.",
    icon: Camera,
  },
];

const workflows = [
  "Live News Production",
  "Sports Broadcasting",
  "Election Coverage",
  "Entertainment Channels",
  "Religious & Devotional Channels",
  "OTT Platform Originals",
  "Corporate Broadcasting",
  "Remote / Cloud Production",
];

export default function BroadcastPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark py-24 md:py-32">
        <div className="container-narrow text-center">
          <p className="text-sm uppercase tracking-widest text-[#CA8A04] mb-4">
            Solutions
          </p>
          <h1 className="mb-6">Broadcast & OTT Solutions</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            End-to-end broadcast infrastructure -- from studio design and
            control room commissioning to live production, playout automation,
            and OTT delivery.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow">
          <h2 className="text-center mb-4">Our Broadcast Services</h2>
          <p className="text-center text-[var(--color-text-tertiary)] mb-14 max-w-xl mx-auto">
            Every component of the broadcast chain, designed and integrated by a
            team with decades of hands-on experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="card flex gap-5 p-6"
                >
                  <div className="shrink-0">
                    <Icon
                      className="w-8 h-8 text-[#CA8A04]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supported Workflows */}
      <section className="section-light py-20 md:py-28">
        <div className="container-narrow">
          <h2 className="text-center mb-4">Supported Workflows</h2>
          <p className="text-center text-[var(--color-text-tertiary)] mb-12 max-w-xl mx-auto">
            Our broadcast solutions power a wide range of production and
            distribution workflows across the industry.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {workflows.map((workflow) => (
              <div
                key={workflow}
                className="flex items-center gap-3 bg-white rounded-lg px-5 py-4"
              >
                <CheckCircle className="w-5 h-5 text-[#CA8A04] shrink-0" />
                <span className="text-[15px] font-medium">{workflow}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Broadcast Technology Partners</h2>
          <p className="text-[var(--color-text-tertiary)] mb-10 max-w-xl mx-auto">
            We integrate best-in-class products from the world's leading
            broadcast technology manufacturers.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Blackmagic Design",
              "Ross Video",
              "Vizrt",
              "PlayBox Neo",
              "Broadcast Pix",
              "LiveU",
              "Harmonic",
              "AJA",
              "Magewell",
              "BroadStream",
              "Venera",
              "NewBlue",
              "Mividi",
              "Data Video",
              "Kiloview",
            ].map((partner) => (
              <span
                key={partner}
                className="px-4 py-2 bg-[var(--color-light-gray)] rounded-full text-sm font-medium"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20 md:py-28">
        <div className="container-narrow text-center">
          <Cloud className="w-12 h-12 mx-auto mb-6 text-[#CA8A04]" />
          <h2 className="mb-4">Ready to Transform Your Broadcast Workflow?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Whether you are building a new channel from scratch or upgrading an
            existing facility, our broadcast engineers will design the perfect
            solution.
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
