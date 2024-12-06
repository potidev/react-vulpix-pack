import React, { forwardRef } from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { MdChevronRight } from "react-icons/md";
import { cn } from "@/utils";

import styles from "./styles.module.scss";

const SelectScrollDownButton = forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn.get(styles.selectScrollDownButton, className)}
    {...props}
  >
    <MdChevronRight className={styles.customIcon} />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

export { SelectScrollDownButton };
