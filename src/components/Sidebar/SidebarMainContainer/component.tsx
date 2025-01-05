import React from "react";

import { cn } from "@/lib";
import { SidebarMainContainerProps } from "./types";

export const SidebarMainContainer = ({ className, defaultContentPadding = true, children }: SidebarMainContainerProps) => {
  return (
    <main className={cn(defaultContentPadding ? "p-3 md:p-4" : "", "flex flex-1 flex-col gap-4", className)}>
      {children}
    </main>
  );
};