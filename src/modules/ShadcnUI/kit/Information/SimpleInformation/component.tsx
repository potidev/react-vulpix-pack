import React from "react";

import { cn } from "@/modules/ShadcnUI/lib";
import { SimpleInformationProps } from "./types";
import { TipIcon } from "@/modules/ShadcnUI/components";

export const SimpleInformation = ({ className, labelClassName, valueClassName, contentClassName, label, defaultValue, value, icon, tipMessage }: SimpleInformationProps) => {
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
        <span className={cn("leading-[130%]", valueClassName)}>{value || defaultValue || ""}</span>
      </div>
    </div>
  );
};