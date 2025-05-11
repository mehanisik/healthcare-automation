import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  background?: 'default' | 'muted' | 'gradient';
  id?: string;
};

export default function SectionContainer({ children, className, background = 'default', id }: SectionContainerProps) {
  const backgroundStyles = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    gradient: 'bg-gradient-to-b from-background to-muted/30',
  };

  return (
    <section id={id} className={cn('w-full py-16 md:py-24', backgroundStyles[background], className)}>
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
