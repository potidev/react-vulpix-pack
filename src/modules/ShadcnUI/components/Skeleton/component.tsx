import React from "react";

import { cn } from "@/modules/ShadcnUI/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-default/10", className)}
      {...props}
    />
  )
}

export { Skeleton }
