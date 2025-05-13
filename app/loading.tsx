import * as React from 'react';

export default function Loading(): React.ReactElement {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative size-16">
          <div className="border-primary/30 absolute inset-0 rounded-full border-4" />
          <div className="border-t-primary absolute inset-0 animate-spin rounded-full border-4" />
        </div>
        <p className="text-muted-foreground animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
