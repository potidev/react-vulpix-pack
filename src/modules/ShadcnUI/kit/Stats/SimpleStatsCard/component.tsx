import React from "react";

import { SimpleStatsCardProps } from "./types";

import { Card, CardContent, CardHeader, CardTitle } from "@/modules/ShadcnUI/components";
import { cn } from "@/modules/ShadcnUI/lib";

export const SimpleStatsCard = ({ className, icon, title, description, value }: SimpleStatsCardProps) => {
  return (
    <Card withoutDefaultPadding>
      <CardHeader className={cn("flex flex-row items-center justify-between space-y-0 pb-2", className)}>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="[&_svg]:h-4 [&_svg]:w-4 text-muted-foreground fill-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold">{value}</span>
        {
          description && (
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          )
        }
      </CardContent>
    </Card>
  );
};