import type { Data } from '.';

export type TeamMember = {
  name: string;
  role: string;
  description: string;
};

export type AboutSectionProps = {
  team: TeamMember[];
};

export type FeatureSectionProps = {
  services: Data['services'];
};

export type HeroSectionProps = {
  companyInfo: Data['companyInfo'];
};

export type SolutionsShowcaseProps = {
  solutions: Data['solutions'];
};

export type TestimonialSectionProps = {
  testimonials: Data['testimonials'];
};

export type FooterSectionProps = {
  footerLinks: Data['footerLinks'];
  officeInfo: Data['companyInfo'];
};

export type SectionContainerProps = {
  id: string;
  ref?: React.RefObject<HTMLDivElement>;
  className?: string;
  titleChip?: string;
  mainTitle?: string;
  titleDescription?: string;
  children: React.ReactNode;
  secondaryClassName?: string;
};

export type ContactSectionProps = {
  inquiryOptions: Data['inquiryOptions'];
};
