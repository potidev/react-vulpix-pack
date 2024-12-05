import React from "react";

import * as SelectPrimitive from "@radix-ui/react-select"

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn.get("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export { SelectSeparator };