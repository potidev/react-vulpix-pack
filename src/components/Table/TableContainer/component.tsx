import { cn } from "@/lib";
import React from "react";

const TableContainer = React.forwardRef<
HTMLDivElement,
 React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-full overflow-auto",
      className
    )}
    {...props}
  />
))
TableContainer.displayName = "TableContainer"

export { TableContainer };