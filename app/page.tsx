import type { NextPage } from 'next';
import AboutSection from 'components/about';
import ContactSection from 'components/contact';
import FeaturesSection from 'components/feature';
import FooterSection from 'components/footer';
import Header from 'components/header';
import HeroSection from 'components/hero-section';
import SolutionSection from 'components/solutions-showcase';
import TestimonialSection from 'components/testimonial';
import { getData } from './actions';

const Home: NextPage = async () => {
  try {
    const { companyInfo, team, services, solutions, inquiryOptions, footerLinks, navigation, testimonials } = await getData();

    return (
      <>
        <Header />
        <main className="flex flex-col gap-16 w-full" aria-label="Main content">
          <HeroSection companyInfo={companyInfo} />
          <FeaturesSection services={services} />
          <SolutionSection solutions={solutions} />
          <AboutSection team={team} />
          <TestimonialSection testimonials={testimonials} />
          <ContactSection inquiryOptions={inquiryOptions} />
          <FooterSection footerLinks={footerLinks} officeInfo={companyInfo} navigation={navigation} />
        </main>
      </>
    );
  } catch (error) {
    console.error('Error loading page data:', error);
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive mb-4">Something went wrong</h1>
          <p className="text-muted-foreground">Please try refreshing the page</p>
        </div>
      </div>
    );
  }
};

export default Home;
