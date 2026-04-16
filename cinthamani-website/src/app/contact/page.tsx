"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Send,
  Building2,
  CheckCircle,
} from "lucide-react";

const interests = [
  "Broadcast & OTT",
  "Apple & IT",
  "Post-Production",
  "Wedding Technology",
  "Cable TV Playout",
  "Other",
];

const offices = [
  {
    city: "Chennai, India",
    flag: "Headquarters",
    address: "48, Rajabhadar Street, T. Nagar, Chennai 600017",
    phone: "+91 44 28153842",
    email: "sales@cinthamani.com",
  },
  {
    city: "Framingham, USA",
    flag: "Americas",
    address: "59 Fountain Street, Framingham, MA 01702",
    phone: null,
    email: "sales@cinthamani.com",
  },
  {
    city: "Dubai, UAE",
    flag: "Middle East",
    address: "IT Centre Building, Bur Dubai",
    phone: null,
    email: "sales@cinthamani.com",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // In production, this would POST to an API route
    setSubmitted(true);
  }

  return (
    <>
      <head>
        <title>Contact Cinthamani Computers | Get in Touch</title>
        <meta
          name="description"
          content="Contact Cinthamani Computer Pvt. Ltd. for broadcast solutions, Apple products, post-production systems, and more. Offices in Chennai, USA, and Dubai."
        />
      </head>
      <main>
        {/* Hero */}
        <section className="section-dark py-24 md:py-32">
          <div className="container-narrow text-center">
            <p className="text-sm uppercase tracking-widest text-[#CA8A04] mb-4">
              Contact Us
            </p>
            <h1 className="mb-6">Let's Build Something Great Together</h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to
              explore what's possible, our team is ready to help.
            </p>
          </div>
        </section>

        {/* Form + Offices */}
        <section className="section-white py-20 md:py-28">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Form */}
              <div className="lg:col-span-3">
                <h2 className="mb-2">Send Us a Message</h2>
                <p className="text-[var(--color-text-tertiary)] mb-8">
                  Fill out the form and we'll get back to you within one
                  business day.
                </p>

                {submitted ? (
                  <div className="card bg-[var(--color-light-gray)] p-10 text-center">
                    <CheckCircle className="w-12 h-12 mx-auto mb-4 text-[#CA8A04]" />
                    <h3 className="text-xl font-semibold mb-2">
                      Thank you for reaching out
                    </h3>
                    <p className="text-[var(--color-text-secondary)]">
                      We have received your message and will get back to you
                      within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-black/10 bg-[var(--color-light-gray)] text-[15px] outline-none focus:ring-2 focus:ring-[#CA8A04] focus:border-transparent transition-shadow"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium mb-1.5"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-black/10 bg-[var(--color-light-gray)] text-[15px] outline-none focus:ring-2 focus:ring-[#CA8A04] focus:border-transparent transition-shadow"
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-1.5"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-black/10 bg-[var(--color-light-gray)] text-[15px] outline-none focus:ring-2 focus:ring-[#CA8A04] focus:border-transparent transition-shadow"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-1.5"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-black/10 bg-[var(--color-light-gray)] text-[15px] outline-none focus:ring-2 focus:ring-[#CA8A04] focus:border-transparent transition-shadow"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-sm font-medium mb-1.5"
                      >
                        Area of Interest *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-black/10 bg-[var(--color-light-gray)] text-[15px] outline-none focus:ring-2 focus:ring-[#CA8A04] focus:border-transparent transition-shadow appearance-none"
                      >
                        <option value="">Select an area</option>
                        {interests.map((interest) => (
                          <option key={interest} value={interest}>
                            {interest}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-black/10 bg-[var(--color-light-gray)] text-[15px] outline-none focus:ring-2 focus:ring-[#CA8A04] focus:border-transparent transition-shadow resize-none"
                        placeholder="Tell us about your project or requirements..."
                      />
                    </div>

                    <button type="submit" className="btn-primary">
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-8">
                {/* Quick Contact */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+914428153842"
                      className="flex items-center gap-3 text-[15px] hover:text-[var(--color-link)] transition-colors"
                    >
                      <Phone className="w-5 h-5 text-[#CA8A04] shrink-0" />
                      +91 44 28153842
                    </a>
                    <a
                      href="mailto:sales@cinthamani.com"
                      className="flex items-center gap-3 text-[15px] hover:text-[var(--color-link)] transition-colors"
                    >
                      <Mail className="w-5 h-5 text-[#CA8A04] shrink-0" />
                      sales@cinthamani.com
                    </a>
                    <a
                      href="mailto:support@cinthamani.com"
                      className="flex items-center gap-3 text-[15px] hover:text-[var(--color-link)] transition-colors"
                    >
                      <Mail className="w-5 h-5 text-[#CA8A04] shrink-0" />
                      support@cinthamani.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-[15px] text-[var(--color-text-secondary)]">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#CA8A04] shrink-0" />
                      <div>
                        <p>Monday -- Friday: 10:00 AM -- 6:00 PM</p>
                        <p>Saturday -- Sunday: 10:00 AM -- 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Offices */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Our Offices</h3>
                  <div className="space-y-5">
                    {offices.map((office) => (
                      <div key={office.city}>
                        <p className="text-xs uppercase tracking-widest text-[#CA8A04] font-semibold mb-1">
                          {office.flag}
                        </p>
                        <p className="font-semibold text-[15px] mb-1">
                          {office.city}
                        </p>
                        <p className="text-[14px] text-[var(--color-text-tertiary)]">
                          {office.address}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="section-light py-20 md:py-28">
          <div className="container-narrow">
            <h2 className="text-center mb-4">Find Us</h2>
            <p className="text-center text-[var(--color-text-tertiary)] mb-10 max-w-xl mx-auto">
              Our headquarters in the heart of T. Nagar, Chennai -- one of the
              city's most accessible commercial districts.
            </p>
            <div className="rounded-lg bg-[var(--color-dark-surface-1)] h-64 md:h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-10 h-10 mx-auto mb-3 text-white/30" />
                <p className="text-white/40 text-sm">
                  48, Rajabhadar Street, T. Nagar, Chennai 600017
                </p>
                <a
                  href="https://maps.google.com/?q=48+Rajabhadar+Street+T+Nagar+Chennai+600017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill mt-4 text-white/60 border-white/20 hover:bg-white/10 hover:text-white"
                >
                  Open in Google Maps
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
