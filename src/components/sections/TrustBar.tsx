import { Heart, MessageCircle, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "../ui/MotionWrapper";

interface TrustItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  tint: string;
}

const ITEMS: TrustItem[] = [
  {
    icon: Heart,
    title: "Trato con amor",
    desc: "Paciencia y cariño real con cada peludito, sin apuros ni estrés.",
    tint: "bg-primary",
  },
  {
    icon: ShieldCheck,
    title: "Higiene y seguridad",
    desc: "Espacios limpios y manejo cuidadoso en cada servicio.",
    tint: "bg-secondary",
  },
  {
    icon: Sparkles,
    title: "Productos de calidad",
    desc: "Shampoos y cuidados pensados para cada tipo de pelaje.",
    tint: "bg-accent",
  },
  {
    icon: MessageCircle,
    title: "Agenda fácil",
    desc: "Escríbenos por WhatsApp y reserva su cita en segundos.",
    tint: "bg-wa-deep",
  },
];

export function TrustBar() {
  return (
    <section id="confianza" aria-label="Por qué confiar en Wasi Pet" className="border-y border-line bg-cream-soft/70">
      <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-x-10 gap-y-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:py-16">
        {ITEMS.map(({ icon: Icon, title, desc, tint }, i) => (
          <Reveal key={title} delay={i * 0.08}>
            <li className="flex items-start gap-4">
              <span className={`grid size-12 shrink-0 rotate-3 place-items-center rounded-2xl text-white shadow-soft ${tint}`}>
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-muted">{desc}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
