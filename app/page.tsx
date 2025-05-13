import type { NextPage } from 'next';
import AboutSection from 'components/about';
import ContactSection from 'components/contact';
import FeaturesSection from 'components/feature';
import FooterSection from 'components/footer';
import Header from 'components/header';
import HeroSection from 'components/hero-section';
import SolutionSection from 'components/solutions-showcase';
import TestimonialSection from 'components/testimonial';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-16 w-full overflow-hidden" aria-label="Main content">
        <HeroSection />
        <FeaturesSection />
        <SolutionSection />
        <AboutSection />
        <TestimonialSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Home;
