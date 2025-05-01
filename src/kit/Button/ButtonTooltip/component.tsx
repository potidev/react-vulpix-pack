"use client";

import React from "react";

import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components";
import { ButtonTooltipProps } from "./types";

export const ButtonTooltip = ({ className, tooltipContentProps, tooltip, tooltipProps, ...rest }: ButtonTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip {...tooltipProps}>
        <TooltipTrigger asChild>
          <Button {...rest} />
        </TooltipTrigger>
        <TooltipContent {...tooltipContentProps}>
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    
  );
};