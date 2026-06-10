import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowDown,
  Bone,
  Heart,
  MapPin,
  MessageCircle,
  PawPrint,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { WA_LINK } from "../../data/site";
import { Button } from "../ui/Button";
import { useStaticMotion } from "../ui/MotionWrapper";

const BADGES = [
  { icon: PawPrint, label: "Peluquería canina", cls: "bg-primary/10 text-primary-deep" },
  { icon: ShoppingBag, label: "Petshop", cls: "bg-secondary/10 text-secondary-deep" },
  { icon: MapPin, label: "Cochabamba", cls: "bg-white text-ink border border-line" },
  { icon: Heart, label: "Atención con amor", cls: "bg-accent/15 text-[#9a6510]" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const reduce = useStaticMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 16 });
  const sy = useSpring(my, { stiffness: 50, damping: 16 });

  const iconsX = useTransform(sx, (v) => v * -26);
  const iconsY = useTransform(sy, (v) => v * -18);
  const bubblesX = useTransform(sx, (v) => v * 16);
  const bubblesY = useTransform(sy, (v) => v * 12);

  // Parallax 3D ligado al scroll: la foto se hunde y rota al bajar
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const photoRotateX = useTransform(scrollYProgress, [0, 1], [0, 14]);
  const photoRotateZ = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.25]);
  const decoY = useTransform(scrollYProgress, [0, 1], [0, 170]);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      onMouseMove={onMove}
      className="relative isolate overflow-hidden paw-pattern"
    >
      {/* atmósfera de fondo con parallax de scroll */}
      <motion.div aria-hidden="true" style={reduce ? undefined : { y: decoY }} className="absolute inset-0 -z-10">
        <div className="absolute -right-44 -top-44 size-[36rem] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -left-52 top-1/3 size-[32rem] rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 size-72 rounded-full bg-accent/10 blur-3xl" />
      </motion.div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-32">
        {/* Columna de texto */}
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
          style={reduce ? undefined : { y: textY, opacity: textOpacity }}
        >
          <motion.ul variants={item} className="flex flex-wrap gap-2" aria-label="Especialidades">
            {BADGES.map(({ icon: Icon, label, cls }) => (
              <li
                key={label}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-extrabold ${cls}`}
              >
                <Icon className="size-3.5" aria-hidden="true" />
                {label}
              </li>
            ))}
          </motion.ul>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[clamp(2.45rem,6vw,4.2rem)] font-extrabold leading-[1.05] tracking-tight text-ink"
          >
            Donde cada{" "}
            <span className="relative inline-block font-script font-normal text-primary">
              peludito
              <svg
                aria-hidden="true"
                viewBox="0 0 220 14"
                className="absolute -bottom-2 left-0 w-full text-secondary/60"
                preserveAspectRatio="none"
              >
                <path d="M4 10 Q60 2 110 8 T216 6" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            se siente en casa
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Baños, cortes, estética y cuidado profesional para que tu mascota
            luzca feliz, limpia y saludable.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3.5">
            <Button href={WA_LINK} variant="whatsapp" size="lg" external icon={<MessageCircle className="size-5" />}>
              Agendar por WhatsApp
            </Button>
            <Button href="#servicios" variant="ghost" size="lg" icon={<ArrowDown className="size-4.5" />}>
              Ver servicios
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex items-center gap-3">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-[15px] font-bold text-ink/70">
              Atención con amor para los peluditos de Cochabamba
            </p>
          </motion.div>
        </motion.div>

        {/* Columna visual: el bloque entero gira en perspectiva al hacer scroll */}
        <motion.div
          style={
            reduce
              ? undefined
              : {
                  y: photoY,
                  rotateX: photoRotateX,
                  rotateZ: photoRotateZ,
                  scale: photoScale,
                  transformPerspective: 1100,
                }
          }
          className="will-change-transform"
        >
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.93, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-[29rem]"
        >
          {/* burbujas con parallax */}
          <motion.div aria-hidden="true" style={{ x: bubblesX, y: bubblesY }} className="absolute inset-0 -z-10">
            <span className="bubble absolute -left-8 top-10 size-16 animate-floaty-slow" />
            <span className="bubble absolute -right-4 top-1/3 size-10 animate-floaty" />
            <span className="bubble absolute -bottom-6 left-1/4 size-12 animate-floaty-slow" />
            <span className="bubble absolute right-12 -top-8 size-7 animate-floaty" />
          </motion.div>

          {/* iconos flotantes con parallax inverso */}
          <motion.div aria-hidden="true" style={{ x: iconsX, y: iconsY }} className="pointer-events-none absolute inset-0 z-10">
            <span className="absolute -left-5 top-1/4 grid size-12 -rotate-12 place-items-center rounded-2xl bg-white text-primary shadow-soft animate-floaty">
              <Scissors className="size-6" />
            </span>
            <span className="absolute -right-3 bottom-1/4 grid size-12 rotate-12 place-items-center rounded-2xl bg-white text-secondary shadow-soft animate-floaty-slow">
              <Bone className="size-6" />
            </span>
            <span className="absolute right-6 -top-4 grid size-10 rotate-6 place-items-center rounded-xl bg-white text-accent shadow-soft animate-floaty">
              <Sparkles className="size-5" />
            </span>
          </motion.div>

          {/* foto principal en arco */}
          <div className="relative overflow-hidden rounded-b-[3rem] rounded-t-[12rem] shadow-lift ring-8 ring-white/70">
            <img
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=80"
              alt="Golden retriever feliz y esponjoso después de su baño en Wasi Pet"
              width={1000}
              height={1250}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-plum/25 via-transparent to-transparent" />
          </div>

          {/* chips flotantes glass */}
          <div className="absolute -left-3 top-8 flex items-center gap-2.5 rounded-2xl glass p-3 pr-4 shadow-soft animate-floaty sm:-left-8">
            <span className="grid size-10 place-items-center rounded-xl bg-primary text-white">
              <PawPrint className="size-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-display text-sm font-extrabold text-ink">Peluditos felices</span>
              <span className="block text-xs font-semibold text-muted">Salen moviendo la cola</span>
            </span>
          </div>

          <div className="absolute -bottom-5 left-2 flex items-center gap-2.5 rounded-2xl glass p-3 pr-4 shadow-soft animate-floaty-slow sm:-left-6">
            <span className="grid size-10 place-items-center rounded-xl bg-secondary text-white">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-display text-sm font-extrabold text-ink">Cuidado profesional</span>
              <span className="block text-xs font-semibold text-muted">Higiene y paciencia</span>
            </span>
          </div>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
