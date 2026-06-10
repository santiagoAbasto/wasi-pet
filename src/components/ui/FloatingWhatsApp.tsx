import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { WA_LINK } from "../../data/site";
import { WhatsAppIcon } from "./SocialIcons";

export function FloatingWhatsApp() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [bubble, setBubble] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  // Aparece después de pasar el hero
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Burbuja de saludo: se muestra una sola vez y se despide sola
  useEffect(() => {
    if (!visible || bubbleDismissed) return;
    const show = setTimeout(() => setBubble(true), 1200);
    const hide = setTimeout(() => {
      setBubble(false);
      setBubbleDismissed(true);
    }, 7200);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [visible, bubbleDismissed]);

  return (
    <div className="fixed right-4 z-[80] bottom-[max(1.1rem,env(safe-area-inset-bottom))]">
      <AnimatePresence>
        {bubble && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.85, transformPerspective: 600, rotateX: -18 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="absolute bottom-full right-0 mb-3 w-56 origin-bottom-right rounded-3xl rounded-br-lg glass p-4 shadow-lift"
          >
            <p className="font-display text-sm font-extrabold text-ink">¡Hola! Somos Wasi Pet</p>
            <p className="mt-1 text-[13px] font-semibold leading-snug text-muted">
              ¿Le damos su baño o corte a tu peludito? Respondemos al toque.
            </p>
            <span aria-hidden="true" className="absolute -bottom-1.5 right-6 size-3 rotate-45 bg-white/80" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {visible && (
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar por WhatsApp"
            initial={reduce ? false : { scale: 0, opacity: 0, rotate: -90 }}
            animate={
              reduce
                ? { scale: 1, opacity: 1 }
                : { scale: 1, opacity: 1, rotate: 0, y: [0, -5, 0] }
            }
            exit={{ scale: 0, opacity: 0 }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                    y: { delay: 1.4, duration: 2.8, repeat: Infinity, ease: "easeInOut" },
                  }
            }
            whileHover={{ scale: 1.12, rotate: 6 }}
            whileTap={{ scale: 0.92 }}
            onMouseEnter={() => !bubbleDismissed && setBubble(true)}
            className="group relative grid size-15 place-items-center rounded-full text-white shadow-[0_18px_40px_-10px_rgb(18_140_79/0.7)] bg-[linear-gradient(145deg,#2ee378_0%,#25d366_40%,#0f8a4d_100%)] ring-4 ring-white/50"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-wa/50 animate-ping [animation-duration:3s]"
            />
            <WhatsAppIcon className="relative size-7.5 drop-shadow-sm transition-transform duration-300 group-hover:scale-110" />
            <span
              aria-hidden="true"
              className="absolute -right-0.5 -top-0.5 size-3.5 rounded-full border-2 border-white bg-accent"
            />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
