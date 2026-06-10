import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Experience } from "./components/sections/Experience";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Gallery } from "./components/sections/Gallery";
import { Hero } from "./components/sections/Hero";
import { Marquee } from "./components/sections/Marquee";
import { Petshop } from "./components/sections/Petshop";
import { Services } from "./components/sections/Services";
import { Testimonials } from "./components/sections/Testimonials";
import { TrustBar } from "./components/sections/TrustBar";
import { FloatingWhatsApp } from "./components/ui/FloatingWhatsApp";

export default function App() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:font-bold focus:text-ink focus:shadow-lift"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Marquee />
        <TrustBar />
        <Services />
        <Experience />
        <Gallery />
        <Petshop />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
