import React from "react";

import { SimpleStatsCardProps } from "./types";

import { Card, CardContent, CardHeader, CardTitle } from "@/components";
import { cn } from "@/lib";

export const SimpleStatsCard = ({ className, icon, title, description, value, children }: SimpleStatsCardProps) => {
  return (
    <Card withoutDefaultPadding className={cn(className)}>
      <CardHeader className={cn("flex flex-row items-center justify-between space-y-0 pb-2")}>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {
          icon && (
            <div className="[&_svg]:h-4 [&_svg]:w-4 text-muted-foreground fill-muted-foreground">
              {icon}
            </div>   
          )
        }
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold">{value}</span>
        {
          description && (
            <p className="text-xs text-muted-foreground">
              {description}
            </p>
          )
        }
        {children}
      </CardContent>
    </Card>
  );
};