"use client";

import React from "react";

import { SidebarLogoProps } from "./types";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../component";
import { Avatar, AvatarFallback, AvatarImage } from "../../Avatar";
import { cn } from "@/modules/ShadcnUI/lib";

export const SidebarLogo = ({ className, title, description, href = "", src, fallback, borderLogo = false, avatarClassName, imagePadding = false, imageClassName, }: SidebarLogoProps) => {
  return (
    <SidebarMenu className={className}>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <a href={href}>
            <Avatar className={cn("h-8 w-8", borderLogo ? "rounded-lg" : "rounded-none", avatarClassName)}>
              <AvatarImage src={src} alt={title} className={cn(imagePadding ? "p-2" : "", imageClassName)} />
              <AvatarFallback className="rounded-lg">{fallback}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-semibold">{title}</span>
              {description && <span className="">{description}</span>}
            </div>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};