"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "#/lib/utils"

/**
 * Renders a styled separator line with configurable orientation and decoration.
 *
 * @param orientation - The direction of the separator, either "horizontal" or "vertical". Defaults to "horizontal".
 * @param decorative - Indicates if the separator is decorative and should be hidden from assistive technologies. Defaults to true.
 *
 * @returns A Radix UI separator component with applied styles and orientation.
 */
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
