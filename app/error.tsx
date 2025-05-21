'use client';

import { AlertTriangle, Home, RefreshCcw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

type ErrorProps = {
  readonly error: Error & { readonly digest?: string };
  readonly reset: () => void;
};

export default function ErrorComponent({ error, reset }: ErrorProps): React.ReactElement {
  const router = useRouter();
  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="size-10 text-destructive" aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl font-bold text-destructive">Oops! Something went wrong.</CardTitle>
          <CardDescription className="mt-2 text-base text-muted-foreground">
            We're sorry, but an unexpected error occurred. Our team has been notified.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error.message && (
            <div className="rounded-md border border-destructive/20 bg-destructive/5 p-3 text-sm">
              <p className="font-medium text-destructive">Error Details:</p>
              <p className="mt-1 text-destructive/80 break-words">{error.message}</p>
              {error.digest && (
                <p className="mt-1 text-xs text-destructive/70">
                  Digest:
                  {error.digest}
                </p>
              )}
            </div>
          )}
          <p className="text-sm text-muted-foreground">
            You can try to refresh the page or go back to the homepage.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button onClick={() => reset()} variant="default" className="w-full sm:w-auto">
            <RefreshCcw className="mr-2" />
            Try again
          </Button>
          <Button
            onClick={() => router.push('/')}
            variant="outline"
            className="w-full sm:w-auto"
          >
            <Home className="mr-2" />
            Go to Homepage
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
