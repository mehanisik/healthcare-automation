'use client'

import { cn } from '@/lib/utils'

interface PlaceholderImageProps {
  width?: number
  height?: number
  text?: string
  className?: string
}

export function PlaceholderImage({ width = 400, height = 400, text = 'Image', className }: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-muted text-muted-foreground',
        className,
      )}
      style={{
        width,
        height,
      }}
    >
      <span className="text-sm font-medium">{text}</span>
    </div>
  )
}
