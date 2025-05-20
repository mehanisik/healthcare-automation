'use client';

import { logOutFn } from '#/actions/auth/logout';
import { AuthContext } from '#/components/providers/auth-provider';
import { ThemeToggle } from '#/components/providers/theme-toggle';
import { Button } from '#/components/ui/button';
import { Logo } from '#/components/ui/logo';
import {
  NavigationMenu,
  NavigationMenuList,
} from '#/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '#/components/ui/sheet';
import { navLinks } from '#/constants/navigation';
import { useActiveSection } from '#/hooks/use-active-section';
import { LayoutDashboard, LogIn, LogOut, Menu } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

export default function Header() {
  const { user, isLoading } = use(AuthContext);
  const { activeSection, isScrolled, scrollToSection } = useActiveSection(navLinks);

  return (
    <nav
      className={`sticky top-0 z-50 mx-auto border mt-2 sm:mt-4 h-14 sm:h-16 max-w-5xl rounded-2xl sm:rounded-3xl transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background/80 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-full items-center justify-between px-3 sm:px-4 md:px-6">
        <Logo type="text" width={80} height={25} className="sm:w-[90px] sm:h-[30px]" />

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex items-center gap-2 lg:gap-3">
            {navLinks.map(link => (
              <Link
                key={link.id}
                href={link.href}
                className={`group relative flex items-center rounded-lg ${activeSection === link.id ? 'bg-primary/10 text-primary' : ''} px-3 lg:px-4 py-2 lg:py-2.5 text-sm lg:text-base transition-all duration-300 ease-in-out hover:bg-primary/5 hover:text-primary`}
                onClick={e => scrollToSection(e, link.href)}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                <span className="relative z-10 whitespace-nowrap">{link.label}</span>
              </Link>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {!isLoading && (
            user
              ? (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="transition-all duration-300 hover:bg-primary/5 hover:text-primary"
                      asChild
                    >
                      <Link href="/dashboard" title="Dashboard">
                        <LayoutDashboard className="size-4" aria-hidden="true" />
                      </Link>
                    </Button>
                    <form action={logOutFn}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="text-destructive transition-all duration-300 hover:bg-destructive/10 hover:text-destructive"
                        type="submit"
                        title="Logout"
                      >
                        <LogOut className="size-4" aria-hidden="true" />
                      </Button>
                    </form>
                  </>
                )
              : (
                  <Button
                    variant="outline"
                    size="icon"
                    className="transition-all duration-300"
                    asChild
                  >
                    <Link href="/auth" title="Sign In">
                      <LogIn className="size-4" aria-hidden="true" />
                    </Link>
                  </Button>
                )
          )}
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
                      className="group relative flex items-center rounded-lg px-4 py-2.5 text-base transition-all duration-300 ease-in-out hover:bg-primary/5 hover:text-primary sm:py-3 sm:text-lg"
                      onClick={e => scrollToSection(e, link.href)}
                      aria-current={activeSection === link.id ? 'page' : undefined}
                    >
                      <span className="relative z-10 whitespace-nowrap">{link.label}</span>
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
