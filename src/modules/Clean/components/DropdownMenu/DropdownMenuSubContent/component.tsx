import React from "react";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn.get(
      styles.subContent, 
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

export { DropdownMenuSubContent };