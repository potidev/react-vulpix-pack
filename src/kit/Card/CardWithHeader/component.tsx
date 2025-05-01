import React from "react";

import { cn } from "@/lib/utils";
import { Card } from "@/components";

import { CardWithHeaderProps } from "./types";

export const CardWithHeader = ({ className, header, headerClassName, withoutDefaultPadding, children, ...rest }: CardWithHeaderProps) => {
  return (
    <Card className={cn("flex flex-col overflow-hidden", className)} withoutDefaultPadding {...rest}>
      <header className={cn("flex flex-row gap-2 justify-between items-center bg-muted/50 border-border border-b-[1px]", withoutDefaultPadding === true ? "" : "py-2 px-4", headerClassName)}>
        {header}
      </header>
      <article className={cn("grid grid-cols-1 lg:grid-cols-2 gap-4", withoutDefaultPadding === true ? "" : "p-4")}>
        {children}
      </article>
    </Card>
  );
};