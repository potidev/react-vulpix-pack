import React from "react";


import { CheckboxContainerProps } from "./types";
import { cn } from "../../lib";

export const CheckboxContainer = ({ className, children }: CheckboxContainerProps) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {children}
    </div>
  );
};