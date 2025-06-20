import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-default text-default-foreground shadow-sm hover:bg-default/90",
        primary:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        ghostText: "hover:text-accent-foreground",
        success:
          "bg-success text-success-foreground shadow-xs hover:bg-success/90",
        warning:
          "bg-warning text-warning-foreground shadow-xs hover:bg-warning/90",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        outlinePrimary:
          "border border-primary bg-background shadow-xs hover:bg-primary/5 hover:text-primary text-primary",
        outlineSecondary:
          "border border-secondary bg-background shadow-xs hover:bg-secondary/5 hover:text-secondary text-secondary",
        outlineWarning:
          "border border-warning bg-background shadow-xs hover:bg-warning/5 hover:text-warning text-warning",
        outlineSuccess:
          "border border-success bg-background shadow-xs hover:bg-success/5 hover:text-success text-success",
        outlineDestructive:
          "border border-destructive bg-background shadow-xs hover:bg-destructive/5 hover:text-destructive text-destructive",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        iconSm: "h-4 w-4",
        iconMd: "h-9 w-9 [&_svg]:w-5 [&_svg]:w-5",
        iconOnMobile: "min-h-9 min-w-9 md:min-h-none md:min-w-none md:h-9 md:px-4 md:py-2",
        iconOnDesktop: "w-9 h-9 px-4 py-2 md:min-h-9 md:min-w-9 md:py-none md:px-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, fullWidth, ...props }, ref) => {
    let fitContentClass = fullWidth === true ? "w-full" : "";
    fitContentClass = size === "icon" || size === "iconSm" || size === "iconMd" || size === "iconOnDesktop" ? "" : fitContentClass;
  
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), fitContentClass)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
