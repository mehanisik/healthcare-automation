import type { NavItem } from '../types';

export const mainNavItems: readonly NavItem[] = [
  {
    label: 'Features',
    href: '#features',
  },
  {
    label: 'Solutions',
    href: '#solutions',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
] as const;

export const footerNavItems: readonly NavItem[] = [
  {
    label: 'Privacy Policy',
    href: '/privacy',
  },
  {
    label: 'Terms of Service',
    href: '/terms',
  },
  {
    label: 'Documentation',
    href: '/docs',
  },
] as const;

export const navLinks = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'solutions', label: 'Solutions', href: '#solutions' },
  { id: 'about-us', label: 'About Us', href: '#about-us' },
  { id: 'clients', label: 'Clients', href: '#clients' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;
