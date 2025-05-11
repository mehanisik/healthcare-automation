import Contact from '@/components/layout/contact';
import FeaturesSection from '@/components/layout/feature';
import FooterSection from '@/components/layout/footer';
import Header from '@/components/layout/header';
import HeroSection from '@/components/layout/hero-section';
import SolutionSection from '@/components/layout/solutions-showcase';
import TestimonialSection from '@/components/layout/testimonial';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-background">
      <Header />
      <main className="flex flex-col gap-16" role="main">
        <HeroSection />
        <FeaturesSection />
        <SolutionSection />
        <TestimonialSection />
        <Contact />
      </main>
      <FooterSection />
    </div>
  );
}
