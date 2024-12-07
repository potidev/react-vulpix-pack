"use client";

import React from "react"

import { cn } from "@/utils"

import { useFormField } from "../hooks"

import styles from "./styels.module.scss";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn.get(styles.formDescription, className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

export { FormDescription };

