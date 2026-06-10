import { MapPin, MessageCircle, PawPrint } from "lucide-react";
import { SITE, WA_LINK } from "../../data/site";
import { Button } from "../ui/Button";
import { Reveal3D } from "../ui/MotionWrapper";

export function FinalCTA() {
  return (
    <section className="px-4 pb-20 pt-4 sm:px-6 lg:pb-28" aria-label="Agendar una cita">
      <Reveal3D tilt={22}>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] px-6 py-16 text-center shadow-lift sm:px-12 lg:py-24 bg-[image:var(--gradient-plum)]">
          {/* decoración: burbujas y patitas */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <span className="bubble absolute left-10 top-12 size-14 animate-floaty opacity-60" />
            <span className="bubble absolute right-14 top-20 size-9 animate-floaty-slow opacity-60" />
            <span className="bubble absolute bottom-14 left-1/4 size-10 animate-floaty-slow opacity-50" />
            <span className="bubble absolute bottom-10 right-1/4 size-16 animate-floaty opacity-40" />
            <PawPrint className="absolute -left-6 bottom-1/3 size-28 rotate-[-18deg] animate-floaty-slow text-white/10" />
            <PawPrint className="absolute -right-4 top-8 size-24 rotate-[22deg] animate-floaty text-white/8" />
            <span className="absolute -bottom-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
          </div>

          <div className="relative">
            <p className="font-script text-xl text-[#f9aed6] sm:text-2xl">tu peludito te lo agradecerá</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight text-white">
              ¿Listo para consentir a tu peludito?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              Agenda su baño o corte en segundos y dale una experiencia de
              cuidado con amor.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <Button href={WA_LINK} variant="whatsapp" size="lg" external icon={<MessageCircle className="size-5" />}>
                Agendar por WhatsApp
              </Button>
              <Button href={SITE.maps} variant="light" size="lg" external icon={<MapPin className="size-5" />}>
                Ver ubicación
              </Button>
            </div>
          </div>
        </div>
      </Reveal3D>
    </section>
  );
}
