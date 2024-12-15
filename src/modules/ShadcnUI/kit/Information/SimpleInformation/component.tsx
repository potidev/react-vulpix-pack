"use client";

import React, { ReactNode, useMemo, useState } from "react";

import { cn } from "@/modules/ShadcnUI/lib";
import { SimpleInformationProps } from "./types";
import { TipIcon } from "@/modules/ShadcnUI/components";
import { LineClampClassName } from "@/modules/ShadcnUI/utils";

export const SimpleInformation = ({ className, labelClassName, valueClassName, contentClassName, label, defaultValue, value, valueTitle, icon, tipMessage, collapsedValueLineClamp }: SimpleInformationProps) => {
  const [valueCollapsed, setValueCollapsed] = useState(true);
  
  const collapsedValueLineClampClass = useMemo(() => {
    if(valueCollapsed && !!collapsedValueLineClamp) {
      return LineClampClassName.get(collapsedValueLineClamp);
    } else {
      return "";
    }
  }, [valueCollapsed, collapsedValueLineClamp])
  
  const renderValueContainer = (children: ReactNode) => {
    if(collapsedValueLineClamp) {
      return (
        <button className="text-left" onClick={() => setValueCollapsed((value) => !value)}>
          {children}
        </button>
      )
    } else {
      return children;
    }
  }

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