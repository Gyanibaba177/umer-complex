import { ShieldCheck, Clock3, Users2 } from "lucide-react";
import Reveal from "./Reveal";

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-plum py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="max-w-lg">
          <p className="font-display text-lg italic text-gold">Why families choose us</p>
          <h2 className="mt-2 font-display text-4xl text-cream sm:text-5xl">
            A complex built around trust
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Reveal className="md:col-span-2 rounded-3xl bg-magenta/95 p-9">
            <p className="font-display text-2xl leading-snug text-white sm:text-3xl">
              &ldquo;From the first checkup to the day you bring your baby
              home, one team stays with you.&rdquo;
            </p>
            <p className="mt-6 text-sm text-white/80">
              Continuity of care, doctors and complex, mother and child
            </p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-cream/15 p-9">
            <ShieldCheck className="text-gold" size={28} strokeWidth={1.8} />
            <h3 className="mt-4 font-display text-xl text-cream">Certified & hygienic</h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">
              Sterile facilities kept to strict clinical standards.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="rounded-3xl border border-cream/15 p-9">
            <Clock3 className="text-gold" size={28} strokeWidth={1.8} />
            <h3 className="mt-4 font-display text-xl text-cream">Always reachable</h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">
              Emergency and labor room support around the clock.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-2 rounded-3xl border border-cream/15 p-9">
            <Users2 className="text-gold" size={28} strokeWidth={1.8} />
            <h3 className="mt-4 font-display text-xl text-cream">Experienced team</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/70">
              Gynecologists, pediatricians and nursing staff who work
              together on every case, not in isolation.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
