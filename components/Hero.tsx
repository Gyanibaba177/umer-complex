"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";
import { WordReveal, Magnetic } from "./motion-primitives";

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
};

export default function Hero() {
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const heroX = useSpring(mvX, { stiffness: 60, damping: 18 });
  const heroY = useSpring(mvY, { stiffness: 60, damping: 18 });
  const illustrationX = useTransform(heroX, [-1, 1], [-16, 16]);
  const illustrationY = useTransform(heroY, [-1, 1], [-16, 16]);
  const blobX = useTransform(heroX, [-1, 1], [10, -10]);
  const blobY = useTransform(heroY, [-1, 1], [10, -10]);
  const blobXInv = useTransform(blobX, (v) => -v);
  const blobYInv = useTransform(blobY, (v) => -v);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mvX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mvY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMove}
      className="relative overflow-hidden bg-cream pb-20 pt-32 md:pb-28 md:pt-40"
    >
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blush blur-3xl"
      />
      <motion.div
        style={{ x: blobXInv, y: blobYInv }}
        className="pointer-events-none absolute -right-16 top-32 h-80 w-80 rounded-full bg-gold/30 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:px-10">
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
          <motion.p variants={item} className="mb-4 font-display text-lg italic text-magenta">
            Two lives, one gentle hand
          </motion.p>

          <h1 className="font-display text-[2.6rem] leading-[1.15] text-plum sm:text-6xl">
            <WordReveal text="Care that grows" delay={0.5} />
            <br />
            <WordReveal text="with your family" delay={0.85} />
          </h1>

          <motion.p variants={item} className="mt-6 max-w-md text-[17px] leading-relaxed text-ink/75">
            Umer Child & Mother Care Complex brings pregnancy, delivery and
            childcare together under one roof, with attentive doctors and a
            calm, well-equipped space at every step.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Magnetic
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-block rounded-full bg-magenta px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-magenta/25 hover:bg-magentaDeep"
            >
              Chat with us on WhatsApp
            </Magnetic>
            <Magnetic
              href="#services"
              className="focus-ring inline-block rounded-full border border-plum/20 px-7 py-3.5 text-[15px] font-semibold text-plum hover:bg-blush"
            >
              Explore services
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative mx-auto flex h-[340px] w-[340px] items-center justify-center sm:h-[420px] sm:w-[420px]"
        >
          <motion.div
            animate={{
              y: [0, -14, 0],
              borderRadius: [
                "62% 38% 55% 45% / 45% 55% 45% 55%",
                "45% 55% 38% 62% / 55% 45% 55% 45%",
                "62% 38% 55% 45% / 45% 55% 45% 55%",
              ],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-magenta/15 to-plum/10"
          />
          <motion.div
            style={{ x: illustrationX, y: illustrationY }}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 h-[78%] w-[78%]"
          >
            <MotherChildIllustration className="h-full w-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function MotherChildIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Illustration of a mother holding her child"
    >
      <path
        d="M110 8c-30 0-42 24-42 46 0 14 6 24 14 32-30 6-52 30-52 66v34c0 14 11 26 25 26h110c14 0 25-12 25-26v-34c0-36-22-60-52-66 8-8 14-18 14-32 0-22-12-46-42-46Z"
        fill="#D6127D"
      />
      <path
        d="M110 8c-30 0-42 24-42 46 0 14 6 24 14 32-14 3-26 9-36 18 8 22 30 38 64 38s56-16 64-38c-10-9-22-15-36-18 8-8 14-18 14-32 0-22-12-46-42-46Z"
        fill="#5E1A48"
        opacity="0.9"
      />
      <circle cx="150" cy="112" r="20" fill="#FDF1F6" />
      <circle cx="146" cy="108" r="1.6" fill="#5E1A48" />
      <path
        d="M158 122c8 10 10 24 10 38v20c0 8-6 14-14 14h-18c-8 0-14-6-14-14v-10c0-16 10-28 22-32 5-2 10-9 14-16Z"
        fill="#FDF1F6"
      />
      <circle cx="150" cy="150" r="14" fill="#F0C8A0" />
      <circle cx="146" cy="147" r="1.3" fill="#5E1A48" />
    </svg>
  );
}
