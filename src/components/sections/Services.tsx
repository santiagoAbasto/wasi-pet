import { ArrowRight } from "lucide-react";
import { SERVICES, type Service, type ServiceTint } from "../../data/services";
import { waLink } from "../../data/site";
import { Reveal, Reveal3D } from "../ui/MotionWrapper";
import { SectionTitle } from "../ui/SectionTitle";
import { TiltCard } from "../ui/TiltCard";

const TINT_ICON: Record<ServiceTint, string> = {
  pink: "bg-primary",
  purple: "bg-secondary",
  gold: "bg-accent",
};

const consultLink = (title: string) =>
  waLink(`Hola Wasi Pet, quiero consultar por ${title.toLowerCase()} para mi peludito`);

function FeaturedCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group relative isolate flex h-full min-h-80 flex-col justify-end overflow-hidden rounded-[28px] shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <img
        src={service.image}
        alt={service.imageAlt ?? service.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-plum/90 via-plum/35 to-transparent" />
      <div className="p-7">
        <span className={`grid size-12 place-items-center rounded-2xl text-white shadow-soft ${TINT_ICON[service.tint]}`}>
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <h3 className="mt-4 font-display text-2xl font-extrabold text-white">{service.title}</h3>
        <p className="mt-1.5 max-w-md leading-relaxed text-white/80">{service.desc}</p>
        <a
          href={consultLink(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 font-display text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-ink"
        >
          Consultar
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-soft">
      <span
        className={`grid size-12 place-items-center rounded-2xl text-white shadow-soft transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 ${TINT_ICON[service.tint]}`}
      >
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-display text-xl font-extrabold text-ink">{service.title}</h3>
      <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{service.desc}</p>
      <a
        href={consultLink(service.title)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex min-h-11 items-center gap-1.5 pt-4 font-display text-[15px] font-bold text-primary transition-colors hover:text-primary-deep"
      >
        Consultar
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </a>
    </article>
  );
}

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <Reveal>
        <SectionTitle
          script="nuestros servicios"
          title="Cuidado completo para tu peludito"
          lede="Del baño burbuja al corte de raza: todo lo que tu mascota necesita para verse y sentirse increíble."
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => (
          <Reveal3D
            key={service.title}
            delay={(i % 4) * 0.07}
            direction={service.featured ? (i === 0 ? "left" : "right") : "up"}
            tilt={service.featured ? 12 : 16}
            className={service.featured ? "h-full sm:col-span-2" : "h-full"}
          >
            {service.featured ? (
              <TiltCard className="h-full">
                <FeaturedCard service={service} />
              </TiltCard>
            ) : (
              <ServiceCard service={service} />
            )}
          </Reveal3D>
        ))}
      </div>
    </section>
  );
}
