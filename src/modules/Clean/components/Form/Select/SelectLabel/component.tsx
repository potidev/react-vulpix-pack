import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select"

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';


const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn.get(styles.selectLabel, className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

export { SelectLabel }; 