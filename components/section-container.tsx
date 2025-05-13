import React from 'react';
import { cn } from '@/lib/utils';

type SectionContainerProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  className,
  children,
}) => {
  return (
    <section
      id={id}
      className={cn('px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:py-32', className)}
    >
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
