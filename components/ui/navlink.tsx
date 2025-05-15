import { motion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";

type NavLink = {
  id: string;
  label: string;
  href: string;
};

type NavLinkProps = {
  link: NavLink;
  activeSection: string;
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export const NavLinkComponent = memo(({ link, activeSection, scrollToSection }: NavLinkProps) => (
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