"use client";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="text-[#CCA665] tracking-[0.3em] text-xs uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-serif leading-tight ${
          light ? "text-white" : "text-[#1a1a1a]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-gray-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
