import { motion, useScroll, useSpring } from "framer-motion";
import { Quote, MessageCircle } from "lucide-react";
import { useRef } from "react";
import { WA_LINK } from "../../data/site";
import { Button } from "../ui/Button";
import { Reveal, Reveal3D, useStaticMotion } from "../ui/MotionWrapper";
import { SectionTitle } from "../ui/SectionTitle";

const STEPS = [
  {
    title: "Agenda tu cita",
    desc: "Escríbenos por WhatsApp, te confirmamos horario y resolvemos tus dudas al instante.",
  },
  {
    title: "Recibimos a tu peludito",
    desc: "Lo recibimos con calma y cariño para que entre tranquilo, como en casa.",
  },
  {
    title: "Baño, corte y cuidado",
    desc: "Trabajamos su pelaje con productos de calidad y mucha paciencia, paso a paso.",
  },
  {
    title: "Entrega feliz y limpio",
    desc: "Te lo devolvemos hermoso, perfumado y moviendo la cola. Listo para las fotos.",
  },
];

export function Experience() {
  const reduce = useStaticMotion();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 65%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 70, damping: 20 });

  return (
    <section id="experiencia" className="border-y border-line bg-cream-soft/50 paw-pattern">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-28">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionTitle
              script="la experiencia Wasi Pet"
              title="Así cuidamos a tu peludito"
              lede="Un proceso pensado para que tu mascota viva su baño o corte sin estrés, y tú con total tranquilidad."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <figure className="mt-8 max-w-md rounded-[28px] bg-white p-6 shadow-soft">
              <Quote className="size-7 fill-primary/15 text-primary" aria-hidden="true" />
              <blockquote className="mt-3 text-lg font-semibold leading-relaxed text-ink">
                Sabemos que tu mascota es parte de tu familia. Por eso la
                cuidamos con paciencia, cariño y atención profesional en cada
                detalle.
              </blockquote>
            </figure>
          </Reveal>
          <Reveal delay={0.25}>
            <Button
              href={WA_LINK}
              variant="whatsapp"
              size="lg"
              external
              className="mt-8"
              icon={<MessageCircle className="size-5" />}
            >
              Agendar su cita
            </Button>
          </Reveal>
        </div>

        <ol ref={ref} className="relative space-y-7" aria-label="Pasos de la experiencia Wasi Pet">
          {/* riel + línea de progreso animada */}
          <div aria-hidden="true" className="absolute bottom-8 left-6 top-8 w-1.5 -translate-x-1/2 rounded-full bg-line" />
          <motion.div
            aria-hidden="true"
            style={reduce ? undefined : { scaleY: lineScale }}
            className="absolute bottom-8 left-6 top-8 w-1.5 -translate-x-1/2 origin-top rounded-full bg-[image:var(--gradient-brand)]"
          />

          {STEPS.map((step, i) => (
            <Reveal3D key={step.title} delay={i * 0.1} direction="right" tilt={18}>
              <li className="relative pl-[4.6rem]">
                <motion.span
                  aria-hidden="true"
                  initial={reduce ? false : { scale: 0, rotate: -120 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{ type: "spring", stiffness: 240, damping: 14, delay: i * 0.1 + 0.25 }}
                  className="absolute left-6 top-6 grid size-12 -translate-x-1/2 place-items-center rounded-full bg-[image:var(--gradient-brand)] font-display text-lg font-extrabold text-white shadow-soft ring-4 ring-cream"
                >
                  {i + 1}
                </motion.span>
                <div className="rounded-[28px] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <h3 className="font-display text-xl font-extrabold text-ink">{step.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{step.desc}</p>
                </div>
              </li>
            </Reveal3D>
          ))}
        </ol>
      </div>
    </section>
  );
}
