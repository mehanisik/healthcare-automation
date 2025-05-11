'use client';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Heart, Menu } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'clients', label: 'Clients', href: '#clients' },
    { id: 'news', label: 'News', href: '#news' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="max-w-5xl sticky top-0 z-50 mx-auto h-14 mt-4 bg-background border dark:border-slate-700/70 rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Link href="/" className="text-xl font-bold">
          GIRIT CONSULTING
        </Link>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="gap-6">
            {navLinks.map(link => (
              <NavigationMenuItem key={link.id}>
                <NavigationMenuLink asChild>
                  <a href={link.href} onClick={e => scrollToSection(e, link.href)}>
                    {link.label}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <Button asChild className="rounded-full">
            <a href="#contact" onClick={e => scrollToSection(e, '#contact')}>Book Free Consultation</a>
          </Button>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex items-center mb-6">
                  <Heart className="w-8 h-8 mr-2" />
                  <span className="text-xl font-bold">GIRIT CONSULTING</span>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map(link => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={e => scrollToSection(e, link.href)}
                      className="py-2 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
