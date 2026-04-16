"use client";

import { useState } from "react";
import Link from "next/link";
import { PenSquare, Plus, Search, Filter, FileText } from "lucide-react";

const filters = ["All", "Published", "Drafts", "Scheduled"] as const;
type FilterType = (typeof filters)[number];

const tableColumns = ["Title", "Status", "Date", "Author", "Actions"];

export default function BlogManagement() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1d1d1f]">
            Blog Posts
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Create and manage blog content for organic traffic growth.
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-2 bg-[#CA8A04] hover:bg-[#a16207] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors no-underline"
        >
          <Plus size={16} />
          New Post
        </Link>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/30 focus:border-[#CA8A04] transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={16} className="text-gray-400 hidden sm:block" />
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-[#CA8A04] text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 overflow-hidden">
        {/* Table Header */}
        <div className="hidden sm:grid sm:grid-cols-[1fr_120px_120px_120px_100px] gap-4 px-5 py-3 border-b border-gray-200 bg-gray-50/80">
          {tableColumns.map((col) => (
            <span key={col} className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {col}
            </span>
          ))}
        </div>

        {/* Empty State */}
        <div className="px-5 py-16 text-center">
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <FileText size={24} className="text-gray-400" />
          </div>
          <p className="text-sm font-medium text-gray-600 mb-1">
            No blog posts yet
          </p>
          <p className="text-xs text-gray-400 max-w-sm mx-auto">
            Create your first post to start building organic traffic. Blog posts help
            improve your SEO and establish authority in your industry.
          </p>
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-2 bg-[#CA8A04] hover:bg-[#a16207] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors no-underline mt-5"
          >
            <PenSquare size={14} />
            Create First Post
          </Link>
        </div>
      </div>
    </div>
  );
}
