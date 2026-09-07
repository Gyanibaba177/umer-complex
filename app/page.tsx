import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Doctors from "@/components/Doctors";
import VaccinationSchedule from "@/components/VaccinationSchedule";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyUs />
      <Doctors />
      <VaccinationSchedule />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </main>
  );
}
