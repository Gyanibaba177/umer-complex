import { Syringe, CalendarCheck2 } from "lucide-react";
import Reveal from "./Reveal";

// TODO: confirm/adjust exact ages and vaccine names against your complex's
// actual immunization protocol before publishing — this follows the standard
// Pakistan EPI + common private-schedule additions.
const schedule = [
  {
    stage: "Birth",
    dose: "Dose 1",
    vaccines: "BCG · Hep-B · Polio (OPV 0)",
    note: "Hepatitis B first dose at birth",
  },
  {
    stage: "6 Weeks",
    dose: "Dose 2",
    vaccines: "Pentavalent · Polio · Rotavirus",
    note: "First big immunity boost",
  },
  {
    stage: "10 Weeks",
    dose: "Dose 3",
    vaccines: "Pentavalent · Polio · PCV",
    note: "Second round, right on schedule",
  },
  {
    stage: "14 Weeks",
    dose: "Dose 4",
    vaccines: "Pentavalent · Polio (IPV) · Rotavirus",
    note: "Final primary immunity dose",
  },
  {
    stage: "9 Months",
    dose: "Dose 5",
    vaccines: "Measles · Vitamin A",
    note: "First measles protection",
  },
  {
    stage: "15 Months",
    dose: "Booster",
    vaccines: "MMR · Varicella",
    note: "Toddler booster round",
  },
];

export default function VaccinationSchedule() {
  return (
    <section id="vaccinations" className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold">
            <Syringe size={14} /> Vaccination schedule
          </span>
          <h2 className="mt-5 font-display text-4xl leading-tight text-cream sm:text-5xl">
            On-time shots, on-time smiles.{" "}
            <span className="text-magenta">Guaranteed.</span>
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-cream/70">
            We follow the complete EPI &amp; private vaccination schedules —
            and we <span className="font-semibold text-cream">call you before
            every dose</span> so nothing is ever missed. Full digital records
            for school &amp; travel.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {schedule.map((s, i) => (
            <Reveal key={s.stage} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-cream/10 bg-white/[0.04] p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wide text-gold">
                    {s.stage}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-cream/50">
                    <CalendarCheck2 size={14} /> {s.dose}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg text-cream">{s.vaccines}</h3>
                <p className="mt-1.5 text-sm text-cream/55">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
