interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} mb-12 md:mb-16`}>
      <h2
        className={`font-display font-semibold ${
          light ? "text-white" : "text-[var(--color-near-black)]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${
            light
              ? "text-white/70"
              : "text-[var(--color-text-secondary)]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
