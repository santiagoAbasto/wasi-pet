import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Inclinación máxima en grados */
  max?: number;
}

/** Tarjeta con tilt 3D que sigue al mouse, con springs suaves. */
export function TiltCard({ children, className, max = 7 }: TiltCardProps) {
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 160, damping: 18 });
  const sry = useSpring(ry, { stiffness: 160, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rx.set(-py * max);
    ry.set(px * max);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      className={`will-change-transform ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
