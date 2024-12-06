import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select"

import styles from "./styles.module.scss";
import { cn } from "@/utils/ClassNameUtils";
import { MdChevronRight } from "react-icons/md";
import { SelectTriggerProps } from "./types";
import { Label, Paragraph } from "@/modules/Common";
import { useBorderColorFocusClass } from "@/hooks/ClassName";


const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ 
  className, 
  children, 
  label, 
  labelClassName, 
  color = "text", 
  error = false,
  errorMessage,
  helperMessage,
  ...props 
}, ref) => {
  const inputBorderColorFocusClass = useBorderColorFocusClass(color); 

  return (
    <div className={styles.container}>
      {label && <Label color={error === true || errorMessage ? "danger" : "default"} size="small" className={cn.get(labelClassName)}>{label}</Label>}
      <SelectPrimitive.Trigger
        ref={ref}
        className={cn.get(styles.selectTrigger, inputBorderColorFocusClass, className)}
        {...props}
      >
        {children}
        <SelectPrimitive.Icon asChild>
          <MdChevronRight className={styles.selectTriggerChevronDown} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      {errorMessage || helperMessage ? <Paragraph size="tiny" color={error || errorMessage ? "danger" : "soft"}>{errorMessage || helperMessage}</Paragraph> : null}
    </div>
  );
});

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

export { SelectTrigger };