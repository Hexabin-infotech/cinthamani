"use client";

import { useState } from "react";
import {
  Building2,
  Bot,
  Search,
  Plug,
  Shield,
  Save,
  Eye,
  EyeOff,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

interface SettingsSection {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const sections: SettingsSection[] = [
  {
    id: "company",
    icon: Building2,
    title: "Company Info",
    description: "Business name, tagline, and contact details",
  },
  {
    id: "ai-blog",
    icon: Bot,
    title: "AI Blog Settings",
    description: "Automated content generation configuration",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Settings",
    description: "Default meta tags, sitemap, and robots.txt",
  },
  {
    id: "integrations",
    icon: Plug,
    title: "Integrations",
    description: "GA4, Search Console, WhatsApp, CRM",
  },
  {
    id: "account",
    icon: Shield,
    title: "Admin Account",
    description: "Email, password, and security settings",
  },
];

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1d1d1f]">
            Settings
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage your website configuration and integrations.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 bg-[#CA8A04] hover:bg-[#a16207] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
        >
          {saved ? (
            <>
              <CheckCircle2 size={14} />
              Saved
            </>
          ) : (
            <>
              <Save size={14} />
              Save Changes
            </>
          )}
        </button>
      </div>

      {/* Quick nav */}
      <div className="flex flex-wrap gap-2">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="inline-flex items-center gap-1.5 bg-[#f5f5f7] hover:bg-gray-200 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 transition-colors no-underline"
          >
            <s.icon size={12} />
            {s.title}
          </a>
        ))}
      </div>

      {/* Company Info */}
      <section id="company" className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-6">
        <div className="flex items-center gap-2 mb-5">
          <Building2 size={18} className="text-[#CA8A04]" />
          <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[#1d1d1f]">
            Company Info
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1.5 block">
              Company Name
            </label>
            <input
              type="text"
              defaultValue="Cinthamani Computers Pvt. Ltd."
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1.5 block">
              Tagline
            </label>
            <input
              type="text"
              defaultValue="Broadcast & IT Solutions Since 1984"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1.5 block">
              Primary Email
            </label>
            <input
              type="email"
              defaultValue="info@cinthamani.com"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1.5 block">
              Phone Number
            </label>
            <input
              type="tel"
              defaultValue="+91 44 2345 6789"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="text-xs font-medium text-gray-500 mb-1.5 block">
              Address
            </label>
            <input
              type="text"
              defaultValue="Chennai, Tamil Nadu, India"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all"
            />
          </div>
        </div>
      </section>

      {/* AI Blog Settings */}
      <section id="ai-blog" className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-6">
        <div className="flex items-center gap-2 mb-5">
          <Bot size={18} className="text-[#CA8A04]" />
          <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[#1d1d1f]">
            AI Blog Settings
          </h3>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">
                AI Provider
              </label>
              <select className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all">
                <option>Claude (Anthropic)</option>
                <option>GPT-4 (OpenAI)</option>
                <option>Gemini (Google)</option>
                <option>Custom / Self-hosted</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">
                Posting Frequency
              </label>
              <select className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all">
                <option>Daily</option>
                <option>3x per week</option>
                <option>Weekly</option>
                <option>Bi-weekly</option>
                <option>Monthly</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1.5 block">
              API Key
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="sk-..."
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all font-mono"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-[#1d1d1f]">
                Auto-publish generated posts
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                When disabled, AI posts will be saved as drafts for review.
              </p>
            </div>
            <button className="relative w-11 h-6 rounded-full bg-gray-200 transition-colors">
              <span className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* SEO Settings */}
      <section id="seo" className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-6">
        <div className="flex items-center gap-2 mb-5">
          <Search size={18} className="text-[#CA8A04]" />
          <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[#1d1d1f]">
            SEO Settings
          </h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1.5 block">
              Default Meta Title Suffix
            </label>
            <input
              type="text"
              defaultValue="| Cinthamani Computers"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all"
            />
            <p className="text-[10px] text-gray-400 mt-1">
              Appended to all page titles (e.g. &quot;About Us | Cinthamani Computers&quot;)
            </p>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1.5 block">
              Default Meta Description
            </label>
            <textarea
              rows={2}
              defaultValue="Cinthamani Computers Pvt. Ltd. — Trusted broadcast and IT solutions provider in Chennai since 1984."
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] resize-none transition-all"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">
                Sitemap URL
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  defaultValue="/sitemap.xml"
                  className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all font-mono"
                  readOnly
                />
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  className="p-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">
                Robots.txt
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  defaultValue="/robots.txt"
                  className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all font-mono"
                  readOnly
                />
                <a
                  href="/robots.txt"
                  target="_blank"
                  className="p-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-6">
        <div className="flex items-center gap-2 mb-5">
          <Plug size={18} className="text-[#CA8A04]" />
          <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[#1d1d1f]">
            Integrations
          </h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1.5 block">
              Google Analytics 4 — Measurement ID
            </label>
            <input
              type="text"
              placeholder="G-XXXXXXXXXX"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all font-mono"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1.5 block">
              Google Search Console — Verification Code
            </label>
            <input
              type="text"
              placeholder="google-site-verification=..."
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all font-mono"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1.5 block">
              WhatsApp Business Number
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1.5 block">
              CRM Webhook URL
            </label>
            <input
              type="url"
              placeholder="https://your-crm.com/api/webhook"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all font-mono"
            />
            <p className="text-[10px] text-gray-400 mt-1">
              Lead form submissions will be forwarded to this URL via POST request.
            </p>
          </div>
        </div>
      </section>

      {/* Admin Account */}
      <section id="account" className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-6">
        <div className="flex items-center gap-2 mb-5">
          <Shield size={18} className="text-[#CA8A04]" />
          <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[#1d1d1f]">
            Admin Account
          </h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1.5 block">
              Admin Email
            </label>
            <input
              type="email"
              defaultValue="admin@cinthamani.com"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1.5 block">
              Current Password
            </label>
            <input
              type="password"
              placeholder="Enter current password"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">
                Confirm New Password
              </label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all"
              />
            </div>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            <Shield size={14} />
            Change Password
          </button>
        </div>
      </section>

      {/* Bottom save bar */}
      <div className="sticky bottom-4 bg-white rounded-xl border border-gray-200 shadow-lg p-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Make sure to save your changes before leaving.
        </p>
        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 bg-[#CA8A04] hover:bg-[#a16207] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
        >
          {saved ? (
            <>
              <CheckCircle2 size={14} />
              Saved
            </>
          ) : (
            <>
              <Save size={14} />
              Save All Changes
            </>
          )}
        </button>
      </div>
    </div>
  );
}
