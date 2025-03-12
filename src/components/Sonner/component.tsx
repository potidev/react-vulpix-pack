"use client";

import React from "react";
import { useTheme } from "next-themes"
import { Toaster, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Toaster>

const Sonner = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Toaster
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

const sonner = toast;

export { Sonner, sonner }
