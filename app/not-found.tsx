import { FileQuestion } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { Button } from '@/components/ui/button';

export default function NotFound(): React.ReactElement {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <FileQuestion className="text-muted-foreground size-12" aria-hidden="true" />
          <h1 className="text-4xl font-bold">404</h1>
          <h2 className="text-foreground text-xl font-semibold">Page Not Found</h2>
        </div>

        <p className="text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. The page might have been moved,
          deleted, or never existed.
        </p>

        <div className="flex gap-4">
          <Button asChild variant="default" className="rounded-full">
            <Link href="/">Return Home</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
