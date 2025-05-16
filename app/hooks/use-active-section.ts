import { useCallback, useEffect, useState } from 'react';

type NavLink = {
  readonly id: string;
  readonly href: string;
};

type ActiveSectionReturn = {
  readonly activeSection: string;
  readonly isScrolled: boolean;
  readonly scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export function useActiveSection(navLinks: readonly NavLink[]): ActiveSectionReturn {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
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
  }, [isScrolling, navLinks]);

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

  return { activeSection, isScrolled, scrollToSection };
}
