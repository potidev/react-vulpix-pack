import React from "react";

import { cn } from "@/lib/utils"

export type SeparatorOrientation = "horizontal" | "vertical";

export type SeparatorProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: SeparatorOrientation;
};

const Separator = ({ className, orientation = "horizontal" }: SeparatorProps) => {
  return (
    <div data-orientation={orientation} role="none" className={cn("shrink-0 bg-border", orientation === "vertical" ? "h-full w-px" : 'h-px w-full', className)} />
  );
};

export { Separator };