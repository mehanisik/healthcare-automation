export type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;
};

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  content: string;
  author: string;
  role: string;
  company: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};
