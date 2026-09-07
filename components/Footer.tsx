import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-plum/10 bg-cream py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row md:px-10">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.jpeg"
            alt="Umer Child & Mother Care Complex"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="font-display text-base text-plum">
            Umer <span className="italic">Complex</span>
          </span>
        </div>

        <p className="text-sm text-ink/60">
          © {new Date().getFullYear()} Umer Child & Mother Care Complex. All
          rights reserved.
        </p>

        <div className="flex items-center gap-4 text-plum/70">
          <a href="#" aria-label="Facebook" className="focus-ring hover:text-magenta">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="focus-ring hover:text-magenta">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
