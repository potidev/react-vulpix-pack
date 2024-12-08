"use client";

import React from "react";
import { FormItemContext } from "../FormItemContext/component";
import { cn } from "@/utils";

import styles from "./styles.module.scss";

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn.get(styles.formItem, className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

export { FormItem };