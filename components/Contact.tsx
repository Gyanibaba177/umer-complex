import { MapPin, Phone, Mail, Clock3, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { Magnetic } from "./motion-primitives";
import {
  buildWhatsAppLink,
  CLINIC_ADDRESS,
  CLINIC_PHONE,
  CLINIC_EMAIL,
  CLINIC_HOURS,
} from "@/lib/site-config";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-display text-lg italic text-magenta">Get in touch</p>
        <h2 className="mt-2 font-display text-4xl text-plum sm:text-5xl">
          Visit or message us anytime
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
        <Reveal className="overflow-hidden rounded-3xl border border-plum/10">
         <iframe
  title="Complex location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849.6250371232018!2d74.46546811436255!3d31.59275241486757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191143d3125c7b%3A0x20eda57bd082c12c!2sFisheries%20Complex%2C%20Manawan%2C%20Lahore!5e0!3m2!1sen!2s!4v1789154447464!5m2!1sen!2s"
  className="h-[320px] w-full md:h-full"
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
/>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-between rounded-3xl bg-blush/70 p-9">
          <div className="space-y-6">
            <InfoRow icon={MapPin} label={CLINIC_ADDRESS} />
            <InfoRow icon={Phone} label={CLINIC_PHONE} />
            <InfoRow icon={Mail} label={CLINIC_EMAIL} />
            <InfoRow icon={Clock3} label={CLINIC_HOURS} />
          </div>

          <Magnetic
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-magenta px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-magenta/25 hover:bg-magentaDeep"
          >
            <MessageCircle size={20} />
            Message us on WhatsApp
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 text-magenta" size={20} strokeWidth={1.8} />
      <span className="text-[15px] text-ink/80">{label}</span>
    </div>
  );
}
