import React from "react";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

import { cn } from "@/utils/ClassNameUtils";

import styles from "./styles.module.scss";

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn.get(styles.dropdownSeparator, className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

export { DropdownMenuSeparator };