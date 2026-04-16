import Link from "next/link";
import {
  ExternalLink,
  Pencil,
  Globe,
  Info,
} from "lucide-react";

const pages = [
  { name: "Homepage", path: "/", lastModified: "Apr 10, 2026", sections: 8 },
  { name: "About", path: "/about", lastModified: "Apr 8, 2026", sections: 5 },
  {
    name: "Solutions",
    path: "/solutions",
    lastModified: "Apr 7, 2026",
    sections: 4,
    children: [
      { name: "Broadcast & OTT", path: "/solutions/broadcast-ott", lastModified: "Apr 7, 2026" },
      { name: "Post-Production", path: "/solutions/post-production", lastModified: "Apr 7, 2026" },
      { name: "Wedding Studios", path: "/solutions/wedding-studios", lastModified: "Apr 7, 2026" },
      { name: "IT & Enterprise", path: "/solutions/it-enterprise", lastModified: "Apr 7, 2026" },
    ],
  },
  {
    name: "Products",
    path: "/products",
    lastModified: "Apr 6, 2026",
    sections: 3,
  },
  {
    name: "Partners",
    path: "/partners",
    lastModified: "Apr 5, 2026",
    sections: 2,
  },
  {
    name: "Contact",
    path: "/contact",
    lastModified: "Apr 9, 2026",
    sections: 3,
  },
  { name: "Blog", path: "/blog", lastModified: "Apr 10, 2026", sections: 2 },
];

export default function PagesManagement() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1d1d1f]">
          Pages
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Manage the structure and content of your website pages.
        </p>
      </div>

      {/* Info banner */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 flex items-start gap-3">
        <Info size={18} className="text-blue-500 mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-medium text-blue-800">
            Full inline editing coming soon
          </p>
          <p className="text-xs text-blue-600 mt-0.5">
            Currently shows page structure. Visual page builder integration is on the roadmap.
          </p>
        </div>
      </div>

      {/* Page list */}
      <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 overflow-hidden">
        {/* Table header */}
        <div className="hidden sm:grid sm:grid-cols-[1fr_180px_140px_120px] gap-4 px-5 py-3 border-b border-gray-200 bg-gray-50/80">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Page
          </span>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            URL Path
          </span>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Last Modified
          </span>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">
            Actions
          </span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-gray-100">
          {pages.map((page) => (
            <div key={page.path}>
              {/* Main page row */}
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_180px_140px_120px] gap-2 sm:gap-4 px-5 py-4 hover:bg-white transition-colors items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0">
                    <Globe size={14} className="text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1d1d1f]">
                      {page.name}
                    </p>
                    {page.sections && (
                      <p className="text-[10px] text-gray-400">
                        {page.sections} sections
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-mono text-xs">
                  {page.path}
                </p>
                <p className="text-xs text-gray-400">{page.lastModified}</p>
                <div className="flex items-center gap-2 justify-end">
                  <Link
                    href={page.path}
                    target="_blank"
                    className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors no-underline"
                    title="View page"
                  >
                    <ExternalLink size={14} />
                  </Link>
                  <button
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:border-[#CA8A04]/30 hover:text-[#CA8A04] transition-colors"
                  >
                    <Pencil size={12} />
                    Edit
                  </button>
                </div>
              </div>

              {/* Sub-pages */}
              {page.children?.map((child) => (
                <div
                  key={child.path}
                  className="grid grid-cols-1 sm:grid-cols-[1fr_180px_140px_120px] gap-2 sm:gap-4 px-5 py-3 hover:bg-white transition-colors items-center bg-gray-50/50"
                >
                  <div className="flex items-center gap-3 pl-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                    <p className="text-sm text-gray-600">{child.name}</p>
                  </div>
                  <p className="text-sm text-gray-500 font-mono text-xs">
                    {child.path}
                  </p>
                  <p className="text-xs text-gray-400">{child.lastModified}</p>
                  <div className="flex items-center gap-2 justify-end">
                    <Link
                      href={child.path}
                      target="_blank"
                      className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors no-underline"
                      title="View page"
                    >
                      <ExternalLink size={14} />
                    </Link>
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:border-[#CA8A04]/30 hover:text-[#CA8A04] transition-colors">
                      <Pencil size={12} />
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
