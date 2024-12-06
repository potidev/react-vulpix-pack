import React from "react";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

import { cn } from "@/utils/ClassNameUtils";

import styles from "./styles.module.scss";
import itemStyles from "../item.module.scss";
import { Check } from "lucide-react";

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn.get(
      itemStyles.dropdownItemWithIcon,
      className
    )}
    checked={checked}
    {...props}
  >
    <span className={styles.span}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className={styles.check} />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

export { DropdownMenuCheckboxItem };