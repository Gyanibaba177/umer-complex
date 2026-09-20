import { Star } from "lucide-react";
import Reveal from "./Reveal";
import { CountUp } from "./motion-primitives";
import { DOCTOR_PATIENTS_LABEL } from "@/lib/site-config";

// TODO: replace these with real reviews as you collect them from patients.
const testimonials = [
  {
    quote:
      "Dr. Waqas Ali always listens calmly and explains everything clearly. We never felt rushed, not even once.",
    name: "Ayesha, mother of two",
    doctor: "Dr. Waqas Ali",
  },
  {
    quote:
      "Dr. Nabiha Waqas made my entire pregnancy so much easier. She took time to explain every step along the way.",
    name: "Hina & Bilal",
    doctor: "Dr. Nabiha Waqas",
  },
  {
    quote:
      "Vaccination reminders on time, digital records, and a very cooperative staff. Best decision for our baby's care.",
    name: "Hamza & Sana",
    doctor: "Dr. Waqas Ali",
  },
  {
    quote:
      "Dr. Fahad Liaqat examined my father thoroughly, walked us through the reports and kept the medication simple.",
    name: "Usman Tariq",
    doctor: "Dr. Fahad Liaqat",
  },
  {
    quote:
      "Went to Dr. M. Akram for an ultrasound. There was no waiting at all and the report was ready right away.",
    name: "Fatima, new mom",
    doctor: "Dr. M. Akram",
  },
  {
    quote:
      "After my son's knee injury, Dr. Usama's physiotherapy got him back on the field. We are so grateful.",
    name: "Kamran Sheikh",
    doctor: "Dr. M. Usama Islam",
  },
  {
    quote:
      "Sana Hassan's counselling made a real difference to our daughter's confidence. Her teachers noticed it too.",
    name: "Mrs. Rabia",
    doctor: "Sana Hassan",
  },
  {
    quote:
      "Paediatrics, gynae, lab and physiotherapy all under one roof — it has made things so much easier for our family.",
    name: "Imran & Maryam",
    doctor: "Umer Medical Complex",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
        <p className="font-display text-lg italic text-magenta">Loving families</p>
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
          <Reveal key={t.name} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-3xl border border-plum/10 bg-white p-7 shadow-[0_10px_30px_-18px_rgba(94,26,72,0.35)]">
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/75">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-plum/10 pt-4">
                <p className="font-display text-sm text-plum">{t.name}</p>
                <p className="mt-0.5 text-[12.5px] text-magenta">on {t.doctor}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}