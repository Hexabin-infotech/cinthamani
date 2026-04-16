"use client";

import { useState } from "react";
import {
  UserPlus,
  Search,
  Filter,
  Download,
  Mail,
  Phone,
} from "lucide-react";

const filters = ["All", "Hot", "Warm", "Cold"] as const;
type FilterType = (typeof filters)[number];

const filterColors: Record<FilterType, string> = {
  All: "bg-[#CA8A04] text-white",
  Hot: "bg-red-500 text-white",
  Warm: "bg-orange-500 text-white",
  Cold: "bg-blue-500 text-white",
};

const tableColumns = [
  "Name",
  "Company",
  "Email",
  "Interest",
  "Score",
  "Date",
  "Status",
  "Actions",
];

export default function LeadManagement() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1d1d1f]">
            Leads & Inquiries
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Track and manage leads from contact forms and inquiries.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            <Download size={14} />
            Export CSV
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-4">
          <p className="text-xs text-gray-400 font-medium">Total Leads</p>
          <p className="text-2xl font-semibold text-[#1d1d1f] mt-1 font-[family-name:var(--font-display)]">
            0
          </p>
        </div>
        <div className="bg-red-50 rounded-xl border border-red-100 p-4">
          <p className="text-xs text-red-400 font-medium">Hot Leads</p>
          <p className="text-2xl font-semibold text-red-600 mt-1 font-[family-name:var(--font-display)]">
            0
          </p>
        </div>
        <div className="bg-orange-50 rounded-xl border border-orange-100 p-4">
          <p className="text-xs text-orange-400 font-medium">Warm Leads</p>
          <p className="text-2xl font-semibold text-orange-600 mt-1 font-[family-name:var(--font-display)]">
            0
          </p>
        </div>
        <div className="bg-blue-50 rounded-xl border border-blue-100 p-4">
          <p className="text-xs text-blue-400 font-medium">Cold Leads</p>
          <p className="text-2xl font-semibold text-blue-600 mt-1 font-[family-name:var(--font-display)]">
            0
          </p>
        </div>
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
            placeholder="Search by name, company, or email..."
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
                  ? filterColors[filter]
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
        {/* Table Header (desktop) */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_120px_160px_140px_80px_100px_90px_80px] gap-3 px-5 py-3 border-b border-gray-200 bg-gray-50/80">
          {tableColumns.map((col) => (
            <span
              key={col}
              className="text-xs font-semibold text-gray-400 uppercase tracking-wider"
            >
              {col}
            </span>
          ))}
        </div>

        {/* Empty State */}
        <div className="px-5 py-16 text-center">
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <UserPlus size={24} className="text-gray-400" />
          </div>
          <p className="text-sm font-medium text-gray-600 mb-1">
            No leads yet
          </p>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
            Leads from contact forms will appear here. Each submission is
            automatically scored and categorized. You can also manually add leads
            and track follow-ups.
          </p>
          <div className="flex items-center justify-center gap-4 mt-5">
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Mail size={12} />
              Email notifications enabled
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Phone size={12} />
              WhatsApp alerts active
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
