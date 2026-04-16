"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Eye,
  Upload,
  ImageIcon,
  Search,
  Info,
} from "lucide-react";

const categories = [
  "Broadcast",
  "Apple & IT",
  "Storage",
  "Industry News",
  "Company Updates",
];

const statusOptions = ["Draft", "Published", "Scheduled"] as const;
type Status = (typeof statusOptions)[number];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default function NewBlogPost() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [focusKeyword, setFocusKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState<Status>("Draft");

  const handleTitleChange = useCallback((value: string) => {
    setTitle(value);
    setSlug(slugify(value));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blog"
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600 no-underline"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1d1d1f]">
              New Blog Post
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Create and publish SEO-optimized content.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            <Eye size={14} />
            Preview
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            <Save size={14} />
            Save Draft
          </button>
          <button className="inline-flex items-center gap-2 bg-[#CA8A04] hover:bg-[#a16207] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
            Publish
          </button>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
        {/* Main editor */}
        <div className="space-y-6">
          {/* Title */}
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Post title..."
              className="w-full text-3xl font-[family-name:var(--font-display)] font-semibold text-[#1d1d1f] placeholder:text-gray-300 border-0 bg-transparent focus:outline-none focus:ring-0 p-0"
            />
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-gray-400">Slug:</span>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="auto-generated-from-title"
                className="flex-1 text-xs text-gray-500 bg-gray-50 rounded px-2 py-1 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#CA8A04]/30"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">
                Content
              </label>
              <span className="inline-flex items-center gap-1 text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                <Info size={12} />
                Rich text editor (Tiptap) will be integrated
              </span>
            </div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Start writing your blog post...

You can use markdown-style formatting for now. A full rich text editor with Tiptap will replace this textarea in a future update.

## Heading
Regular paragraph text with **bold** and *italic* support.

- Bullet points
- Lists
- Links"
              rows={20}
              className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm text-[#1d1d1f] leading-relaxed placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] resize-y transition-all font-[family-name:var(--font-body)]"
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-gray-400">
                {content.split(/\s+/).filter(Boolean).length} words
              </span>
              <span className="text-xs text-gray-400">
                {content.length} characters
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Featured Image
            </label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[#CA8A04]/40 transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-[#CA8A04]/10 flex items-center justify-center mx-auto mb-3 transition-colors">
                <ImageIcon
                  size={22}
                  className="text-gray-400 group-hover:text-[#CA8A04] transition-colors"
                />
              </div>
              <p className="text-sm text-gray-600 font-medium">
                Drop an image here, or click to upload
              </p>
              <p className="text-xs text-gray-400 mt-1">
                PNG, JPG, or WebP. Recommended: 1200x630px
              </p>
              <button className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                <Upload size={14} />
                Upload Image
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publish Settings */}
          <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-5">
            <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#1d1d1f] mb-4">
              Publish Settings
            </h4>

            {/* Status */}
            <div className="mb-4">
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">
                Status
              </label>
              <div className="flex gap-1 bg-white rounded-lg p-1 border border-gray-200">
                {statusOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setStatus(opt)}
                    className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-colors ${
                      status === opt
                        ? "bg-[#CA8A04] text-white"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Category */}
            <div className="mb-4">
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all"
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Author */}
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">
                Author
              </label>
              <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 px-3 py-2">
                <div className="w-6 h-6 rounded-full bg-[#CA8A04] flex items-center justify-center text-[10px] font-semibold text-white">
                  A
                </div>
                <span className="text-sm text-gray-600">Admin</span>
              </div>
            </div>
          </div>

          {/* SEO Section */}
          <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Search size={14} className="text-[#CA8A04]" />
              <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#1d1d1f]">
                SEO Settings
              </h4>
            </div>

            {/* Meta Title */}
            <div className="mb-4">
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">
                Meta Title
              </label>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                placeholder={title || "Enter meta title..."}
                maxLength={60}
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all"
              />
              <div className="flex justify-between mt-1">
                <span className="text-[10px] text-gray-400">
                  Recommended: 50-60 characters
                </span>
                <span
                  className={`text-[10px] ${
                    metaTitle.length > 60 ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  {metaTitle.length}/60
                </span>
              </div>
            </div>

            {/* Meta Description */}
            <div className="mb-4">
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">
                Meta Description
              </label>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                placeholder="Enter a compelling description for search results..."
                rows={3}
                maxLength={160}
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] resize-none transition-all"
              />
              <div className="flex justify-between mt-1">
                <span className="text-[10px] text-gray-400">
                  Recommended: 120-160 characters
                </span>
                <span
                  className={`text-[10px] ${
                    metaDescription.length > 160
                      ? "text-red-500"
                      : "text-gray-400"
                  }`}
                >
                  {metaDescription.length}/160
                </span>
              </div>
            </div>

            {/* Focus Keyword */}
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">
                Focus Keyword
              </label>
              <input
                type="text"
                value={focusKeyword}
                onChange={(e) => setFocusKeyword(e.target.value)}
                placeholder="e.g., broadcast solutions India"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA8A04]/20 focus:border-[#CA8A04] transition-all"
              />
            </div>
          </div>

          {/* SEO Preview */}
          <div className="bg-[#f5f5f7] rounded-xl border border-gray-100 p-5">
            <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#1d1d1f] mb-3">
              Search Preview
            </h4>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-sm font-medium text-blue-700 truncate">
                {metaTitle || title || "Post Title"}
              </p>
              <p className="text-xs text-green-700 mt-0.5 truncate">
                cinthamani.com/blog/{slug || "post-slug"}
              </p>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                {metaDescription ||
                  "Add a meta description to see how this post will appear in search results."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
