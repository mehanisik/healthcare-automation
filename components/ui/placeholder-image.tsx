'use client';

import { cn } from '@/lib/utils';

type PlaceholderImageProps = {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
};

export function PlaceholderImage({ width = 400, height = 400, text = 'Image', className }: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        'bg-muted text-muted-foreground flex items-center justify-center',
        className,
      )}
      style={{
        width,
        height,
      }}
    >
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
