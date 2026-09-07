import { Baby, HeartPulse, Stethoscope, Syringe, Hospital, FlaskConical } from "lucide-react";
import Reveal from "./Reveal";
import { TiltCard } from "./motion-primitives";

const services = [
  {
    icon: HeartPulse,
    title: "Antenatal Care",
    desc: "Regular checkups, ultrasounds and guidance through every trimester, so you always know how you and your baby are doing.",
  },
  {
    icon: Baby,
    title: "Labor & Delivery",
    desc: "A calm, fully-equipped labor room with experienced staff on hand for normal delivery and emergency C-sections alike.",
  },
  {
    icon: Stethoscope,
    title: "Pediatric Care",
    desc: "Growth checkups, common illnesses and everyday concerns handled by doctors who know how to put little patients at ease.",
  },
  {
    icon: Syringe,
    title: "Vaccination",
    desc: "Complete immunization schedules tracked and reminded, from newborn shots through school-age boosters.",
  },
  {
    icon: Hospital,
    title: "Gynecology",
    desc: "Diagnosis and treatment for women's health concerns at every age, in a private and comfortable setting.",
  },
  {
    icon: FlaskConical,
    title: "Lab & Diagnostics",
    desc: "On-site testing for quick, reliable results, so treatment can start without unnecessary waiting.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-display text-lg italic text-magenta">What we offer</p>
        <h2 className="mt-2 font-display text-4xl text-plum sm:text-5xl">
          Care for every stage
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <TiltCard>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blush text-magenta">
                <s.icon size={26} strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 font-display text-xl text-plum">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
                {s.desc}
              </p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
