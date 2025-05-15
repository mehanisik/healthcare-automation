import React from 'react';
import { cn } from '@/lib/utils';

type SectionContainerProps = {
  id?: string;
  ref?: React.RefObject<HTMLDivElement>;
  className?: string;
  titleChip?: string;
  mainTitle?: string;
  titleDescription?: string;
  children: React.ReactNode;
  secondaryClassName?: string;

};

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  ref,
  className,
  titleChip,
  mainTitle,
  titleDescription,
  children,
  secondaryClassName,
}) => {
  return (
    <section
      id={id}
      className={cn('px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:py-30 relative z-10', className)}
      ref={ref}
    >
      <div className={cn('mx-auto max-w-5xl', secondaryClassName)}>
        {(titleChip || mainTitle || titleDescription) && (
          <div className="mb-10 space-y-4 text-center">
            {titleChip && (
              <div className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
                <span className="text-primary dark:text-primary-foreground text-sm font-medium">
                  {titleChip}
                </span>
              </div>
            )}
            {mainTitle && (
              <h2 className="text-foreground text-3xl font-bold md:text-4xl">
                {mainTitle}
              </h2>
            )}
            {titleDescription && (
              <p className="text-muted-foreground mx-auto max-w-3xl lg:text-lg">
                {titleDescription}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
