import React from "react";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

import { cn } from "@/utils/ClassNameUtils";

import styles from "./styles.module.scss";
import { DropdownMenuLabelProps } from "./types";
import { useTextColorClass } from "@/hooks/ClassName";

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  DropdownMenuLabelProps
>(({ className, inset, color = "default", ...props }, ref) => {
  const textColorClass = useTextColorClass(color);

  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn.get(
        styles.dropdownLabel,
        textColorClass,
        inset && styles.inset,
        className
      )}
      {...props}
    />
  )
});

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

export { DropdownMenuLabel };