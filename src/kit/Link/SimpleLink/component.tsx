import React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const simpleLinkVariants = cva(
  "flex flex-row gap-1 items-center transition-colors duration-300",
  {
    variants: {
      variant: {
        default:
          "hover:text-default",
        primary:
          "hover:text-primary",
        destructive:
          "hover:text-destructive",
        secondary:
          "hover:text-secondary",
        success:
          "hover:text-success",
        warning:
          "hover:text-warning",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type SimpleLInkVariant = VariantProps<typeof simpleLinkVariants>["variant"];

export interface SimpleLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof simpleLinkVariants> {
  asChild?: boolean;
}

const SimpleLink = React.forwardRef<HTMLAnchorElement, SimpleLinkProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a"
    return (
      <Comp
        className={cn(simpleLinkVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
);

SimpleLink.displayName = "SimpleLink"