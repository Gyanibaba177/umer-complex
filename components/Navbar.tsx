"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { Magnetic } from "./motion-primitives";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Doctors", href: "#doctors" },
  { label: "Vaccinations", href: "#vaccinations" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(94,26,72,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-10">
        <a href="#home" className="flex items-center gap-2 focus-ring">
          <motion.div
            whileHover={{ rotate: 12, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
          >
            <Image
              src="/logo.jpeg"
              alt="Umer Child & Mother Care Complex"
              width={44}
              height={44}
              className="rounded-full object-cover"
              priority
            />
          </motion.div>
          <span className="hidden font-display text-lg text-plum sm:block">
            Umer <span className="italic">Complex</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-underline focus-ring relative text-[15px] font-medium text-ink/80 transition-colors hover:text-magenta"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Magnetic
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring hidden rounded-full bg-magenta px-5 py-2.5 text-sm font-semibold text-white hover:bg-magentaDeep md:inline-block"
        >
          Book on WhatsApp
        </Magnetic>

        <button
          aria-label="Toggle menu"
          className="focus-ring rounded-md p-2 text-plum md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden bg-cream md:hidden"
        >
          <div className="flex flex-col gap-1 px-6 pb-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-2 py-3 text-base font-medium text-ink/85 hover:bg-blush hover:text-magenta"
              >
                {link.label}
              </a>
            ))}
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-2 rounded-full bg-magenta px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book on WhatsApp
            </a>
          </div>
        </motion.div>
      )}

      <style jsx>{`
        .nav-underline::after {
          content: "";
          position: absolute;
          left: 0;
          right: 100%;
          bottom: -4px;
          height: 2px;
          background: #d6127d;
          transition: right 0.3s ease;
        }
        .nav-underline:hover::after {
          right: 0;
        }
      `}</style>
    </header>
  );
}
