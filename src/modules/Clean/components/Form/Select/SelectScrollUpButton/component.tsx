import React, { forwardRef } from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { MdChevronRight } from "react-icons/md";
import { cn } from "@/utils";

import styles from "./styles.module.scss";

const SelectScrollUpButton = forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn.get(styles.selectScrollUpButton, className)}
    {...props}
  >
    <MdChevronRight className={styles.customIcon} />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

export { SelectScrollUpButton };
