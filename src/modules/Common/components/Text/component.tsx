import React from "react";
import { TextProps } from "./types";
import { Slot } from "@radix-ui/react-slot";
import styles from "./styles.module.scss";
import { cn } from "@/utils";
import { useFontSizeClass, useTextColorClass } from "@/hooks/ClassName";

const Text = React.forwardRef<
  HTMLHeadingElement,
  TextProps
>(({
  className,
  size,
  asChild = false,
  color = "default",
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "h1"
  const fontSizeClass = useFontSizeClass(size);
  const textColorClass = useTextColorClass(color);

  return (
    <Comp
      className={cn.get(styles.text, fontSizeClass, textColorClass, className)}
      ref={ref}
      {...props}
    />
  )
});

Text.displayName = "Text"

export { Text };