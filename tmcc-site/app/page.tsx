import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Manifesto from "@/components/Manifesto";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Manifesto />
      <WhyUs />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
