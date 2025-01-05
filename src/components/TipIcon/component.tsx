"use client";

import React from "react";

import { TipIconProps } from "./types";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../Tooltip";
import { Button } from "../Button";
import { Ban, CircleAlert, CircleEllipsis, CircleHelp, Copy } from "lucide-react";
import { cn } from "../../lib";
import { LabelIconButton } from "../LabelIconButton/component";



export const TipIcon = ({ className, message, type = "question", color = "default" }: TipIconProps) => {
  const renderIcon = () => {
    switch(type) {
      case "alert":
        return <CircleAlert />
      case "ban":
        return <Ban />
      case "ellipsis":
        return <CircleEllipsis />
      case "copy":
        return <Copy />
      case "question":
      default:
        return <CircleHelp />;
    }
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <LabelIconButton color={color} className={cn(className)}>
            {renderIcon()}
          </LabelIconButton>
        </TooltipTrigger>
        <TooltipContent>
          <p>{message}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};