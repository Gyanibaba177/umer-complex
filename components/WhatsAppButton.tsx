"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { Magnetic } from "./motion-primitives";

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Magnetic
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="focus-ring relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl"
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(37,211,102,0.5)",
              "0 0 0 16px rgba(37,211,102,0)",
              "0 0 0 0 rgba(37,211,102,0)",
            ],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 rounded-full"
        />
        <MessageCircle size={30} fill="white" strokeWidth={0} className="relative z-10" />
      </Magnetic>
    </motion.div>
  );
}
