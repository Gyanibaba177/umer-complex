import Reveal from "./Reveal";
import { CountUp } from "./motion-primitives";

const stats = [
  { value: 15, suffix: "+", label: "Years of service", decimals: 0 },
  { value: 25, suffix: "k+", label: "Little smiles healed", decimals: 0 },
  { value: 4.9, suffix: "/5", label: "Rating from loving parents", decimals: 1 },
  { value: 24, suffix: "/7", label: "Emergency & labor room", decimals: 0 },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-plum/10 bg-blush/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4 md:px-10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center md:text-left">
            <CountUp
              value={s.value}
              suffix={s.suffix}
              decimals={s.decimals}
              delay={i * 0.1}
              className="font-display text-3xl text-plum sm:text-4xl"
            />
            <p className="mt-1 text-sm text-ink/70">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
