'use client';

import { ThemeToggle } from '#/components/providers/theme-toggle';
import { Button } from '#/components/ui/button';
import { Logo } from '#/components/ui/logo';
import {
  NavigationMenu,
  NavigationMenuList,
} from '#/components/ui/navigation-menu';
import { NavLinkComponent } from '#/components/ui/navlink';
import { Sheet, SheetContent, SheetTrigger } from '#/components/ui/sheet';
import { navLinks } from '#/constants/navigation';
import { useActiveSection } from '#/hooks/use-active-section';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Header(): React.ReactElement {
  const { activeSection, isScrolled, scrollToSection } = useActiveSection(navLinks);

  return (
    <nav
      className={`sticky top-0 z-50 mx-auto border  mt-4 h-16 max-w-5xl rounded-3xl  transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background/80 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-full items-center justify-between px-4 sm:px-6">
        <Logo type="text" width={90} height={30} />

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex items-center gap-3 ">
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
                  className="transition-all duration-300 hover:bg-primary/5 hover:text-primary"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <div className="mb-6 flex items-center border-b border-border pb-4">
                  <Logo type="text" width={120} height={40} />
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
