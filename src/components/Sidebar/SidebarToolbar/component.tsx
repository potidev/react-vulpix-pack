"use client";

import React from "react";

import { SidebarTrigger } from "../component"
import { Separator } from "../../Separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../Breadcrumb";
import { SidebarToolbarProps } from "./types";
import { cn } from "@/lib";
import { ToolbarBreadcrumbItem } from "./components/ToolbarBreadcrumbItem";

export const SidebarToolbar = ({ breadcrumbs, className }: SidebarToolbarProps) => {
  return (
    <header className={cn("sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4", className)}>
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      {
        breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb>
            <BreadcrumbList>
              {
                breadcrumbs.map(({ label, target, href }, index) => (
                  <ToolbarBreadcrumbItem key={`tbc-${index}`} label={label} target={target} href={href} separator={index !== breadcrumbs.length - 1} />
                ))
              }
            </BreadcrumbList>
          </Breadcrumb>
        )
      }
    </header>
  )
}