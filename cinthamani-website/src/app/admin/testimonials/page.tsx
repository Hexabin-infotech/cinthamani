"use client";

import {
  Plus,
  MessageSquareQuote,
  Star,
  Quote,
} from "lucide-react";

export default function TestimonialsManagement() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1d1d1f]">
            Testimonials
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Collect and manage client testimonials and reviews.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 bg-[#CA8A04] hover:bg-[#a16207] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors">
          <Plus size={16} />
          Add Testimonial
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-4">
          <p className="text-xs text-gray-400 font-medium">Total</p>
          <p className="text-2xl font-semibold text-[#1d1d1f] mt-1 font-[family-name:var(--font-display)]">
            0
          </p>
        </div>
        <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-4">
          <p className="text-xs text-gray-400 font-medium">Published</p>
          <p className="text-2xl font-semibold text-green-600 mt-1 font-[family-name:var(--font-display)]">
            0
          </p>
        </div>
        <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-4">
          <p className="text-xs text-gray-400 font-medium">Pending Review</p>
          <p className="text-2xl font-semibold text-amber-600 mt-1 font-[family-name:var(--font-display)]">
            0
          </p>
        </div>
        <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-4">
          <p className="text-xs text-gray-400 font-medium">Avg Rating</p>
          <div className="flex items-center gap-1.5 mt-1">
            <Star size={16} className="text-gray-300" />
            <span className="text-2xl font-semibold text-[#1d1d1f] font-[family-name:var(--font-display)]">
              &mdash;
            </span>
          </div>
        </div>
      </div>

      {/* Empty state */}
      <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-8">
        <div className="text-center py-8">
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <MessageSquareQuote size={24} className="text-gray-400" />
          </div>
          <p className="text-sm font-medium text-gray-600 mb-1">
            No testimonials yet
          </p>
          <p className="text-xs text-gray-400 max-w-md mx-auto mb-6">
            Collect testimonials from your clients to build trust and credibility.
            Testimonials are displayed on your website to help convert visitors into leads.
          </p>

          {/* Preview cards */}
          <p className="text-xs text-gray-400 font-medium mb-3 uppercase tracking-wider">
            Testimonial cards will look like this
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-5 text-left opacity-50"
              >
                <Quote size={18} className="text-[#CA8A04]/30 mb-3" />
                <div className="space-y-2 mb-4">
                  <div className="h-3 bg-gray-100 rounded w-full" />
                  <div className="h-3 bg-gray-100 rounded w-5/6" />
                  <div className="h-3 bg-gray-100 rounded w-4/6" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={12}
                        className="text-[#CA8A04]/30"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-gray-100" />
                  <div>
                    <div className="h-3 bg-gray-100 rounded w-20 mb-1" />
                    <div className="h-2 bg-gray-100 rounded w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 inline-flex items-center gap-2 bg-[#CA8A04] hover:bg-[#a16207] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors">
            <Plus size={14} />
            Add First Testimonial
          </button>
        </div>
      </div>
    </div>
  );
}
