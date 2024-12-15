"use client";

import React, { ReactNode, useMemo, useState } from "react";

import { cn } from "@/modules/ShadcnUI/lib";
import { SimpleInformationProps } from "./types";
import { LabelIconButton, Popover, PopoverContent, PopoverTrigger, TipIcon, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/modules/ShadcnUI/components";
import { LineClampClassName } from "@/modules/ShadcnUI/utils";
import { Copy } from "lucide-react";

export const SimpleInformation = ({ 
  className, 
  labelClassName, 
  valueClassName, 
  contentClassName, 
  label, 
  defaultValue, 
  value, 
  valueTitle, 
  icon,
  tipMessage, 
  collapsedValueLineClamp, 
  copyButton, 
  copiedMessage = "Copiado!", 
  copiedMessageDuration = 1300 
}: SimpleInformationProps) => {
  const [valueCollapsed, setValueCollapsed] = useState(true);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const collapsedValueLineClampClass = useMemo(() => {
    if (valueCollapsed && !!collapsedValueLineClamp) {
      return LineClampClassName.get(collapsedValueLineClamp);
    } else {
      return "";
    }
  }, [valueCollapsed, collapsedValueLineClamp])

  const renderValueContainer = (children: ReactNode) => {
    if (collapsedValueLineClamp) {
      return (
        <div className="text-left cursor-pointer" onClick={() => setValueCollapsed((value) => !value)}>
          {children}
        </div>
      )
    } else {
      return children;
    }
  }

  const handleOnClickCopy = (open: boolean) => {
    setShowCopiedMessage(open);

    navigator.clipboard.writeText(value);

    if(open) {
      setTimeout(() => {
        setShowCopiedMessage(false);
      }, copiedMessageDuration)
    }
  }

  console.log(tipMessage);

  return (
    <div className={cn("flex flex-row items-center gap-2", className)}>
      {icon}
      <div className={cn("flex flex-col flex-1 gap-[2px]", contentClassName)}>
        <div className="flex flex-row gap-1 items-center">
          <p className={cn("text-muted-foreground text-sm leading-[100%]", labelClassName)}>{label}</p>
          {
            tipMessage && <TipIcon
              message={tipMessage}
              color="soft"
            />
          }
          {
            copyButton && (
              <Popover open={showCopiedMessage} onOpenChange={handleOnClickCopy}>
                <PopoverTrigger>
                  <LabelIconButton
                    color="soft"
                  >
                    <Copy />
                  </LabelIconButton>
                </PopoverTrigger>
                <PopoverContent className="p-2 w-auto text-xs">
                  {copiedMessage}
                </PopoverContent>
              </Popover>
            )
          }
        </div>
        {renderValueContainer(
          <span title={valueTitle} className={cn("leading-[130%]", collapsedValueLineClampClass, valueClassName)}>
            {value || defaultValue || ""}
          </span>
        )}
      </div>
    </div>
  );
};