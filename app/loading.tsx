import * as React from 'react';

export default function Loading(): React.ReactElement {
  return (
    <div className="fixed inset-0 flex min-h-screen items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6">
        <div className="relative size-20">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
          <div className="absolute inset-0 animate-[spin_1.5s_linear_infinite] rounded-full border-4 border-t-primary border-r-primary/30 border-b-primary/10 border-l-primary/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-3 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-medium text-foreground animate-pulse">Loading</p>
          <p className="text-sm text-muted-foreground">Please wait while we prepare your content</p>
        </div>
      </div>
    </div>
  );
}
