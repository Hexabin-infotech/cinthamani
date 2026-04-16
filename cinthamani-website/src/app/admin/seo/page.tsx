import {
  Search,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Globe,
  Link2,
  FileCode,
  Target,
  ExternalLink,
} from "lucide-react";

const pagesMeta = [
  {
    name: "Homepage",
    path: "/",
    title: true,
    description: true,
    og: true,
  },
  {
    name: "About",
    path: "/about",
    title: true,
    description: true,
    og: true,
  },
  {
    name: "Solutions",
    path: "/solutions",
    title: true,
    description: true,
    og: false,
  },
  {
    name: "Products",
    path: "/products",
    title: true,
    description: true,
    og: false,
  },
  {
    name: "Partners",
    path: "/partners",
    title: true,
    description: false,
    og: false,
  },
  {
    name: "Contact",
    path: "/contact",
    title: true,
    description: true,
    og: false,
  },
  {
    name: "Blog",
    path: "/blog",
    title: true,
    description: false,
    og: false,
  },
];

export default function SEODashboard() {
  const metaComplete = pagesMeta.filter((p) => p.title && p.description && p.og).length;
  const totalPages = pagesMeta.length;

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1d1d1f]">
          SEO Management
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Optimize your website&apos;s search engine visibility and rankings.
        </p>
      </div>

      {/* SEO Score + quick stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* SEO Score */}
        <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-6 flex flex-col items-center justify-center">
          <p className="text-xs text-gray-400 font-medium mb-3">
            Overall SEO Score
          </p>
          <div className="relative w-28 h-28">
            <svg className="w-28 h-28 -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
              />
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#CA8A04"
                strokeWidth="8"
                strokeDasharray={`${(metaComplete / totalPages) * 327} 327`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-semibold text-[#1d1d1f] font-[family-name:var(--font-display)]">
                &mdash;
              </span>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">Connect analytics to view score</p>
        </div>

        {/* Meta Completion */}
        <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-6">
          <p className="text-xs text-gray-400 font-medium mb-2">
            Meta Tags Status
          </p>
          <p className="text-3xl font-semibold text-[#1d1d1f] font-[family-name:var(--font-display)]">
            {metaComplete}/{totalPages}
          </p>
          <p className="text-xs text-gray-400 mt-1">Pages fully optimized</p>
          <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#CA8A04] rounded-full transition-all"
              style={{ width: `${(metaComplete / totalPages) * 100}%` }}
            />
          </div>
        </div>

        {/* Sitemap */}
        <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-6">
          <p className="text-xs text-gray-400 font-medium mb-2">
            Sitemap Status
          </p>
          <div className="flex items-center gap-2 mt-1">
            <CheckCircle2 size={16} className="text-green-500" />
            <span className="text-sm font-medium text-green-700">
              Active
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            /sitemap.xml &middot; {totalPages} pages indexed
          </p>
          <button className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#CA8A04] hover:text-[#a16207] transition-colors">
            <RefreshCw size={12} />
            Regenerate Sitemap
          </button>
        </div>
      </div>

      {/* Meta Tags Table */}
      <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200 flex items-center gap-2">
          <Globe size={16} className="text-[#CA8A04]" />
          <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#1d1d1f]">
            Meta Tags
          </h3>
        </div>

        {/* Table header */}
        <div className="hidden sm:grid sm:grid-cols-[1fr_140px_100px_100px_100px] gap-4 px-5 py-3 border-b border-gray-200 bg-gray-50/80">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Page
          </span>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            URL
          </span>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-center">
            Title
          </span>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-center">
            Description
          </span>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-center">
            OG Tags
          </span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-gray-100">
          {pagesMeta.map((page) => (
            <div
              key={page.path}
              className="grid grid-cols-1 sm:grid-cols-[1fr_140px_100px_100px_100px] gap-2 sm:gap-4 px-5 py-3 hover:bg-white transition-colors items-center"
            >
              <p className="text-sm font-medium text-[#1d1d1f]">{page.name}</p>
              <p className="text-xs text-gray-400 font-mono">{page.path}</p>
              <div className="flex justify-center">
                {page.title ? (
                  <CheckCircle2 size={16} className="text-green-500" />
                ) : (
                  <AlertTriangle size={16} className="text-amber-500" />
                )}
              </div>
              <div className="flex justify-center">
                {page.description ? (
                  <CheckCircle2 size={16} className="text-green-500" />
                ) : (
                  <AlertTriangle size={16} className="text-amber-500" />
                )}
              </div>
              <div className="flex justify-center">
                {page.og ? (
                  <CheckCircle2 size={16} className="text-green-500" />
                ) : (
                  <AlertTriangle size={16} className="text-amber-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keywords Tracking */}
      <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target size={16} className="text-[#CA8A04]" />
            <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#1d1d1f]">
              Keyword Tracking
            </h3>
          </div>
          <button className="text-xs font-medium text-[#CA8A04] hover:text-[#a16207] transition-colors">
            Add Keyword
          </button>
        </div>
        <div className="px-5 py-10 text-center">
          <Search size={24} className="text-gray-300 mx-auto mb-2" />
          <p className="text-sm text-gray-400">
            No keywords being tracked yet. Add keywords to monitor your search rankings.
          </p>
        </div>
      </div>

      {/* Internal Links */}
      <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link2 size={16} className="text-[#CA8A04]" />
            <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#1d1d1f]">
              Internal Links
            </h3>
          </div>
          <button className="text-xs font-medium text-[#CA8A04] hover:text-[#a16207] transition-colors">
            Run Audit
          </button>
        </div>
        <div className="px-5 py-10 text-center">
          <Link2 size={24} className="text-gray-300 mx-auto mb-2" />
          <p className="text-sm text-gray-400">
            Run an audit to see internal linking optimization suggestions.
          </p>
        </div>
      </div>

      {/* Quick resources */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a
          href="/sitemap.xml"
          target="_blank"
          className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-4 flex items-center gap-3 hover:bg-white hover:shadow-sm transition-all no-underline group"
        >
          <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
            <FileCode size={14} className="text-gray-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-[#1d1d1f]">sitemap.xml</p>
            <p className="text-[10px] text-gray-400">View XML sitemap</p>
          </div>
          <ExternalLink size={14} className="text-gray-300 group-hover:text-[#CA8A04] transition-colors" />
        </a>
        <a
          href="/robots.txt"
          target="_blank"
          className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-4 flex items-center gap-3 hover:bg-white hover:shadow-sm transition-all no-underline group"
        >
          <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
            <FileCode size={14} className="text-gray-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-[#1d1d1f]">robots.txt</p>
            <p className="text-[10px] text-gray-400">View robots file</p>
          </div>
          <ExternalLink size={14} className="text-gray-300 group-hover:text-[#CA8A04] transition-colors" />
        </a>
        <a
          href="https://search.google.com/search-console"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-4 flex items-center gap-3 hover:bg-white hover:shadow-sm transition-all no-underline group"
        >
          <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
            <Search size={14} className="text-gray-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-[#1d1d1f]">Search Console</p>
            <p className="text-[10px] text-gray-400">Open Google tool</p>
          </div>
          <ExternalLink size={14} className="text-gray-300 group-hover:text-[#CA8A04] transition-colors" />
        </a>
      </div>
    </div>
  );
}
