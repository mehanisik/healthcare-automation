"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

/**
 * A wrapper component for Radix UI's collapsible root that adds a `data-slot="collapsible"` attribute.
 *
 * Forwards all props to {@link CollapsiblePrimitive.Root}.
 */
function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

/**
 * A wrapper component for the Radix UI CollapsibleTrigger that adds a unique data attribute for identification or styling.
 *
 * Forwards all props to the underlying Radix CollapsibleTrigger component.
 */
function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

/**
 * A wrapper for Radix UI's CollapsibleContent that adds a data-slot attribute for identification or styling.
 *
 * Forwards all props to the underlying CollapsibleContent component.
 */
function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
