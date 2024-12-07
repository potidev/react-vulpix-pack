"use client";

import React from "react";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

import { Circle } from "lucide-react";
import { cn } from "@/utils/ClassNameUtils";

import styles from "./styles.module.scss";
import itemStyles from "../item.module.scss";

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn.get(
      itemStyles.dropdownItemWithIcon,
      className
    )}
    {...props}
  >
    <span className={styles.span}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className={styles.circle} />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

export { DropdownMenuRadioItem };