import React from "react";

import { ToolbarBreadcrumbItemProps } from "./types";
import { cn } from "@/lib";
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/Breadcrumb";

export const ToolbarBreadcrumbItem = ({ className, separator, label, href, target }: ToolbarBreadcrumbItemProps) => {
  if(!separator) {
    return (
      <BreadcrumbItem className={cn(className)}>
        <BreadcrumbPage>{label}</BreadcrumbPage>
      </BreadcrumbItem>
    )
  }

  return (
    <>
      <BreadcrumbItem className={cn("hidden md:block", className)}>
        {
          href ? (
            <BreadcrumbLink href={href} target={target}>
              {label}
            </BreadcrumbLink>
          ) : (
            label
          )
        }
      </BreadcrumbItem>
      {separator && <BreadcrumbSeparator className="hidden md:block" />}
    </>
  )
};