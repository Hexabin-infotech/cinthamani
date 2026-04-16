"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Briefcase,
  ImageIcon,
  Calendar,
  Tag,
} from "lucide-react";

const filters = ["All", "Broadcast", "IT", "Post-Production", "Storage"] as const;
type FilterType = (typeof filters)[number];

export default function PortfolioManagement() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1d1d1f]">
            Portfolio
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Showcase completed projects and case studies.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 bg-[#CA8A04] hover:bg-[#a16207] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors">
          <Plus size={16} />
          Add Project
        </button>
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
            placeholder="Search projects..."
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/30 focus:border-[#CA8A04] transition-all"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
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

      {/* Empty state / Grid */}
      <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-8">
        {/* Empty State */}
        <div className="text-center py-8">
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <Briefcase size={24} className="text-gray-400" />
          </div>
          <p className="text-sm font-medium text-gray-600 mb-1">
            No projects yet
          </p>
          <p className="text-xs text-gray-400 max-w-md mx-auto mb-6">
            Add your completed projects and case studies to showcase your expertise.
            Portfolio items build trust and demonstrate your capabilities to potential clients.
          </p>

          {/* Preview card grid */}
          <p className="text-xs text-gray-400 font-medium mb-3 uppercase tracking-wider">
            Project cards will look like this
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden opacity-50"
              >
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <ImageIcon size={24} className="text-gray-300" />
                </div>
                <div className="p-4">
                  <div className="h-4 bg-gray-100 rounded w-3/4 mb-2" />
                  <div className="flex items-center gap-3 mt-3">
                    <span className="inline-flex items-center gap-1 text-[10px] text-gray-400">
                      <Tag size={10} />
                      Category
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-gray-400">
                      <Calendar size={10} />
                      Date
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[10px] bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-medium">
                      Published
                    </span>
                    <span className="text-[10px] text-gray-400">Edit</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 inline-flex items-center gap-2 bg-[#CA8A04] hover:bg-[#a16207] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors">
            <Plus size={14} />
            Add First Project
          </button>
        </div>
      </div>
    </div>
  );
}
