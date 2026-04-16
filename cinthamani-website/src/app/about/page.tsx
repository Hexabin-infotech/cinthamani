import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Calendar,
  Globe,
  Package,
  Handshake,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Cinthamani Computers | 40 Years of Broadcast & IT Excellence",
  description:
    "Founded in 1984 in Chennai, Cinthamani Computer Pvt. Ltd. is a leading system integrator in broadcast and IT infrastructure. Apple Authorized Reseller with offices in India, USA, and Dubai.",
  openGraph: {
    title: "About Cinthamani Computers",
    description:
      "Four decades of broadcast and IT innovation. System integrators trusted by leading broadcasters across Asia and the Middle East.",
  },
};

const stats = [
  { value: "40+", label: "Years in Business", icon: Calendar },
  { value: "400+", label: "Products", icon: Package },
  { value: "35+", label: "Technology Partners", icon: Handshake },
  { value: "3", label: "Global Offices", icon: Globe },
];

const team = [
  { name: "S. Ravi", role: "Founder & Managing Director" },
  { name: "A V Sivaraman", role: "Director, Operations" },
  { name: "P Balaji", role: "Director, Technology" },
  { name: "A Sowri", role: "Director, Business Development" },
];

const offices = [
  {
    city: "Chennai, India",
    address: "48, Rajabhadar Street, T. Nagar, Chennai 600017",
    phone: "+91 44 28153842",
    email: "sales@cinthamani.com",
    flag: "Headquarters",
  },
  {
    city: "Framingham, USA",
    address: "59 Fountain Street, Framingham, MA 01702",
    phone: null,
    email: "sales@cinthamani.com",
    flag: "Americas",
  },
  {
    city: "Dubai, UAE",
    address: "IT Centre Building, Bur Dubai",
    phone: null,
    email: "sales@cinthamani.com",
    flag: "Middle East",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark py-24 md:py-32">
        <div className="container-narrow text-center">
          <p className="text-sm uppercase tracking-widest text-[#CA8A04] mb-4">
            Est. 1984
          </p>
          <h1 className="mb-6">About Cinthamani Computers</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Four decades of deeply understanding our clients' goals and crafting
            technology solutions that transform how they create, broadcast, and
            connect.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-[17px] leading-relaxed text-[var(--color-text-secondary)]">
              <p>
                Cinthamani Computer Pvt. Ltd. was founded in 1984 in Chennai
                with a clear vision: to bridge the gap between world-class
                technology and the unique needs of Indian broadcasters and
                enterprises. What started as a small operation has grown into one
                of the most respected system integrators in the broadcast and IT
                industry.
              </p>
              <p>
                Over four decades, we have evolved alongside the industry --
                from analog to digital, from tape to file-based workflows, from
                on-premise to cloud. Through every transition, our commitment
                has remained the same: deeply understanding our clients' goals,
                then crafting solutions that deliver measurable results.
              </p>
              <p>
                Today, as an Apple Authorized Reseller and a trusted partner to
                over 35 leading technology brands, we serve broadcasters,
                post-production houses, cable TV operators, enterprises, and
                creative professionals across India, the Middle East, and
                beyond. Our portfolio spans over 400 products -- from broadcast
                playout systems and OTT encoders to Apple devices and enterprise
                mobility solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-light py-20 md:py-28">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <Icon
                    className="w-8 h-8 mx-auto mb-4 text-[#CA8A04]"
                    strokeWidth={1.5}
                  />
                  <p className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--color-text-tertiary)]">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Leadership</h2>
          <p className="text-[var(--color-text-tertiary)] mb-12 max-w-xl mx-auto">
            The team driving Cinthamani's vision of technology-led
            transformation for over four decades.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="card text-center py-10 px-6"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--color-near-black)] mx-auto mb-5 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h4 className="font-semibold mb-1">{member.name}</h4>
                <p className="text-sm text-[var(--color-text-tertiary)]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-dark py-20 md:py-28">
        <div className="container-narrow text-center">
          <h2 className="mb-8">Our Mission</h2>
          <blockquote className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed italic">
            "To deeply understand our clients' goals and craft technology
            solutions that empower them to create, broadcast, and connect with
            the world -- reliably, efficiently, and at scale."
          </blockquote>
        </div>
      </section>

      {/* Global Offices */}
      <section className="section-light py-20 md:py-28">
        <div className="container-narrow">
          <h2 className="text-center mb-4">Global Presence</h2>
          <p className="text-center text-[var(--color-text-tertiary)] mb-12 max-w-xl mx-auto">
            Serving clients across three continents from our offices in India,
            the United States, and the United Arab Emirates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div key={office.city} className="card bg-white py-8 px-6">
                <span className="text-xs uppercase tracking-widest text-[#CA8A04] font-semibold">
                  {office.flag}
                </span>
                <h3 className="text-xl font-semibold mt-3 mb-4">
                  {office.city}
                </h3>
                <div className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-text-tertiary)]" />
                    <span>{office.address}</span>
                  </div>
                  {office.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 shrink-0 text-[var(--color-text-tertiary)]" />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="hover:text-[var(--color-link)]"
                      >
                        {office.phone}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 shrink-0 text-[var(--color-text-tertiary)]" />
                    <a
                      href={`mailto:${office.email}`}
                      className="hover:text-[var(--color-link)]"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Partner With Us</h2>
          <p className="text-[var(--color-text-tertiary)] mb-8 max-w-xl mx-auto">
            Whether you are a broadcaster, post-production house, cable
            operator, or enterprise -- we have the expertise and partnerships to
            power your vision.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
