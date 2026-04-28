/**
 * HeroFloatingCards — three tilted stat cards floating on the right side of the hero.
 * Inspired by the NovaCrest layout, adapted to Cinthamani's blue + gold palette.
 * Hidden on mobile; absolutely positioned with subtle float on desktop.
 */
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    label: "Years of Excellence",
    value: "40+",
    valueColor: "text-[#3B82F6]", // bright blue
    delta: "Since 1984",
    deltaIcon: false,
    position: "top-0 left-0",
    rotate: "-rotate-[8deg]",
    width: "w-[200px]",
    z: "z-[1]",
    delay: "0s",
  },
  {
    label: "Technology Partners",
    value: "35+",
    valueColor: "text-[var(--color-cta)]", // gold
    delta: "+5 new this year",
    deltaIcon: true,
    position: "top-[120px] left-[100px]",
    rotate: "-rotate-[5deg]",
    width: "w-[220px]",
    z: "z-[2]",
    delay: "1s",
  },
  {
    label: "Active Deployments",
    value: "400+",
    valueColor: "text-[#06B6D4]", // cyan
    delta: "+12.4%",
    deltaIcon: true,
    position: "top-[260px] left-[200px]",
    rotate: "-rotate-[3deg]",
    width: "w-[230px]",
    z: "z-[3]",
    delay: "2s",
  },
];

export default function HeroFloatingCards() {
  return (
    <div
      className="pointer-events-none relative hidden h-[460px] w-[520px] lg:block"
      aria-hidden="true"
    >
      {/* Soft radial glow behind cards */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(26, 26, 240, 0.25) 0%, rgba(202, 138, 4, 0.15) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {cards.map((card) => (
        <div
          key={card.label}
          className={`hero-stat-card absolute ${card.position} ${card.rotate} ${card.width} ${card.z}`}
          style={{ animationDelay: card.delay }}
        >
          <div
            className="rounded-2xl border border-white/15 bg-[#151F38]/85 p-5 backdrop-blur-md"
            style={{
              boxShadow:
                "0 8px 32px rgba(26, 26, 240, 0.18), 0 0 60px rgba(202, 138, 4, 0.08)",
            }}
          >
            <p className="text-sm font-normal text-white/60">{card.label}</p>
            <p
              className={`mt-2 font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight ${card.valueColor}`}
            >
              {card.value}
            </p>
            <div className="mt-2 flex items-center gap-1 text-xs">
              {card.deltaIcon && (
                <ArrowUpRight
                  className="h-3.5 w-3.5 text-[#10B981]"
                  strokeWidth={2.5}
                />
              )}
              <span
                className={
                  card.deltaIcon ? "font-medium text-[#10B981]" : "text-white/50"
                }
              >
                {card.delta}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
