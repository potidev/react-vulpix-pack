import React from "react";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';
import { DropdownMenuContentProps } from "./types";
import { useShapeBackgroundColorClass } from "@/hooks/ClassName";

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentProps
>(({ className, sideOffset = 4, backgroundColor = "default", ...props }, ref) => {
  const backgroundColorClass = useShapeBackgroundColorClass(backgroundColor);

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn.get(
          styles.dropdownContent,
          backgroundColorClass,
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )}
)
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

export { DropdownMenuContent };