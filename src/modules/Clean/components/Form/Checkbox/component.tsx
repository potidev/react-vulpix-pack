"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cn } from "@/utils"
import styles from "./styles.module.scss";
import { CheckboxProps } from "./types"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, color = "text", ...props }, ref) => {
  const getColorClass = () => {
    switch(color) {
      case "primary":
        return styles.primary;
      case "text":
      default:
        return styles.text;
    }
  }

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn.get(
        styles.checkbox,
        getColorClass(),
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn.get(styles.indicatorContainer)}
      >
        <Check size={16} className={styles.checkIcon} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
