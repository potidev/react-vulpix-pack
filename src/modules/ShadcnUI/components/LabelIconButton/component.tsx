import React from "react";
import { LabelIconButtonProps } from "./types";
import { cn } from "../../lib";
import { Button } from "../Button";

export const LabelIconButton = React.forwardRef<HTMLButtonElement, LabelIconButtonProps>(
  ({ className, color = "soft", children, ...props }, ref) => {
  return (
    <Button {...props} variant="ghost" size="iconSm" type="button" className={cn(color === "default" ? "[&>svg]:stroke-default" : "[&>svg]:stroke-muted-foreground", className)} ref={ref}>
      {children}
    </Button>
  );
});