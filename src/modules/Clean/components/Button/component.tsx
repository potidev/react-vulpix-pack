import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import { ButtonProps } from "./types";
import { cva } from "class-variance-authority";
import styles from "./styles.module.scss";
import { Slot } from "@radix-ui/react-slot";
import { useBackgroundColorClass, useBorderColorClass } from "@/hooks/ClassName";

const buttonVariants = cva(
  styles.defaultButtonStyles,
  {
    variants: {
      variant: {
        solid:
          styles.solidVariant,
        outline:
          styles.outlineVariant,
      },
      size: {
        regular: styles.sizeRegular,
        small: styles.sizeSmall,
        large: styles.sizeLarge,
        icon: styles.sizeIcon,
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
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button"

  
  const getVariantPropsClass = () => {
    switch(variant) {
      case "outline":
        return useBorderColorClass(color === "text" ? "separator" : color, { textColor: true, softBackgroundColorHover: true });
      case "solid":
      default:
        return useBackgroundColorClass(color, { hoverBackground: true, recommendedTextColor: true, hoverTransition: true });
    }
  }
  
  return (
    <Comp
      className={cn.get(buttonVariants({ variant, size, className }), getVariantPropsClass(), className)}
      ref={ref}
      {...props}
    />
  )
});

Button.displayName = "Button"

export { Button, buttonVariants }