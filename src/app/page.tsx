import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { StoryOfDaisy } from "@/components/sections/StoryOfDaisy";
import { Testimonials } from "@/components/sections/Testimonials";
import { Programs } from "@/components/sections/Programs";
import { Board } from "@/components/sections/Board";
import { Donate } from "@/components/sections/Donate";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-daisy-sage-700 focus:border-2 focus:border-daisy-sage-700 focus:rounded"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <ImpactMetrics />
        <StoryOfDaisy />
        <Testimonials />
        <Programs />
        <Board />
        <Donate />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
