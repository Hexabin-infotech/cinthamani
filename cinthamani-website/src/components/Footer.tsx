import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const solutions = [
  { label: "Broadcast & OTT", href: "/solutions/broadcast" },
  { label: "Apple & Mobility", href: "/solutions/apple-mobility" },
  { label: "Post-Production", href: "/solutions/post-production" },
  { label: "Wedding", href: "/solutions/wedding" },
  { label: "Cable TV Playout", href: "/solutions/cable-tv" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-brand-blue-dark)] text-white/80">
      {/* Gold accent hairline at top for separation */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-cta)]/40 to-transparent" aria-hidden="true" />

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Company info */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center cursor-pointer"
              aria-label="Cinthamani Computers — Home"
            >
              <Image
                src="/logo.png"
                alt="Cinthamani Computers"
                width={720}
                height={180}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Cinthamani Computers Pvt. Ltd. — Trusted broadcast and IT
              solutions partner since 1984. Four decades of innovation,
              serving broadcasters, studios, and enterprises across India.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white hover:translate-x-0.5 inline-block cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Solutions
            </h3>
            <ul className="mt-4 space-y-3">
              {solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white hover:translate-x-0.5 inline-block cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--color-cta)]"
                />
                <span className="text-sm leading-relaxed text-white/75">
                  48, Rajabhadar Street,
                  <br />
                  T. Nagar, Chennai 600017
                </span>
              </li>
              <li>
                <a
                  href="tel:+914428153842"
                  className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-white cursor-pointer"
                >
                  <Phone size={18} className="shrink-0 text-[var(--color-cta)]" />
                  +91 44 2815 3842
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@cinthamani.com"
                  className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-white cursor-pointer"
                >
                  <Mail size={18} className="shrink-0 text-[var(--color-cta)]" />
                  sales@cinthamani.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar — slightly darker shade of brand blue */}
      <div className="border-t border-white/10 bg-black/25">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <p className="text-xs text-white/60">
              &copy; {new Date().getFullYear()} Cinthamani Computers Pvt. Ltd.
              All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-xs text-white/60 transition-colors hover:text-white cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-white/60 transition-colors hover:text-white cursor-pointer"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
