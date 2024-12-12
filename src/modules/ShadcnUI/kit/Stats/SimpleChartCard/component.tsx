import React from "react";

import { SimpleChartCardProps } from "./types";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/modules/ShadcnUI/components";
import { cn } from "@/modules/ShadcnUI/lib";

export const SimpleChartCard = ({ className, icon, title, description, children }: SimpleChartCardProps) => {
  return (
    <Card withoutDefaultPadding className={cn(className)}>
      <CardHeader>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {
          description && (
            <CardDescription>
              {description}
            </CardDescription>   
          )
        }
      </CardHeader>
      <CardContent className="pb-4">
        {children}
      </CardContent>
    </Card>
  );
};