"use client";

import React from "react";
import {
  Ban,
  CircleAlert,
  CircleEllipsis,
  CircleHelp,
  Copy,
} from "lucide-react";

import { TipIconProps } from "./types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../Tooltip";
import { cn } from "../../lib";
import { LabelIconButton } from "../LabelIconButton/component";

export const TipIcon = ({
  className,
  contentClassName,
  stringContentClassName,
  message,
  type = "question",
  color = "default",
  toolTipProps,
}: TipIconProps) => {
  const renderIcon = () => {
    switch (type) {
      case "alert":
        return <CircleAlert />;
      case "ban":
        return <Ban />;
      case "ellipsis":
        return <CircleEllipsis />;
      case "copy":
        return <Copy />;
      case "question":
      default:
        return <CircleHelp />;
    }
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100} {...toolTipProps}>
        <TooltipTrigger asChild>
          <LabelIconButton color={color} className={cn(className)}>
            {renderIcon()}
          </LabelIconButton>
        </TooltipTrigger>
        <TooltipContent className={contentClassName}>
          {typeof message === "string" ? <p className={stringContentClassName}>{message}</p> : message}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
