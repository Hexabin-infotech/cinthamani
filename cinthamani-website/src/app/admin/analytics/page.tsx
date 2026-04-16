import {
  BarChart3,
  TrendingUp,
  Eye,
  MousePointerClick,
  Plug,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  FileText,
  PieChart,
  Search,
} from "lucide-react";

const connections = [
  {
    name: "Google Analytics",
    description: "Track website traffic and user behavior",
    status: "disconnected" as const,
    icon: BarChart3,
  },
  {
    name: "Search Console",
    description: "Monitor search rankings and impressions",
    status: "disconnected" as const,
    icon: Search,
  },
  {
    name: "Form Tracking",
    description: "Track contact form submissions and conversions",
    status: "connected" as const,
    icon: MousePointerClick,
  },
];

export default function AnalyticsDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1d1d1f]">
          Analytics Dashboard
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Monitor website performance, traffic, and conversion metrics.
        </p>
      </div>

      {/* Connection status */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {connections.map((conn) => {
          const Icon = conn.icon;
          const isConnected = conn.status === "connected";
          return (
            <div
              key={conn.name}
              className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                  <Icon size={18} className="text-gray-500" />
                </div>
                {isConnected ? (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    <CheckCircle2 size={12} />
                    Active
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                    <XCircle size={12} />
                    Not Connected
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold text-[#1d1d1f]">
                {conn.name}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{conn.description}</p>
              {!isConnected && (
                <button className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#CA8A04] hover:text-[#a16207] transition-colors">
                  <Plug size={12} />
                  Connect
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Overview stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Eye size={14} className="text-gray-400" />
            <span className="text-xs text-gray-400 font-medium">Page Views</span>
          </div>
          <p className="text-2xl font-semibold text-[#1d1d1f] font-[family-name:var(--font-display)]">
            &mdash;
          </p>
          <p className="text-[10px] text-gray-400 mt-1">Connect GA4 to view</p>
        </div>
        <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={14} className="text-gray-400" />
            <span className="text-xs text-gray-400 font-medium">Sessions</span>
          </div>
          <p className="text-2xl font-semibold text-[#1d1d1f] font-[family-name:var(--font-display)]">
            &mdash;
          </p>
          <p className="text-[10px] text-gray-400 mt-1">Connect GA4 to view</p>
        </div>
        <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-2 mb-2">
            <MousePointerClick size={14} className="text-gray-400" />
            <span className="text-xs text-gray-400 font-medium">Conversions</span>
          </div>
          <p className="text-2xl font-semibold text-[#1d1d1f] font-[family-name:var(--font-display)]">
            0
          </p>
          <p className="text-[10px] text-gray-400 mt-1">No conversions yet</p>
        </div>
        <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-2 mb-2">
            <ArrowUpRight size={14} className="text-gray-400" />
            <span className="text-xs text-gray-400 font-medium">Bounce Rate</span>
          </div>
          <p className="text-2xl font-semibold text-[#1d1d1f] font-[family-name:var(--font-display)]">
            &mdash;
          </p>
          <p className="text-[10px] text-gray-400 mt-1">Connect GA4 to view</p>
        </div>
      </div>

      {/* Chart placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Website Traffic */}
        <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-6 lg:col-span-2">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#1d1d1f] mb-1">
            Website Traffic
          </h3>
          <p className="text-xs text-gray-400 mb-6">Last 30 days</p>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
            <div className="text-center">
              <BarChart3
                size={32}
                className="text-gray-300 mx-auto mb-2"
              />
              <p className="text-sm text-gray-400">
                Connect Google Analytics to view traffic data
              </p>
              <button className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#CA8A04] hover:text-[#a16207] transition-colors">
                <Plug size={12} />
                Connect GA4
              </button>
            </div>
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-6">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#1d1d1f] mb-1">
            Top Pages
          </h3>
          <p className="text-xs text-gray-400 mb-4">Most visited pages</p>
          <div className="h-48 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
            <div className="text-center">
              <FileText size={24} className="text-gray-300 mx-auto mb-2" />
              <p className="text-xs text-gray-400">No data available</p>
            </div>
          </div>
        </div>

        {/* Lead Sources */}
        <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-6">
          <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#1d1d1f] mb-1">
            Lead Sources
          </h3>
          <p className="text-xs text-gray-400 mb-4">Where leads come from</p>
          <div className="h-48 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
            <div className="text-center">
              <PieChart size={24} className="text-gray-300 mx-auto mb-2" />
              <p className="text-xs text-gray-400">No lead data yet</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keywords */}
      <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-6">
        <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#1d1d1f] mb-1">
          SEO Keywords
        </h3>
        <p className="text-xs text-gray-400 mb-4">
          Top ranking keywords from Search Console
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider py-2 pr-4">
                  Keyword
                </th>
                <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider py-2 pr-4">
                  Position
                </th>
                <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider py-2 pr-4">
                  Impressions
                </th>
                <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider py-2">
                  Clicks
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan={4}
                  className="py-8 text-center text-xs text-gray-400"
                >
                  Connect Search Console to view keyword rankings
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
