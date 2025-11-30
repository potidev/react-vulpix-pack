import React from "react";

import { SimpleStatsCardProps } from "./types";

import { Card, CardContent, CardHeader, CardTitle, Paragraph } from "@/components";
import { cn } from "@/lib";

export const SimpleStatsCard = ({ className, icon: Icon, title, description, value, descriptionClassName, titleClassName, valueClassName, iconClassName, valueDescription, valueDescriptionClassName, children }: SimpleStatsCardProps) => {
  return (
    <Card className={cn('flex flex-col gap-3', className)}>
      <section className="flex gap-4">
        <div className="flex-1">
          <p className={cn("text-xs mb-1", titleClassName)}>{title}</p>
          <div className="flex items-end gap-1">
            <span className={cn("text-xl font-medium", valueClassName)}>
              {value}
            </span>
            {valueDescription ? <Paragraph className={cn("text-xs pb-1", valueDescriptionClassName)}>{valueDescription}</Paragraph> : null}
          </div>
          {description ? <Paragraph className={cn("text-xs mt-1", descriptionClassName)}>{description}</Paragraph> : null}
        </div>
        {Icon ? <div>
          <Icon className={cn("size-5 text-muted-foreground", iconClassName)} />
        </div> : null}
      </section>
      {children}
    </Card>
  );
};