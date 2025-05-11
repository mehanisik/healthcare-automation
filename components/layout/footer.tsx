import Link from 'next/link'

const links = [
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
]

export default function FooterSection() {
  return (
    <footer className="border-t bg-muted/30 pt-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" aria-label="go home" className="block size-fit text-xl font-bold">
              GIRIT CONSULTING
            </Link>
            <p className="mt-4 text-muted-foreground">
              Helping medical practices achieve their financial goals with comprehensive healthcare management solutions
              since 2005.
            </p>
            <div className="mt-6">
              <p className="font-medium">Office Hours</p>
              <p className="text-muted-foreground">Monday - Friday: 8:30 AM - 5:00 PM</p>
            </div>
            <div className="mt-4">
              <p className="font-medium">Location</p>
              <p className="text-muted-foreground">3470 Wilshire Blvd. Suite 616</p>
              <p className="text-muted-foreground">Los Angeles, CA 90010</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-3">
            {links.map(link => (
              <div key={link.id} className="space-y-4 text-sm">
                <span className="block font-medium">{link.group}</span>
                {link.items.map(item => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary block duration-150"
                  >
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            Girit Consulting, Inc. All rights reserved
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            <Link
              href="https://youtu.be/sK8AhZj7i5M"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5l-6-3.5v7z"
                >
                </path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
