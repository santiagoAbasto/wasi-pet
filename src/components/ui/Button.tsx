import type { ReactNode } from "react";

type Variant = "primary" | "whatsapp" | "ghost" | "light";
type Size = "md" | "lg";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

const VARIANTS: Record<Variant, string> = {
  primary:
    "text-white bg-[image:var(--gradient-brand)] shadow-soft hover:shadow-lift hover:-translate-y-0.5",
  whatsapp:
    "text-white bg-wa-deep hover:bg-[#0c7a43] shadow-[0_18px_36px_-16px_rgb(15_138_77/0.55)] hover:-translate-y-0.5",
  ghost:
    "glass text-ink hover:bg-white/85 hover:-translate-y-0.5 shadow-[0_10px_28px_-16px_rgb(58_17_48/0.35)]",
  light:
    "text-white bg-white/10 border border-white/25 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5",
};

const SIZES: Record<Size, string> = {
  md: "px-6 text-[15px] min-h-12",
  lg: "px-8 text-[17px] min-h-14",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  external,
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex select-none items-center justify-center gap-2.5 rounded-full font-display font-bold transition-all duration-300 ease-out active:scale-[0.97] ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}
