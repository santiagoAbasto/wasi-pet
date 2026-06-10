/**
 * Recreación vectorial de la identidad Wasi Pet:
 * círculo magenta + anillo púrpura + schnauzer en línea blanca + wordmark script.
 * Si prefieres usar el PNG original, colócalo en src/assets/logos/ e
 * impórtalo aquí en lugar del SVG.
 */
export function DogMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      {/* orejas */}
      <path
        d="M17 23 L11.5 5.5 L26.5 14"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47 23 L52.5 5.5 L37.5 14"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* flequillo */}
      <path
        d="M21.5 19 Q27 12 32 16.5 Q37 12 42.5 19"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* cejas */}
      <path d="M20.5 29 Q24.5 24.5 29 27.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M35 27.5 Q39.5 24.5 43.5 29" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      {/* ojos */}
      <circle cx="25" cy="32" r="2" fill="currentColor" />
      <circle cx="39" cy="32" r="2" fill="currentColor" />
      {/* hocico */}
      <ellipse cx="32" cy="40.5" rx="5.6" ry="4.3" fill="currentColor" />
      {/* barba */}
      <path
        d="M22.5 39 Q23 50 32 53 Q41 50 41.5 39"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M32 45 L32 49.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-white shadow-soft ring-[3px] ring-secondary">
        <DogMark className="size-7" />
      </span>
      <span className="leading-none">
        <span className={`block font-script text-[1.3rem] ${dark ? "text-white" : "text-ink"}`}>
          Wasi Pet
        </span>
        <span
          className={`mt-1.5 block text-[10px] font-extrabold uppercase tracking-[0.16em] ${
            dark ? "text-white/60" : "text-muted"
          }`}
        >
          Peluquería canina · Cbba
        </span>
      </span>
    </span>
  );
}
