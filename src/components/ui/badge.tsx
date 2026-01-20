import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils/cn"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-daisy-forest-700 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-daisy-forest-700 text-white hover:bg-daisy-forest-800",
        secondary:
          "border-transparent bg-daisy-bloom-500 text-white hover:bg-daisy-bloom-600",
        destructive:
          "border-transparent bg-red-500 text-white hover:bg-red-600",
        outline: "text-gray-950 border-gray-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
