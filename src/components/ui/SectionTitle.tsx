interface SectionTitleProps {
  script: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionTitle({ script, title, lede, align = "left", dark = false }: SectionTitleProps) {
  const centered = align === "center";
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className={`font-script text-xl sm:text-2xl ${dark ? "text-[#f9aed6]" : "text-primary"}`}>
        {script}
      </p>
      <h2
        className={`mt-2.5 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-white/70" : "text-muted"}`}>
          {lede}
        </p>
      )}
    </div>
  );
}
