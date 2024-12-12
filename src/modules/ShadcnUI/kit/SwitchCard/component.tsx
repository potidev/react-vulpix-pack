import React from "react";
import { SwitchCardProps } from "./types";
import { cn } from "../../lib";
import { FormDescription, FormLabel, Label } from "../../components";


export const SwitchCard = ({ className, title, description, children, form = false }: SwitchCardProps) => {
  return (
    <div className={cn("flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm gap-3", className)}>
      <div className="space-y-0.5">
        {form ? <FormLabel>{title}</FormLabel> : <Label>{title}</Label>}
        <>
          {
            description && (
              <>
                {
                  form ? (
                    <FormDescription>
                      {description}
                    </FormDescription>
                  ) : (
                    <p className={cn("text-[0.8rem] text-muted-foreground")}>
                      {description}
                    </p>
                  )
                }
              </>
            )
          }
        </>
      </div>
      {children}
    </div>
  );
};