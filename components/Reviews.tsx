import { Star } from "lucide-react";
import Reveal from "./Reveal";
import { CountUp } from "./motion-primitives";
import { DOCTOR_PATIENTS_LABEL } from "@/lib/site-config";

// TODO: swap in real parent reviews once you start collecting them.
const testimonials = [
  {
    quote:
      "Dr. Umer sahab ne hamesha itna sukoon se sun kar guide kiya — kabhi jaldi mehsoos nahi hui.",
    name: "Ayesha, mother of two",
  },
  {
    quote:
      "Vaccination reminders on time, records digital, staff bohot cooperative. Best decision for our baby's care.",
    name: "Hamza & Sana",
  },
  {
    quote:
      "From the first ultrasound to our son's first birthday, this team felt like family the whole way.",
    name: "Fatima, new mom",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
        <p className="font-display text-lg italic text-magenta">Loving parents</p>
        <h2 className="mt-2 font-display text-4xl text-plum sm:text-5xl">
          What families are saying
        </h2>

        <div className="mt-7 flex items-center gap-6 rounded-full bg-blush/80 px-7 py-3.5">
          <span className="flex items-center gap-1.5 font-display text-2xl text-plum">
            <Star size={20} className="text-amber-400" fill="currentColor" />
            4.9 / 5
          </span>
          <span className="h-6 w-px bg-plum/15" />
          <span className="font-display text-2xl text-plum">
            <CountUp value={25000} suffix="+" />
            <span className="ml-1.5 align-middle text-sm font-sans text-ink/60">
              {DOCTOR_PATIENTS_LABEL}
            </span>
          </span>
        </div>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-plum/10 bg-white p-7 shadow-[0_10px_30px_-18px_rgba(94,26,72,0.35)]">
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/75">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-5 font-display text-sm text-plum">{t.name}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
