export type Data = {
  readonly companyInfo: {
    readonly name: string;
    readonly description: string;
    readonly hours: string;
    readonly address: string[];
  };
  readonly team: Array<{
    readonly name: string;
    readonly role: string;
    readonly description: string;
  }>;
  readonly services: Array<{
    readonly title: string;
    readonly description: string;
    readonly plainDescription: string;
  }>;
  readonly solutions: Array<{
    readonly key: string;
    readonly title: string;
    readonly description: string;
    readonly plainDescription: string;
    readonly bg?: string;
    readonly img: string;
    readonly imgAlt: string;
    readonly tags: string[];
  }>;
  readonly inquiryOptions: Array<{
    readonly value: string;
    readonly label: string;
  }>;
  readonly footerLinks: Array<{
    readonly id: string;
    readonly group: string;
    readonly items: Array<{
      readonly id: string;
      readonly title: string;
      readonly href: string;
    }>;
  }>;
  readonly navigation: {
    readonly main: Array<{
      readonly label: string;
      readonly href: string;
    }>;
    readonly footer: Array<{
      readonly label: string;
      readonly href: string;
    }>;
  };
  readonly testimonials: Array<{
    readonly id: number;
    readonly content: string;
    readonly author: string;
    readonly rating: number;
  }>;
};

export type NavItem = {
  readonly label: string;
  readonly href: string;
};
