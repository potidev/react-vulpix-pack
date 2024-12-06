import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select"

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';
import { MdOutlineCheck } from "react-icons/md";

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <SelectPrimitive.Item
      ref={ref}
      className={cn.get(styles.selectItemDefault, className)}
      {...props}
    >
      <span className={styles.span}>
        <SelectPrimitive.ItemIndicator>
          <MdOutlineCheck className={styles.icon} />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName

export { SelectItem };