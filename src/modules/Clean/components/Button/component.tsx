import React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { useBackgroundColorClass, useBorderColorClass, useSoftBackgroundColorHoverClass } from "@/hooks/ClassName";
import { cn } from "@/utils/ClassNameUtils";

import { ButtonProps } from "./types";
import styles from "./styles.module.scss";

const buttonVariants = cva(
  styles.defaultButtonStyles,
  {
    variants: {
      variant: {
        solid: styles.solidVariant,
        outline: styles.outlineVariant,
        ghost: styles.gostVariant,
      },
      size: {
        regular: styles.sizeRegular,
        small: styles.sizeSmall,
        large: styles.sizeLarge,
        icon: styles.sizeIcon,
        iconMedium: styles.sizeIconMedium,
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "regular",
    },
  },
);

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({
  className,
  variant,
  size,
  asChild = false,
  color = "text",
  fullWidth = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button"

  const fitContentClass = fullWidth === true || size === "icon" || size === "iconMedium" ? undefined : styles.fitContent;
  
  const getVariantPropsClass = () => {
    switch(variant) {
      case "outline":
        return useBorderColorClass(color === "text" ? "separator" : color, { textColor: true, softBackgroundColorHover: true });
      case "ghost":
        return useSoftBackgroundColorHoverClass(color, { hoverTransition: true })
      case "solid":
      default:
        return useBackgroundColorClass(color, { hoverBackground: true, recommendedTextColor: true, hoverTransition: true });
    }
  }
  
  return (
    <Comp
      className={cn.get(buttonVariants({ variant, size, className }), getVariantPropsClass(), fitContentClass, className)}
      ref={ref}
      {...props}
    />
  )
});

Button.displayName = "Button"

export { Button, buttonVariants }