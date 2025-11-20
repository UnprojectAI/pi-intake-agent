import * as React from "react";
import { cn } from "@/lib/utils";

interface MetadataItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
}

const MetadataItem = React.forwardRef<HTMLDivElement, MetadataItemProps>(
  ({ className, label, value, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("", className)} {...props}>
        <p className="text-foreground/50 text-xs mb-1">{label}</p>
        <div className="text-foreground text-xs">{value}</div>
      </div>
    );
  }
);
MetadataItem.displayName = "MetadataItem";

export { MetadataItem };

