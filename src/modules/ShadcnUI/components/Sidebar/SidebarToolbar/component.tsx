"use client";

import React from "react";

import { SidebarTrigger } from "../component"
import { Separator } from "../../Separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../Breadcrumb";
import { SidebarToolbarProps } from "./types";
import { cn } from "@/modules/ShadcnUI/lib";

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
                breadcrumbs.map(({ label, target, href }, index) => {
                  if(index === breadcrumbs.length - 1) {
                    return (
                      <BreadcrumbItem key={`tool-bc-${index}`}>
                        <BreadcrumbPage>{label}</BreadcrumbPage>
                      </BreadcrumbItem>
                    )
                  }

                  if(href) {
                    return (
                      <>
                        <BreadcrumbItem className="hidden md:block" key={`tool-bc-${index}`}>
                          <BreadcrumbLink href={href} target={target}>
                            {label}
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" key={`tool-bcs-${index}`} />
                      </>
                    )
                  } 
                  return (
                    <>
                      <BreadcrumbItem className="hidden md:block" key={`tool-bc-${index}`}>
                        {label}
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" key={`tool-bcs-${index}`} />
                    </>
                  )
                })
              }
            </BreadcrumbList>
          </Breadcrumb>
        )
      }

      
    </header>
  )
}