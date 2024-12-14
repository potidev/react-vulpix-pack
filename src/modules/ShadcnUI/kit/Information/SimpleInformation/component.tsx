import React from "react";

import { cn } from "@/modules/ShadcnUI/lib";
import { SimpleInformationProps } from "./types";
import { TipIcon } from "@/modules/ShadcnUI/components";

export const SimpleInformation = ({ className, label, defaultValue, value, icon, tipMessage }: SimpleInformationProps) => {
  return (
    <div className={cn("flex flex-row items-center gap-2")}>
      {icon}
      <div className="flex flex-col flex-1 gap-[2px]">
        <div className="flex flex-row gap-1 items-center">
          <p className="text-muted-foreground text-sm leading-[100%]">{label}</p>
          {
            tipMessage && <TipIcon 
              message={tipMessage}
              color="soft"
            />
          }
        </div>
        <span className="leading-[130%]">{value || defaultValue || ""}</span>
      </div>
    </div>
  );
};