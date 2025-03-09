import React from "react";

import { cn } from "@/lib/utils";
import { Card, FormDescription, FormLabel, Label } from "@/components";

export type SettingCardProps = {
  children?: React.ReactNode;
  form?: boolean;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export const SettingCard = ({ className, children, form = false, title, description, titleClassName, descriptionClassName }: SettingCardProps) => {
  return (
    <Card withoutDefaultPadding className={cn("flex flex-row items-center justify-between rounded-lg border p-3 shadow-xs gap-3", className)}>
      <div className="space-y-0.5">
        {form ? <FormLabel className={cn(titleClassName)}>{title}</FormLabel> : <Label className={cn(titleClassName)}>{title}</Label>}
        <>
          {
            description && (
              <>
                {
                  form ? (
                    <FormDescription className={cn(descriptionClassName)}>
                      {description}
                    </FormDescription>
                  ) : (
                    <p className={cn("text-[0.8rem] text-muted-foreground", descriptionClassName)}>
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
    </Card>
  );
};