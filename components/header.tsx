'use client';

import { ThemeToggle } from 'components/theme-toggle';
import { Button } from 'components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
} from 'components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from 'components/ui/sheet';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import React, { memo, useCallback, useEffect, useState } from 'react';

type NavLink = {
  id: string;
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'solutions', label: 'Solutions', href: '#solutions' },
  { id: 'about-us', label: 'About Us', href: '#about-us' },
  { id: 'clients', label: 'Clients', href: '#clients' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

type NavLinkProps = {
  link: NavLink;
  activeSection: string;
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

const NavLinkComponent = memo(({ link, activeSection, scrollToSection }: NavLinkProps) => (
  <Link
    href={link.href}
    onClick={e => scrollToSection(e, link.href)}
    className={`relative whitespace-nowrap rounded-xl px-3 py-2 text-sm transition-all duration-300 ease-in-out sm:px-4 sm:text-base ${
      activeSection === link.id
        ? 'text-primary font-medium'
        : 'hover:bg-primary/5 hover:text-primary hover:font-medium'
    }`}
    aria-current={activeSection === link.id ? 'page' : undefined}
  >
    <span className="relative z-10">{link.label}</span>
    {activeSection === link.id && (
      <motion.div
        layoutId="activeSection"
        className="absolute inset-0 rounded-xl bg-primary/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        aria-hidden="true"
      />
    )}
  </Link>
));

NavLinkComponent.displayName = 'NavLink';

function Header(): React.ReactElement {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrolling) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: '-20% 0px -20% 0px',
      },
    );

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isScrolling]);

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        setIsScrolling(true);
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        setActiveSection(href.replace('#', ''));

        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    },
    [],
  );

  return (
    <nav
      className={`sticky top-0 z-50 mx-auto mt-4 h-16 max-w-7xl rounded-full border border-border transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background/80 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-full items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-foreground text-lg font-bold transition-colors duration-300 hover:text-primary sm:text-xl"
          aria-label="GIRIT CONSULTING - Home"
        >
          GIRIT CONSULTING
        </Link>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex items-center gap-3 xl:gap-6">
            {navLinks.map(link => (
              <NavLinkComponent
                key={link.id}
                link={link}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
              />
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeToggle />
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full transition-all duration-300 hover:bg-primary/5 hover:text-primary"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <div className="mb-6 flex items-center border-b border-border pb-4">
                  <span className="text-lg font-bold text-foreground sm:text-xl">GIRIT CONSULTING</span>
                </div>
                <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
                  {navLinks.map(link => (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={e => scrollToSection(e, link.href)}
                      className={`group relative flex items-center rounded-lg px-4 py-2.5 text-base transition-all duration-300 ease-in-out sm:py-3 sm:text-lg ${
                        activeSection === link.id
                          ? 'text-primary font-medium'
                          : 'hover:bg-primary/5 hover:text-primary'
                      }`}
                      aria-current={activeSection === link.id ? 'page' : undefined}
                    >
                      <span className="relative z-10 whitespace-nowrap">{link.label}</span>
                      {activeSection === link.id && (
                        <motion.div
                          layoutId="mobileActiveSection"
                          className="absolute inset-0 rounded-lg bg-primary/50"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
