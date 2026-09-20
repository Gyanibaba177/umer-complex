"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Star, Smile, Award } from "lucide-react";
import Reveal from "./Reveal";
import { CountUp } from "./motion-primitives";
import {
  DOCTOR_NAME,
  DOCTOR_ROLE,
  DOCTOR_PATIENTS_LABEL,
  DOCTOR_RATING_LABEL,
} from "@/lib/site-config";

const teamDoctors = [
  {
    name: "Dr. Nabiha Waqas",
    role: "Gynaecologist & Obstetrician",
    quals: "MBBS, FCPS",
    note: "Assistant Professor, Ghurki Trust Teaching Hospital Lahore",
    initials: "NW",
  },
  {
    name: "Dr. Fahad Liaqat",
    role: "Consultant Cardiologist",
    quals: "MBBS, FCPS (Cardiology)",
    note: "Assistant Professor, University of Lahore",
    initials: "FL",
  },
  {
    name: "Dr. M. Akram",
    role: "Diagnostic Radiologist",
    quals: "MBBS, MCPS",
    note: "Ultrasound & diagnostic imaging",
    initials: "MA",
  },
  {
    name: "Dr. M. Usama Islam",
    role: "Consultant Sports Physiotherapist",
    quals: "DPT (Gulab Devi Hospital), MS-SPT (RIU)",
    note: "Rehabilitation & physical therapy",
    initials: "UI",
  },
  {
    name: "Sana Hassan",
    role: "Consultant Clinical Psychologist",
    quals: "BSCP, MSCP, CBT & DBT Certified",
    note: "Behavioral and Educational Therapist",
    initials: "SH",
  },
];

const certifications = [
  "FCPS Paediatrician, PGPN (USA) certified",
  "Associate Professor, Ghurki Trust Teaching Hospital Lahore",
  "Expert in newborn, neonatal & child nutrition care",
  "MBBS, RMP, DCH — over a decade of paediatric practice",
];

const expertise = [
  { label: "General Paediatrics", value: 98 },
  { label: "Newborn Care", value: 95 },
  { label: "Vaccinations", value: 100 },
  { label: "Child Nutrition", value: 92 },
];

export default function Doctors() {
  return (
    <section id="doctors" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-display text-lg italic text-magenta">Meet the team</p>
        <h2 className="mt-2 font-display text-4xl text-plum sm:text-5xl">
          Doctors you can rely on
        </h2>
      </Reveal>

      {/* Doctor spotlight */}
      <Reveal className="mt-16">
        <div className="grid grid-cols-1 overflow-hidden rounded-[2rem] bg-blush/70 md:grid-cols-2">
          {/* Photo side */}
          <div className="relative flex items-center justify-center p-8 md:p-10">
            <div className="relative w-full max-w-sm overflow-hidden rounded-[1.75rem] shadow-[0_25px_50px_-20px_rgba(94,26,72,0.45)]">
              <Image
                src="/doctor-umer.jpg"
                alt={`${DOCTOR_NAME} — ${DOCTOR_ROLE}`}
                width={628}
                height={628}
                className="h-full w-full object-cover"
                priority
              />

              <motion.div
                initial={{ opacity: 0, y: -14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-3 top-3 flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-2 shadow-lg backdrop-blur"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
                  <Smile size={18} strokeWidth={2} />
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-base text-plum">
                    <CountUp value={25000} suffix="+" />
                  </span>
                  <span className="block text-[11px] text-ink/60">{DOCTOR_PATIENTS_LABEL}</span>
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-3 left-3 flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-2 shadow-lg backdrop-blur"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                  <Star size={18} strokeWidth={2} fill="currentColor" />
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-base text-plum">4.9 / 5</span>
                  <span className="block text-[11px] text-ink/60">{DOCTOR_RATING_LABEL}</span>
                </span>
              </motion.div>
            </div>
          </div>

          {/* Details side */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="font-display text-lg italic text-magenta">Doctor spotlight</p>
            <h3 className="mt-2 font-display text-3xl text-plum sm:text-4xl">{DOCTOR_NAME}</h3>
            <p className="mt-1 text-sm font-medium text-ink/60">{DOCTOR_ROLE}</p>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/75">
              A gentle, unhurried approach to every visit — real conversation
              with family, never a rushed number.
            </p>

            <ul className="mt-6 space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-[15px] text-ink/80">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-500" size={19} strokeWidth={2} />
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="flex items-center gap-2 font-display text-sm italic text-magenta">
                <Award size={16} /> Areas of expertise
              </p>
              <div className="mt-4 space-y-4">
                {expertise.map((e, i) => (
                  <div key={e.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-plum">{e.label}</span>
                      <span className="font-display text-magenta">{e.value}%</span>
                    </div>
                    <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-plum/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${e.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-magenta to-plum"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Rest of the team */}
      <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {teamDoctors.map((d, i) => (
          <Reveal key={d.name} delay={i * 0.08}>
            <div className="flex h-full flex-col items-center rounded-3xl bg-blush/70 p-8 text-center transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(94,26,72,0.5)]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-magenta font-display text-2xl text-white shadow-lg shadow-magenta/25">
                {d.initials}
              </div>
              <h3 className="mt-5 font-display text-xl text-plum">{d.name}</h3>
              <p className="mt-1.5 text-sm font-semibold text-magenta">{d.role}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink/65">{d.quals}</p>
              <p className="mt-3 border-t border-plum/10 pt-3 text-[12.5px] leading-relaxed text-ink/55">
                {d.note}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}