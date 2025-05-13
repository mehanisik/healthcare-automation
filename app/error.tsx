'use client';

import { AlertCircle } from 'lucide-react';
import * as React from 'react';
import { Button } from '@/components/ui/button';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps): React.ReactElement {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

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

        <div className="flex gap-4">
          <Button onClick={() => reset()} variant="default" className="rounded-full">
            Try again
          </Button>
          <Button
            onClick={() => (window.location.href = '/')}
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
