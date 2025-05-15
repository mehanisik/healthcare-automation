export type Data = {
  companyInfo: {
    name: string;
    description: string;
    hours: string;
    address: Array<string>;
  };
  team: Array<{
    name: string;
    role: string;
    description: string;
  }>;
  services: Array<{
    title: string;
    description: string;
    plainDescription: string;
  }>;
  solutions: Array<{
    key: string;
    title: string;
    description: string;
    plainDescription: string;
    bg?: string;
    img: string;
    imgAlt: string;
    tags: Array<string>;
  }>;
  inquiryOptions: Array<{
    value: string;
    label: string;
  }>;
  footerLinks: Array<{
    id: string;
    group: string;
    items: Array<{
      id: string;
      title: string;
      href: string;
    }>;
  }>;
  navigation: {
    main: Array<{
      label: string;
      href: string;
    }>;
    footer: Array<{
      label: string;
      href: string;
    }>;
  };
  testimonials: Array<{
    id: number;
    content: string;
    author: string;
    rating: number;
  }>;

};

export type NavItem = {
  label: string;
  href: string;
};
