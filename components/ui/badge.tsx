import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-foreground/10 text-foreground hover:bg-foreground/20",
        secondary:
          "border-transparent bg-foreground/5 text-foreground/80 hover:bg-foreground/10",
        success:
          "border-transparent bg-green-500/10 text-green-600 dark:text-green-400",
        warning:
          "border-transparent bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
        destructive:
          "border-transparent bg-red-500/10 text-red-600 dark:text-red-400",
        outline: "text-foreground border-foreground/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

