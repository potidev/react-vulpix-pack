import React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/utils";

import { TextProps } from "./types";

const Text = React.forwardRef<
  HTMLHeadingElement,
  TextProps
>(({
  className,
  asChild = false,
  color = "default",
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "p"

  return (
    <Comp
      className={cn.get(`font-normal ${color === "soft" ? "text-muted-foreground" : "text-default"}`, className)}
      ref={ref}
      {...props}
    />
  )
});

Text.displayName = "Text"

export { Text };