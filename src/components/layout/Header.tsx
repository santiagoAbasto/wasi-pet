import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, WA_LINK } from "../../data/site";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: resalta la sección visible en el nav
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[70]">
      {/* Barra de progreso de lectura */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left bg-[image:var(--gradient-brand)]"
      />

      <div
        className={`transition-all duration-500 ${
          scrolled ? "glass shadow-[0_8px_30px_-12px_rgb(58_17_48/0.18)]" : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Navegación principal"
          className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6"
        >
          <a href="#inicio" className="rounded-full" aria-label="Wasi Pet, ir al inicio">
            <Logo />
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href} className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-primary/10"
                      aria-hidden="true"
                    />
                  )}
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block rounded-full px-4 py-2.5 text-[15px] font-bold transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-ink/75 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Button href={WA_LINK} variant="whatsapp" external icon={<MessageCircle className="size-4.5" />}>
              Agendar por WhatsApp
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid size-11 place-items-center rounded-full glass text-ink shadow-soft lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            initial={{ opacity: 0, y: -16, scale: 0.97, transformPerspective: 800, rotateX: -8 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: -16, scale: 0.97, rotateX: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-3 mt-2 origin-top rounded-[28px] glass p-3 shadow-lift lg:hidden"
          >
            <ul>
              {NAV_LINKS.map((link, i) => {
                const isActive = active === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className={`block rounded-2xl px-4 py-3 font-display text-lg font-bold transition-colors ${
                        isActive ? "bg-primary/10 text-primary" : "text-ink hover:bg-white/80 hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
            <div className="p-2">
              <Button
                href={WA_LINK}
                variant="whatsapp"
                external
                className="w-full"
                icon={<MessageCircle className="size-5" />}
                onClick={() => setOpen(false)}
              >
                Agendar por WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
