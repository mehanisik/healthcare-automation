export const landingPageData = {
  companyInfo: {
    name: 'GIRIT CONSULTING',
    description: 'Helping medical practices achieve their financial goals with comprehensive healthcare management solutions since 2005.',
    hours: 'Monday - Friday: 8:30 AM - 5:00 PM',
    address: [
      '3470 Wilshire Blvd. Suite 616',
      'Los Angeles, CA 90010',
    ],
  },
  team: [
    {
      name: 'Fatma Girit, MBA',
      role: 'Founder & CEO',
      description: 'Expert in Medical Billing and Healthcare Management with an MBA from California State University Long Beach',
    },
    {
      name: 'Esther Kim',
      role: 'Senior Consultant',
      description: 'Skilled consultant specializing in medical billing and practice management',
    },
    {
      name: 'Denise Ustariz',
      role: 'Legal Advisor',
      description: 'Legal professional guiding through healthcare compliance and legal matters',
    },
  ],
  services: [
    {
      title: 'Patient Access Optimization',
      description: 'Streamline front-end operations including appointment scheduling, insurance verification, and financial clearance to enhance patient experience and revenue cycle efficiency.',
      plainDescription: 'We help your front desk team work faster and smarter by improving how patients are scheduled, their insurance is checked, and payments are cleared before visits.',
    },
    {
      title: 'Clinical Documentation Enhancement',
      description: 'Ensure accurate clinical representation and appropriate reimbursement through physician education, documentation review, and expert coding support.',
      plainDescription: 'We make sure doctors\' notes are complete and correct so your practice gets paid fairly and avoids insurance issues.',
    },
    {
      title: 'Medical Coding & Billing',
      description: 'Utilize certified coding professionals and AI-powered tools to drive accurate, compliant, and efficient charge capture and billing processes.',
      plainDescription: 'We turn your patient visits into accurate medical codes and bills using experts and smart tools, so you get paid quickly and correctly.',
    },
    {
      title: 'Denial Prevention & Appeals',
      description: 'Reduce claim denials with comprehensive root cause analysis, targeted appeal strategies, and prevention protocols integrated across your RCM workflow.',
      plainDescription: 'We help stop insurance claim denials before they happen—and fight back when they do—so you don\'t lose money.',
    },
    {
      title: 'Accounts Receivable Optimization',
      description: 'Accelerate collections and minimize revenue leakage through real-time follow-ups, underpayment recovery, and payer performance monitoring.',
      plainDescription: 'We follow up on unpaid bills, recover missed payments, and make sure your income doesn\'t slip through the cracks.',
    },
    {
      title: 'Revenue Cycle Analytics',
      description: 'Leverage dynamic dashboards, KPI tracking, and predictive analytics to uncover insights, improve outcomes, and guide strategic decisions.',
      plainDescription: 'We give you easy-to-understand reports and dashboards so you can see where your money comes from—and how to grow it.',
    },
  ],
  solutions: [
    {
      key: 'billing',
      title: 'Medical Billing & Coding',
      description: 'We ensure accurate medical coding and timely billing submissions, minimizing claim denials and maximizing reimbursements. Includes both in-network and out-of-network billing expertise.',
      plainDescription: 'From small clinics to large practices, we handle your medical billing and coding—whether you\'re in-network or out-of-network.',
      bg: '/blue.svg',
      img: '/medical-billing.jpg',
      imgAlt: 'Medical Billing & Coding',
      tags: ['Billing', 'Coding', 'Reimbursements'],
    },
    {
      key: 'appeals',
      title: 'Appeals & Payor Negotiations',
      description: 'We handle claim denials and underpayments by managing appeals and negotiating directly with insurance payors—ensuring your practice receives what it deserves.',
      plainDescription: 'We handle tough insurance companies for you—appealing denied claims and negotiating better payment rates.',
      img: '/negotiations.jpg',
      imgAlt: 'Appeals and Payor Negotiations',
      tags: ['Appeals', 'Negotiations', 'Payors'],
    },
    {
      key: 'management',
      title: 'Practice Management & Setup',
      description: 'Whether you\'re launching a new practice or optimizing an existing one, we support you with systems setup, staff training, scheduling, credentialing, and administrative workflows.',
      plainDescription: 'Starting or running a practice? We help with everything—getting insurance approvals, training staff, and setting up systems.',
      img: '/practice-management.jpg',
      imgAlt: 'Practice Management and Setup',
      tags: ['Management', 'Setup', 'Workflows'],
    },
    {
      key: 'strategy',
      title: 'Business Strategy & Payor Contracting',
      description: 'We help you develop a profitable business model and assist with payor contract negotiations to ensure your services are properly valued and reimbursed.',
      plainDescription: 'We help your practice grow with smart planning—and get better deals when signing contracts with insurance companies.',
      img: '/payor-contracting.jpg',
      imgAlt: 'Business Strategy and Payor Contracting',
      tags: ['Strategy', 'Payor Contracting', 'Profitability'],
    },
  ],
  inquiryOptions: [
    { value: 'medical-billing', label: 'Medical Billing' },
    { value: 'practice-management', label: 'Practice Management' },
    { value: 'business-strategy', label: 'Business Strategy' },
    { value: 'practice-setup', label: 'Practice Setup' },
    { value: 'other', label: 'Other' },
  ],
  footerLinks: [
    {
      id: 'services',
      group: 'Services',
      items: [
        { id: 'billing', title: 'Medical Billing & Coding', href: '/services#billing' },
        { id: 'out-of-network', title: 'Out of Network Billing', href: '/services#out-of-network' },
        { id: 'appeals', title: 'Appeals & Payor Negotiations', href: '/services#appeals' },
        { id: 'management', title: 'Practice Management', href: '/services#management' },
        { id: 'strategy', title: 'Business Strategy', href: '/services#strategy' },
        { id: 'setup', title: 'Practice Setup', href: '/services#setup' },
        { id: 'contracting', title: 'Payor Contracting', href: '/services#contracting' },
      ],
    },
    {
      id: 'company',
      group: 'Company',
      items: [
        { id: 'about', title: 'About', href: '/about' },
        { id: 'team', title: 'Team', href: '/about#team' },
        { id: 'testimonials', title: 'Testimonials', href: '/#testimonials' },
        { id: 'contact', title: 'Contact', href: '/contact' },
      ],
    },
    {
      id: 'resources',
      group: 'Resources',
      items: [
        {
          id: 'telemedicine',
          title: 'How to Code Telemedicine',
          href: 'https://www.giritconsulting.com/news/2020/3/24/how-to-code-telemedicine',
        },
        {
          id: 'responsibilities',
          title: 'Telehealth Patient Responsibilities',
          href: 'https://www.giritconsulting.com/news/2017/6/4/coming-soon',
        },
        {
          id: 'guidelines',
          title: 'Medicare Telehealth Guidelines',
          href: 'https://www.giritconsulting.com/news/2020/3/24/medicare-telehealth-guidelines-during-coronovirus-outbreal',
        },
      ],
    },
  ],
  navigation: {
    main: [
      { label: 'Features', href: '#features' },
      { label: 'Solutions', href: '#solutions' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    footer: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Documentation', href: '/docs' },
    ],
  },
  testimonials: [
    {
      id: 1,
      content: 'Fatma works hard to make sure we get every dollar we deserve from the insurance company. I have received work emails from her on Saturdays and Sundays, even holidays!! She seem to work all the time. She is thorough and appropriately intense about collections. Fatma is easy to work with and has always been accessible (usually immediately). Unlike other billing companies, her goal is to collect every dollar and not just the "low hanging fruit" that most billing companies do for doctors. If you are unhappy with your billing company, it is because you have not worked with Fatma!!!',
      author: 'Dr. Madan',
      rating: 5,
    },
    {
      id: 2,
      content: 'I have the privilege to work with Fatma well over 10 years and she has the best work ethic, delight to work with and always quick to adept with shifting landscape of medical care. She is always there when faced any difficulty to resolve before it is a problem. She great to work with and always with can do attitude. She is happy to pitch in when asked even in short notice.',
      author: 'Dr. Pekerol',
      rating: 5,
    },
    {
      id: 3,
      content: 'Girit Medical Billing service has been great help to our billing. They are always there when our office or patients have questions or needing explanation. We love Fatma\'s approach to billing issues especially when it comes to difficult patients. She would keep calm and professional which is always so important. They are easy to work with, local service, no complicated contracts. Highly recommended..',
      author: 'Dr. Popkow',
      rating: 5,
    },
  ],
};
