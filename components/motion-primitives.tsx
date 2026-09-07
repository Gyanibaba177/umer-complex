"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  MotionProps,
} from "framer-motion";

// Reveals a heading word-by-word with a slide-up mask
export function WordReveal({
  text,
  delay = 0,
  className,
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-top mr-[0.28em]"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.07,
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// Animates a number counting up once it scrolls into view
export function CountUp({
  value,
  suffix = "",
  delay = 0,
  decimals = 0,
  className,
}: {
  value: number;
  suffix?: string;
  delay?: number;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const factor = 10 ** decimals;
          const controls = animate(0, value, {
            duration: 1.4,
            delay,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => setDisplay(Math.round(v * factor) / factor),
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, delay, decimals]);

  return (
    <span ref={ref} className={className}>
      {decimals > 0 ? display.toFixed(decimals) : display}
      {suffix}
    </span>
  );
}

// Tilts its content toward the cursor in 3D, with a soft glow that follows
export function TiltCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-40, 40], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-40, 40], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });
  const glowX = useTransform(x, [-40, 40], [0, 100]);
  const glowY = useTransform(y, [-40, 40], [0, 100]);
  const background = useTransform([glowX, glowY], ([gx, gy]) =>
    `radial-gradient(180px circle at ${gx}% ${gy}%, rgba(214,18,125,0.12), transparent 70%)`
  );

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 600 }}
      whileHover={{ boxShadow: "0 20px 40px -15px rgba(214,18,125,0.35)" }}
      className="relative overflow-hidden rounded-3xl border border-plum/10 bg-white p-7 shadow-[0_10px_30px_-18px_rgba(94,26,72,0.35)]"
    >
      <motion.div style={{ background }} className="pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

// A link/button that drifts slightly toward the cursor while hovered
export function Magnetic({
  children,
  className,
  ...props
}: { children: ReactNode; className?: string } & MotionProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(0, { stiffness: 150, damping: 12 });
  const y = useSpring(0, { stiffness: 150, damping: 12 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
}
