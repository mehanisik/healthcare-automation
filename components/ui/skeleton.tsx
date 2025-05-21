import { cn } from "../../lib/utils"

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-shimmer bg-[length:200%_100%] bg-gradient-to-r",
        "from-gray-200 via-gray-300 to-gray-200",
        "dark:from-gray-800 dark:via-gray-700 dark:to-gray-800",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
