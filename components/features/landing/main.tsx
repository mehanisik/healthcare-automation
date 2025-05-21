import Header from '#/components/layout/site/header';
import { landingPageData } from '#/lib/landing-page.data';
import AboutSection from './about';
import ContactSection from './contact';
import FeaturesSection from './feature';
import FooterSection from './footer';
import HeroSection from './hero-section';
import SolutionSection from './solutions-showcase';
import TestimonialSection from './testimonial';

export default function Main() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-16 w-full" aria-label="Main content">
        <HeroSection companyInfo={landingPageData.companyInfo} />
        <FeaturesSection services={landingPageData.services} />
        <SolutionSection solutions={landingPageData.solutions} />
        <AboutSection team={landingPageData.team} />
        <TestimonialSection testimonials={landingPageData.testimonials} />
        <ContactSection inquiryOptions={landingPageData.inquiryOptions} />
        <FooterSection footerLinks={landingPageData.footerLinks} officeInfo={landingPageData.companyInfo} />
      </main>
    </>
  );
}
