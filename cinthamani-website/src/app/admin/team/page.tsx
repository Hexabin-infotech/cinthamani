"use client";

import {
  Plus,
  Pencil,
  Trash2,
  Mail,
  Phone,
  Users,
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "S. Ravi",
    initials: "SR",
    role: "Founder & Managing Director",
    email: "ravi@cinthamani.com",
    phone: "+91 98410 XXXXX",
    department: "Leadership",
    status: "active" as const,
  },
  {
    id: 2,
    name: "A V Sivaraman",
    initials: "AS",
    role: "Director - Business Development",
    email: "sivaraman@cinthamani.com",
    phone: "+91 98410 XXXXX",
    department: "Business Development",
    status: "active" as const,
  },
  {
    id: 3,
    name: "P Balaji",
    initials: "PB",
    role: "Director - Technical Operations",
    email: "balaji@cinthamani.com",
    phone: "+91 98410 XXXXX",
    department: "Technical",
    status: "active" as const,
  },
  {
    id: 4,
    name: "A Sowri",
    initials: "AS",
    role: "Director - Solutions & Support",
    email: "sowri@cinthamani.com",
    phone: "+91 98410 XXXXX",
    department: "Solutions",
    status: "active" as const,
  },
];

const bgColors = [
  "bg-[#CA8A04]",
  "bg-blue-600",
  "bg-emerald-600",
  "bg-purple-600",
];

export default function TeamManagement() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1d1d1f]">
            Team Members
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage team members displayed on the website.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 bg-[#CA8A04] hover:bg-[#a16207] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors">
          <Plus size={16} />
          Add Member
        </button>
      </div>

      {/* Team stats */}
      <div className="flex items-center gap-4">
        <div className="inline-flex items-center gap-2 bg-[#f5f5f7] rounded-lg px-3 py-2 border border-gray-100">
          <Users size={14} className="text-gray-400" />
          <span className="text-sm text-gray-600">
            <span className="font-semibold text-[#1d1d1f]">{teamMembers.length}</span> members
          </span>
        </div>
        <div className="inline-flex items-center gap-2 bg-green-50 rounded-lg px-3 py-2 border border-green-100">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-sm text-green-700">
            {teamMembers.filter((m) => m.status === "active").length} active
          </span>
        </div>
      </div>

      {/* Team cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamMembers.map((member, i) => (
          <div
            key={member.id}
            className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-5 hover:bg-white hover:shadow-md transition-all group"
          >
            {/* Avatar + status */}
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-14 h-14 rounded-xl ${bgColors[i % bgColors.length]} flex items-center justify-center text-white text-lg font-semibold font-[family-name:var(--font-display)]`}
              >
                {member.initials}
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-[#CA8A04] transition-colors"
                  title="Edit"
                >
                  <Pencil size={14} />
                </button>
                <button
                  className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                  title="Delete"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>

            {/* Info */}
            <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#1d1d1f]">
              {member.name}
            </h4>
            <p className="text-xs text-gray-500 mt-0.5">{member.role}</p>
            <span className="inline-block text-[10px] text-gray-400 bg-white px-2 py-0.5 rounded-full mt-2 border border-gray-200">
              {member.department}
            </span>

            {/* Contact */}
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-gray-400" />
                <span className="text-xs text-gray-500 truncate">
                  {member.email}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-gray-400" />
                <span className="text-xs text-gray-500">{member.phone}</span>
              </div>
            </div>

            {/* Status */}
            <div className="mt-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[10px] text-green-600 font-medium">
                Active
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
