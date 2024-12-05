import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select"

import styles from "./styles.module.scss";
import { cn } from "@/utils/ClassNameUtils";
import { MdChevronRight } from "react-icons/md";


const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn.get(styles.selectTrigger, className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <MdChevronRight className={styles.selectTriggerChevronDown} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

export { SelectTrigger };