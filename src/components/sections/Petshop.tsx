import { Bone, Brush, Dog, Droplets, SprayCan, type LucideIcon } from "lucide-react";
import { waLink } from "../../data/site";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/MotionWrapper";
import { SectionTitle } from "../ui/SectionTitle";

interface Product {
  icon: LucideIcon;
  title: string;
  desc: string;
  tint: string;
}

const PRODUCTS: Product[] = [
  {
    icon: Droplets,
    title: "Shampoos premium",
    desc: "Para cada tipo de pelaje y pieles sensibles.",
    tint: "bg-primary",
  },
  {
    icon: Bone,
    title: "Snacks y premios",
    desc: "Ricos, saludables y aprobados por los peluditos.",
    tint: "bg-accent",
  },
  {
    icon: Dog,
    title: "Accesorios",
    desc: "Collares, correas y juguetes para engreírlo.",
    tint: "bg-secondary",
  },
  {
    icon: Brush,
    title: "Cepillos y cuidado",
    desc: "Todo para mantener su pelaje suave en casa.",
    tint: "bg-primary",
  },
  {
    icon: SprayCan,
    title: "Higiene diaria",
    desc: "Colonias, toallitas y cuidado para el día a día.",
    tint: "bg-secondary",
  },
];

const CONSULT = waLink("Hola Wasi Pet, quiero consultar la disponibilidad de productos del petshop");

export function Petshop() {
  return (
    <section id="petshop" className="border-y border-line bg-secondary/5">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionTitle
              script="nuestro petshop"
              title="Engríelo también en casa"
              lede="Productos seleccionados con el mismo cariño con el que bañamos: marcas de calidad para su cuidado diario."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <Button href={CONSULT} variant="ghost" external>
              Consultar disponibilidad
            </Button>
          </Reveal>
        </div>

        {/* Carrusel con snap en mobile, grid en desktop */}
        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 no-scrollbar lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
          {PRODUCTS.map(({ icon: Icon, title, desc, tint }, i) => (
            <Reveal key={title} delay={(i % 5) * 0.06} className="min-w-[230px] snap-start lg:min-w-0">
              <article className="group flex h-full flex-col rounded-[28px] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <span
                  className={`grid size-13 place-items-center rounded-2xl text-white shadow-soft transition-transform duration-300 group-hover:-rotate-6 ${tint}`}
                >
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold leading-snug text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
                <a
                  href={CONSULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex min-h-11 items-center pt-4 font-display text-sm font-bold text-secondary transition-colors hover:text-secondary-deep"
                >
                  Consultar
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
