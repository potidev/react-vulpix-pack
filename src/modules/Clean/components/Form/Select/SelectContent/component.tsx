import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select"

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';
import { SelectScrollUpButton } from "../SelectScrollUpButton";
import { SelectScrollDownButton } from "../SelectScrollDownButton";

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn.get(styles.selectContentDefault, position === "popper" && styles.popperContent, className)}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn.get(styles.defaultViewPort, position === "popper" && styles.popperViewPort)}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

export { SelectContent }; 