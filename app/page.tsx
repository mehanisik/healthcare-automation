import AboutSection from '#/components/features/landing/about';
import ContactSection from '#/components/features/landing/contact';
import FeaturesSection from '#/components/features/landing/feature';
import FooterSection from '#/components/features/landing/footer';
import HeroSection from '#/components/features/landing/hero-section';
import SolutionSection from '#/components/features/landing/solutions-showcase';
import TestimonialSection from '#/components/features/landing/testimonial';
import Header from '#/components/layout/site/header';
import data from '#/data.json';

const Home = () => {
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
};

export default Home;
