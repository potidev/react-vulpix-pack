"use client";

import React from "react";

import { TipIconProps } from "./types";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../Tooltip";
import { Button } from "../Button";
import { Ban, CircleAlert, CircleEllipsis, CircleHelp } from "lucide-react";
import { cn } from "../../lib";



export const TipIcon = ({ className, message, type = "question", color = "default" }: TipIconProps) => {
  const renderIcon = () => {
    switch(type) {
      case "alert":
        return <CircleAlert />
      case "ban":
        return <Ban />
      case "ellipsis":
        return <CircleEllipsis />
      case "question":
      default:
        return <CircleHelp />;
    }
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="iconSm" type="button" className={cn(color === "default" ? "[&>svg]:stroke-default" : "[&>svg]:stroke-muted-foreground", className)}>          
            {renderIcon()}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{message}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};