"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const solutionLinks = [
  { label: "Broadcast & OTT", href: "/solutions/broadcast" },
  { label: "Apple & Mobility", href: "/solutions/apple-mobility" },
  { label: "Post-Production", href: "/solutions/post-production" },
  { label: "Wedding", href: "/solutions/wedding" },
  { label: "Cable TV Playout", href: "/solutions/cable-tv" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions", hasDropdown: true },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileSolutionsOpen(false);
  }, [pathname]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className="nav-glass sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center cursor-pointer shrink-0"
            aria-label="Cinthamani Computers — Home"
          >
            <Image
              src="/logo.png"
              alt="Cinthamani Computers"
              width={720}
              height={180}
              className="h-9 w-auto sm:h-10 brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white cursor-pointer"
                    aria-expanded={solutionsOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        solutionsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown menu */}
                  {solutionsOpen && (
                    <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 min-w-[240px] rounded-xl bg-[#1010c8]/95 py-2 shadow-xl backdrop-blur-xl border border-white/10">
                      {solutionLinks.map((solution) => (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          onClick={() => setSolutionsOpen(false)}
                          className="block px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
                        >
                          {solution.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                    pathname === link.href
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-primary cursor-pointer !px-5 !py-2 !text-sm !rounded-[var(--radius-pill)] ml-2"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center p-2 text-white lg:hidden cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed left-0 right-0 bottom-0 top-16 z-40 bg-[#1a1af0]/98 backdrop-blur-xl lg:hidden overflow-y-auto">
          <div className="flex flex-col px-6 py-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="border-b border-white/10">
                  <button
                    onClick={() =>
                      setMobileSolutionsOpen(!mobileSolutionsOpen)
                    }
                    className="flex w-full items-center justify-between py-4 text-lg text-white/90 cursor-pointer"
                    aria-expanded={mobileSolutionsOpen}
                  >
                    {link.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        mobileSolutionsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileSolutionsOpen && (
                    <div className="pb-4 pl-4">
                      {solutionLinks.map((solution) => (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2.5 text-base text-white/60 transition-colors hover:text-white cursor-pointer"
                        >
                          {solution.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`border-b border-white/10 py-4 text-lg transition-colors cursor-pointer ${
                    pathname === link.href
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Mobile CTA */}
            <div className="mt-8">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full cursor-pointer !text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
