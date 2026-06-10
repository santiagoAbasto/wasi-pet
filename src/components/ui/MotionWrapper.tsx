import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** True mientras la página se captura hacia Figma (hash #figmacapture). */
export const IS_FIGMA_CAPTURE =
  typeof window !== "undefined" && window.location.hash.includes("figmacapture");

/**
 * Modo estático: true si el usuario prefiere movimiento reducido o si la
 * página se está capturando hacia Figma. En ese caso todo se renderiza
 * directamente en su estado final.
 */
export function useStaticMotion() {
  const reduce = useReducedMotion();
  return reduce || IS_FIGMA_CAPTURE;
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/** Revelado al entrar en viewport: fade + subida + desenfoque. */
export function Reveal({ children, delay = 0, y = 26, className }: RevealProps) {
  const reduce = useStaticMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

type Direction3D = "up" | "left" | "right";

interface Reveal3DProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction3D;
  /** Intensidad de la rotación inicial en grados */
  tilt?: number;
  className?: string;
}

const OFFSETS: Record<Direction3D, (tilt: number) => Record<string, number>> = {
  up: (t) => ({ rotateX: t, y: 56 }),
  left: (t) => ({ rotateY: -t, x: -56 }),
  right: (t) => ({ rotateY: t, x: 56 }),
};

/** Revelado 3D: la pieza entra girando en perspectiva desde abajo o los lados. */
export function Reveal3D({
  children,
  delay = 0,
  direction = "up",
  tilt = 16,
  className,
}: Reveal3DProps) {
  const reduce = useStaticMotion();
  return (
    <motion.div
      className={`will-change-transform ${className ?? ""}`}
      initial={
        reduce
          ? false
          : { opacity: 0, scale: 0.95, transformPerspective: 1000, ...OFFSETS[direction](tilt) }
      }
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        transformPerspective: 1000,
      }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
