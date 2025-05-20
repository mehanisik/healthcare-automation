import Header from '#/components/layout/site/header';
import data from '#/data.json';
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
        <HeroSection companyInfo={data.companyInfo} />
        <FeaturesSection services={data.services} />
        <SolutionSection solutions={data.solutions} />
        <AboutSection team={data.team} />
        <TestimonialSection testimonials={data.testimonials} />
        <ContactSection inquiryOptions={data.inquiryOptions} />
        <FooterSection footerLinks={data.footerLinks} officeInfo={data.companyInfo} />
      </main>
    </>
  );
}
