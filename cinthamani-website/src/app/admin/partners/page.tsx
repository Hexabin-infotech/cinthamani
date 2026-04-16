"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Handshake,
  ExternalLink,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";

const partnerCategories = [
  "All",
  "Broadcast",
  "IT & Storage",
  "Apple",
  "Media",
  "Networking",
] as const;
type Category = (typeof partnerCategories)[number];

const partners = [
  { name: "Apple", category: "Apple", active: true },
  { name: "Avid", category: "Broadcast", active: true },
  { name: "Blackmagic Design", category: "Broadcast", active: true },
  { name: "Adobe", category: "Media", active: true },
  { name: "Autodesk", category: "Media", active: true },
  { name: "Dell Technologies", category: "IT & Storage", active: true },
  { name: "HP Enterprise", category: "IT & Storage", active: true },
  { name: "NetApp", category: "IT & Storage", active: true },
  { name: "Cisco", category: "Networking", active: true },
  { name: "AJA Video Systems", category: "Broadcast", active: true },
  { name: "Grass Valley", category: "Broadcast", active: true },
  { name: "Ross Video", category: "Broadcast", active: true },
  { name: "Telestream", category: "Broadcast", active: true },
  { name: "Vizrt", category: "Broadcast", active: true },
  { name: "Harmonic", category: "Broadcast", active: true },
  { name: "Imagine Communications", category: "Broadcast", active: true },
  { name: "Evertz", category: "Broadcast", active: true },
  { name: "Matrox", category: "Broadcast", active: true },
  { name: "Synology", category: "IT & Storage", active: true },
  { name: "QNAP", category: "IT & Storage", active: true },
  { name: "Promise Technology", category: "IT & Storage", active: true },
  { name: "LaCie", category: "IT & Storage", active: true },
  { name: "G-Technology", category: "IT & Storage", active: true },
  { name: "Arista", category: "Networking", active: true },
  { name: "Juniper Networks", category: "Networking", active: true },
  { name: "Palo Alto Networks", category: "Networking", active: true },
  { name: "Fortinet", category: "Networking", active: true },
  { name: "DaVinci Resolve", category: "Media", active: true },
  { name: "Boris FX", category: "Media", active: true },
  { name: "Red Giant", category: "Media", active: true },
  { name: "Dolby", category: "Broadcast", active: true },
  { name: "Sennheiser", category: "Broadcast", active: true },
  { name: "Shure", category: "Broadcast", active: true },
  { name: "Calrec", category: "Broadcast", active: true },
  { name: "Riedel", category: "Broadcast", active: true },
];

export default function PartnerManagement() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [partnerList, setPartnerList] = useState(partners);

  const filteredPartners = partnerList.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const togglePartner = (name: string) => {
    setPartnerList((prev) =>
      prev.map((p) =>
        p.name === name ? { ...p, active: !p.active } : p
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1d1d1f]">
            Partners
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage technology partners displayed on the website.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 bg-[#CA8A04] hover:bg-[#a16207] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors">
          <Plus size={16} />
          Add Partner
        </button>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="inline-flex items-center gap-2 bg-[#f5f5f7] rounded-lg px-3 py-2 border border-gray-100">
          <Handshake size={14} className="text-gray-400" />
          <span className="text-sm text-gray-600">
            <span className="font-semibold text-[#1d1d1f]">
              {partnerList.length}
            </span>{" "}
            total partners
          </span>
        </div>
        <div className="inline-flex items-center gap-2 bg-green-50 rounded-lg px-3 py-2 border border-green-100">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-sm text-green-700">
            {partnerList.filter((p) => p.active).length} active
          </span>
        </div>
        <div className="inline-flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
          <span className="w-2 h-2 rounded-full bg-gray-400" />
          <span className="text-sm text-gray-500">
            {partnerList.filter((p) => !p.active).length} inactive
          </span>
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search partners..."
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/30 focus:border-[#CA8A04] transition-all"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter size={16} className="text-gray-400 hidden sm:block" />
          {partnerCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-[#CA8A04] text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Partner grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {filteredPartners.map((partner) => (
          <div
            key={partner.name}
            className={`rounded-xl border p-4 flex items-center justify-between transition-all ${
              partner.active
                ? "bg-[#f5f5f7] border-gray-100 hover:bg-white hover:shadow-sm"
                : "bg-gray-50 border-gray-200 opacity-60"
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0">
                <span className="text-xs font-semibold text-gray-500">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-[#1d1d1f] truncate">
                  {partner.name}
                </p>
                <p className="text-[10px] text-gray-400">{partner.category}</p>
              </div>
            </div>
            <button
              onClick={() => togglePartner(partner.name)}
              className="shrink-0 ml-2"
              title={partner.active ? "Deactivate" : "Activate"}
            >
              {partner.active ? (
                <ToggleRight size={24} className="text-green-500" />
              ) : (
                <ToggleLeft size={24} className="text-gray-300" />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* No results */}
      {filteredPartners.length === 0 && (
        <div className="text-center py-12">
          <Search size={24} className="text-gray-300 mx-auto mb-2" />
          <p className="text-sm text-gray-400">
            No partners match your search criteria.
          </p>
        </div>
      )}
    </div>
  );
}
