import { cn } from "#/lib/utils"

/**
 * Renders a skeleton loading placeholder with customizable styling.
 *
 * Combines default skeleton styles with any additional classes provided via {@link className}, and passes all other props to the underlying {@link div} element.
 *
 * @returns A `div` element styled as a skeleton placeholder.
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
