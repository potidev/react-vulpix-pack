"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cn } from "@/utils"
import styles from "./styles.module.scss";
import { CheckboxProps } from "./types"
import { Label } from "@/modules/Common"
import { CheckboxContainer } from "../CheckboxContainer"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, color = "text", label, labelClassName, containerClassName, ...props }, ref) => {
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
    <CheckboxContainer className={containerClassName}>
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
      {label && <Label size="small" className={cn.get(labelClassName)}>{label}</Label>}
    </CheckboxContainer>
  )
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
