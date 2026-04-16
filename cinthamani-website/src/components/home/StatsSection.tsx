const stats = [
  { value: "40+", label: "Years of Excellence" },
  { value: "400+", label: "Products & Solutions" },
  { value: "35+", label: "Technology Partners" },
  { value: "3", label: "Global Offices" },
];

export default function StatsSection() {
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container-narrow px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block text-4xl font-bold tracking-tight text-[var(--color-cta)] font-[family-name:var(--font-display)] md:text-5xl lg:text-6xl">
                {stat.value}
              </span>
              <span className="mt-2 block text-sm leading-snug text-white/70 md:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
