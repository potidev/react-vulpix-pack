"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/utils";

import styles from "./styles.module.scss";
import { useShapeBackgroundColorClass } from "@/hooks/ClassName";
import { AvatarFallbackProps } from "./types";


const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, color = "soft", ...props }, ref) => {
  const backgroundColorClass = useShapeBackgroundColorClass(color);

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn.get(
        styles.avatarFallback,
        backgroundColorClass,
        className
      )}
      {...props}
    />
  )
})
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { AvatarFallback };