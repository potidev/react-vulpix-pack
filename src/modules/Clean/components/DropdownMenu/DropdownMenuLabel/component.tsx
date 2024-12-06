import React from "react";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

import { cn } from "@/utils/ClassNameUtils";

import styles from "./styles.module.scss";

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn.get(
      styles.dropdownLabel,
      inset && styles.inset,
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

export { DropdownMenuLabel };