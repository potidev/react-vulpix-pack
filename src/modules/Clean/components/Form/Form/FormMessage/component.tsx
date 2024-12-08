"use client";

import React from "react"

import { useFormField } from "../hooks"

import { cn } from "@/utils"

import styles from "./styles.module.scss";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn.get(styles.formMessage, className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage";

export { FormMessage };