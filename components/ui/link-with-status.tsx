'use client';

import Link from 'next/link';
import { useLinkStatus } from 'next/link';
import { type ComponentProps } from 'react';
import { cn } from '#/lib/utils';

type LinkWithStatusProps = ComponentProps<typeof Link> & {
  children: React.ReactNode;
  showLoading?: boolean;
};

export function LinkWithStatus({ 
  children, 
  showLoading = true, 
  className,
  ...props 
}: LinkWithStatusProps) {
  const { pending } = useLinkStatus();

  return (
    <Link 
      className={cn(
        "relative inline-flex items-center gap-2",
        className
      )} 
      {...props}
    >
      {children}
      {showLoading && pending && (
        <div 
          role="status" 
          aria-label="Loading" 
          className="inline-block size-3 border-[1.5px] border-current border-r-transparent rounded-full animate-spin opacity-50"
        />
      )}
    </Link>
  );
} 