import React, { ReactNode } from "react";

import { cn } from "../../lib";
import { cva, VariantProps } from "class-variance-authority";


const tipLabelVariants = cva(
  "flex items-center gap-1",
  {
    variants: {
      variant: {
        default: "flex-start",
        end: "justify-between",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export type TipLabelProps = {
  className?: string;
  children?: ReactNode;
} & VariantProps<typeof tipLabelVariants>;


export const TipLabel = ({ className, children, variant }: TipLabelProps) => {
  return (
    <div className={cn(tipLabelVariants({ variant, className }), className)}>
      {children}
    </div>
  );
};