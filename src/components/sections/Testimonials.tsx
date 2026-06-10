import { Star } from "lucide-react";
import { TESTIMONIALS } from "../../data/testimonials";
import { Reveal, Reveal3D } from "../ui/MotionWrapper";
import { SectionTitle } from "../ui/SectionTitle";
import { TiltCard } from "../ui/TiltCard";

const AVATAR_TINTS = [
  "bg-[image:var(--gradient-brand)]",
  "bg-secondary",
  "bg-primary",
];

export function Testimonials() {
  return (
    <section id="opiniones" className="relative isolate overflow-hidden py-20 lg:py-28">
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 size-[28rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            align="center"
            script="opiniones reales"
            title="Familias felices, colas moviéndose"
            lede="Lo que nos dicen quienes ya confiaron sus peluditos a Wasi Pet."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal3D
              key={t.author}
              delay={i * 0.12}
              direction={i === 0 ? "left" : i === 2 ? "right" : "up"}
              tilt={18}
              className={i === 1 ? "lg:translate-y-6" : ""}
            >
              <TiltCard max={5} className="h-full">
              <article className="flex h-full flex-col gap-4 rounded-[28px] glass p-7 shadow-soft">
                <div className="flex gap-1" role="img" aria-label="Calificación: 5 de 5 estrellas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4.5 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-[17px] font-medium leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <footer className="mt-auto flex items-center gap-3 pt-2">
                  <span
                    aria-hidden="true"
                    className={`grid size-11 place-items-center rounded-full font-display text-sm font-extrabold text-white ${AVATAR_TINTS[i % AVATAR_TINTS.length]}`}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-display font-bold text-ink">{t.author}</p>
                    <p className="text-sm font-semibold text-muted">{t.pet}</p>
                  </div>
                </footer>
              </article>
              </TiltCard>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
