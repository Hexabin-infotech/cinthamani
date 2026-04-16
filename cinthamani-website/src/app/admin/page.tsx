import Link from "next/link";
import {
  UserPlus,
  PenSquare,
  Eye,
  Inbox,
  ArrowRight,
  FileEdit,
  Search,
  Clock,
} from "lucide-react";

const stats = [
  {
    label: "Total Leads",
    value: "\u2014",
    subtitle: "Connect analytics to view",
    icon: UserPlus,
    color: "bg-blue-50 text-blue-600",
  },
  {
    label: "Blog Posts",
    value: "0",
    subtitle: "No posts yet",
    icon: PenSquare,
    color: "bg-amber-50 text-amber-600",
  },
  {
    label: "Website Visitors",
    value: "\u2014",
    subtitle: "Connect GA4 to view",
    icon: Eye,
    color: "bg-green-50 text-green-600",
  },
  {
    label: "Form Submissions",
    value: "0",
    subtitle: "No submissions yet",
    icon: Inbox,
    color: "bg-purple-50 text-purple-600",
  },
];

const quickActions = [
  {
    label: "Write Blog Post",
    description: "Create SEO-optimized content",
    href: "/admin/blog/new",
    icon: PenSquare,
  },
  {
    label: "Edit Homepage",
    description: "Manage hero, sections & CTAs",
    href: "/admin/pages",
    icon: FileEdit,
  },
  {
    label: "View Leads",
    description: "Track inquiries & follow-ups",
    href: "/admin/leads",
    icon: UserPlus,
  },
  {
    label: "SEO Dashboard",
    description: "Monitor search performance",
    href: "/admin/seo",
    icon: Search,
  },
];

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Welcome */}
      <div>
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1d1d1f]">
          Welcome back, Admin
        </h2>
        <p className="text-gray-500 mt-1 text-sm">
          Here&apos;s what&apos;s happening with your website today.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-[#f5f5f7] rounded-xl p-5 border border-gray-100"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-semibold text-[#1d1d1f] mt-2 font-[family-name:var(--font-display)]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{stat.subtitle}</p>
                </div>
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}
                >
                  <Icon size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#1d1d1f] mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.label}
                href={action.href}
                className="group bg-[#f5f5f7] hover:bg-white hover:shadow-md rounded-xl p-5 border border-gray-100 transition-all duration-200 no-underline"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#CA8A04]/10 flex items-center justify-center text-[#CA8A04] mb-3">
                    <Icon size={20} />
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-gray-300 group-hover:text-[#CA8A04] group-hover:translate-x-0.5 transition-all"
                  />
                </div>
                <p className="text-sm font-semibold text-[#1d1d1f]">
                  {action.label}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {action.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#1d1d1f] mb-4">
          Recent Activity
        </h3>
        <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-8 text-center">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
            <Clock size={22} className="text-gray-400" />
          </div>
          <p className="text-sm text-gray-500">
            No recent activity. Start by creating your first blog post.
          </p>
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-1.5 text-sm text-[#CA8A04] hover:text-[#a16207] font-medium mt-3 no-underline transition-colors"
          >
            Create Post <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
