'use client';

import { Button } from '#/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import * as React from 'react';

type ErrorProps = {
  readonly error: Error & { readonly digest?: string };
  readonly reset: () => void;
};

export default function Error({ error, reset }: ErrorProps): React.ReactElement {
  const router = useRouter();
  return (
    <div className="flex min-h-[400px] items-center justify-center px-4">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <div className="text-destructive flex items-center gap-2">
          <AlertCircle className="size-6" aria-hidden="true" />
          <h2 className="text-lg font-semibold">Something went wrong!</h2>
        </div>

        <p className="text-muted-foreground">
          We apologize for the inconvenience. Our team has been notified and is working to fix the
          issue.
        </p>
        <p className="text-muted-foreground text-sm">
          {error.message}
        </p>
        <div className="flex gap-4">
          <Button onClick={() => reset()} variant="default" className="rounded-full">
            Try again
          </Button>
          <Button
            onClick={() => router.push('/')}
            variant="outline"
            className="rounded-full"
          >
            Return home
          </Button>
        </div>
      </div>
    </div>
  );
}
