import React from "react"

import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/utils"

import { useFormField } from "../hooks"
import { Label } from "../../Label"

import styles from "./styles.module.scss";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn.get(error && styles.danger, className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel";

export { FormLabel }