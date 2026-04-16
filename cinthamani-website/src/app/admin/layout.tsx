"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  PenSquare,
  Briefcase,
  Users,
  MessageSquareQuote,
  Handshake,
  UserPlus,
  BarChart3,
  Search,
  Settings,
  Menu,
  X,
  ChevronRight,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Pages", href: "/admin/pages", icon: FileText },
  { label: "Blog Posts", href: "/admin/blog", icon: PenSquare },
  { label: "Portfolio", href: "/admin/portfolio", icon: Briefcase },
  { label: "Team", href: "/admin/team", icon: Users },
  { label: "Testimonials", href: "/admin/testimonials", icon: MessageSquareQuote },
  { label: "Partners", href: "/admin/partners", icon: Handshake },
  { label: "Leads", href: "/admin/leads", icon: UserPlus },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "SEO", href: "/admin/seo", icon: Search },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

function getPageTitle(pathname: string): string {
  if (pathname === "/admin") return "Dashboard";
  const item = navItems.find(
    (n) => n.href !== "/admin" && pathname.startsWith(n.href)
  );
  if (item) return item.label;
  if (pathname.includes("/blog/new")) return "New Blog Post";
  return "Admin";
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-body)]">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-60 bg-[#1d1d1f] text-white flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
          <Link
            href="/admin"
            className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-white no-underline"
            onClick={() => setSidebarOpen(false)}
          >
            Cinthamani
            <span className="block text-xs font-normal text-white/50 tracking-normal mt-0.5">
              Admin Panel
            </span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded hover:bg-white/10 transition-colors"
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors no-underline ${
                      active
                        ? "bg-[#CA8A04]/15 text-[#CA8A04]"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon size={18} strokeWidth={active ? 2 : 1.5} />
                    {item.label}
                    {active && (
                      <ChevronRight size={14} className="ml-auto opacity-60" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sidebar footer */}
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#CA8A04] flex items-center justify-center text-xs font-semibold text-white">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Admin</p>
              <p className="text-xs text-white/40 truncate">admin@cinthamani.com</p>
            </div>
            <button
              className="p-1.5 rounded hover:bg-white/10 transition-colors text-white/40 hover:text-white"
              aria-label="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:ml-60">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-4 sm:px-6 h-16">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
                aria-label="Open sidebar"
              >
                <Menu size={20} />
              </button>
              <h1 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#1d1d1f]">
                {pageTitle}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                target="_blank"
                className="text-xs text-gray-400 hover:text-gray-600 transition-colors no-underline hidden sm:block"
              >
                View Site
              </Link>
              <div className="w-8 h-8 rounded-full bg-[#CA8A04] flex items-center justify-center text-xs font-semibold text-white">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
