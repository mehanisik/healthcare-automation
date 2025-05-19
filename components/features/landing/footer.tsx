import type { Data } from '#/types';
import Link from 'next/link';

type FooterSectionProps = {
  readonly footerLinks: Data['footerLinks'];
  readonly officeInfo: Data['companyInfo'];
};

export default function FooterSection({ footerLinks, officeInfo }: FooterSectionProps) {
  return (
    <footer className="bg-secondary text-white pt-16 dark:bg-[#121212] dark:border-t dark:border-border">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              href="/"
              aria-label="go home"
              className="block size-fit text-xl font-bold"
            >
              {officeInfo.name}
            </Link>
            <p className=" mt-4">
              {officeInfo.description}
            </p>
            <div className="mt-6">
              <p className="font-medium">Office Hours</p>
              <p className="">{officeInfo.hours}</p>
            </div>
            <div className="mt-4">
              <p className="font-medium">Location</p>
              {officeInfo.address.map((line: string) => (
                <p className="" key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-3">
            {footerLinks.map(link => (
              <div key={link.id} className="space-y-4 text-sm">
                <span className="block font-medium">{link.group}</span>
                {link.items.map(item => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className=" hover:text-primary block duration-150"
                  >
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="border-border mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
          <span className=" order-last block text-center text-sm md:order-first">
            ©
            {new Date().getFullYear()}
            Girit Consulting, Inc. All rights reserved
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            <Link
              href="https://youtu.be/sK8AhZj7i5M"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className=" hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
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
  );
}
