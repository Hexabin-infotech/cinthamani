"use client";

import React, { useState, SyntheticEvent } from "react";
import Link from "next/link";

interface AccordionItemData {
  id: number;
  title: string;
  caption: string;
  imageUrl: string;
}

// 5 reasons to choose Cinthamani — paired with broadcast/IT-themed Unsplash imagery
const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: "Four Decades of Trust",
    caption: "Since 1984",
    imageUrl:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "End-to-End Integration",
    caption: "Studio to Playout",
    imageUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Proprietary Technology",
    caption: "TransLogger · PlayCast Pro",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Apple Enterprise Specialist",
    caption: "25+ years AAR",
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Global Presence",
    caption: "Chennai · USA · Dubai",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
  },
];

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onActivate: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isActive,
  onActivate,
}) => {
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-expanded={isActive}
      aria-label={item.title}
      className={`group relative h-[440px] cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cta)] ${
        isActive ? "w-[300px] sm:w-[360px] flex-shrink-0" : "w-[60px] flex-shrink-0"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e: SyntheticEvent<HTMLImageElement>) => {
          const t = e.currentTarget;
          t.onerror = null;
          t.src =
            "https://placehold.co/600x440/0B1121/ffffff?text=Cinthamani";
        }}
      />

      {/* Dark gradient overlay — stronger on inactive cards for legibility */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isActive
            ? "bg-gradient-to-t from-black/75 via-black/30 to-transparent"
            : "bg-black/55"
        }`}
        aria-hidden="true"
      />

      {/* Gold accent border on active card */}
      {isActive && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[var(--color-cta)]/40"
          aria-hidden="true"
        />
      )}

      {/* Title + caption */}
      <div
        className={`absolute transition-all duration-500 ease-in-out ${
          isActive
            ? "bottom-6 left-6 right-6 origin-bottom-left rotate-0 text-left"
            : "bottom-24 left-1/2 -translate-x-1/2 rotate-90 origin-center whitespace-nowrap"
        }`}
      >
        <p
          className={`font-[family-name:var(--font-display)] font-semibold text-white transition-all ${
            isActive ? "text-2xl tracking-tight" : "text-base tracking-wide"
          }`}
        >
          {item.title}
        </p>
        {isActive && (
          <p className="mt-1 text-sm text-white/70">{item.caption}</p>
        )}
      </div>

      {/* Top-right number indicator on active card */}
      {isActive && (
        <span className="absolute right-5 top-5 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-cta)]">
          0{item.id}
        </span>
      )}
    </button>
  );
};

export function WhyChooseAccordion() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="section-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          {/* LEFT: text + CTA */}
          <div className="w-full text-center lg:w-[42%] lg:text-left">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-near-black)]/15 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-near-black)]/70 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-cta)]" />
              Why Cinthamani
            </span>

            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.1] tracking-tight text-[var(--color-near-black)] md:text-5xl">
              Industry leaders trust us
              <br />
              <span className="text-[var(--color-cta)]">for a reason.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-[var(--color-near-black)]/70 md:text-lg lg:mx-0">
              Four decades of broadcast expertise, end-to-end integration,
              proprietary technology, and Apple enterprise specialisation —
              backed by a global footprint across India, the US, and the UAE.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-center lg:items-start lg:justify-start">
              <Link href="/contact" className="btn-primary cursor-pointer">
                Get a Quote
              </Link>
              <Link href="/about" className="btn-pill cursor-pointer">
                Our Story
              </Link>
            </div>
          </div>

          {/* RIGHT: image accordion */}
          <div className="w-full lg:w-[58%]">
            <div className="flex w-full flex-row items-center justify-start gap-3 overflow-x-auto pb-2 lg:justify-center lg:overflow-visible">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onActivate={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
