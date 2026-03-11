import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import IntroSection from '@/components/sections/IntroSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import AISection from '@/components/sections/AISection';
import ClaritySection from '@/components/sections/ClaritySection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <ExperienceSection />
        <AISection />
        <ClaritySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
