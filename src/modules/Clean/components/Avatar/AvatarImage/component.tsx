"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/utils";

import styles from "./styles.module.scss";

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn.get(styles.avatarImage, className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export { AvatarImage }

