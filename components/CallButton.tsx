"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { buildTelLink } from "@/lib/site-config";
import { Magnetic } from "./motion-primitives";

export default function CallButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.85, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-[6.5rem] right-6 z-50"
    >
      <Magnetic
        href={buildTelLink()}
        aria-label="Call the clinic"
        className="focus-ring relative flex h-14 w-14 items-center justify-center rounded-full bg-plum text-white shadow-xl"
      >
        <Phone size={24} strokeWidth={2} className="relative z-10" />
      </Magnetic>
    </motion.div>
  );
}
