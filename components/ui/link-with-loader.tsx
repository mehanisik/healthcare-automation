import { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx/lite';
import Link from 'next/link';
import { LinkWithStatus } from './link-with-status';

export default function LinkWithLoader({
  loader,
  children,
  debugLoading,
  ...props
}: ComponentProps<typeof Link> & {
  loader: ReactNode
  debugLoading?: boolean
}) {
  return (
    <LinkWithStatus {...props}>
      {({ isLoading }) => <>
          {children}
        {(isLoading || debugLoading) && <span className={clsx(
          'absolute inset-0',
          'flex items-center justify-center',
          'w-full h-full',
        )}>
          {loader}
        </span>}
      </>}
    </LinkWithStatus>
  );
}