"use client";

import React from "react";

import { SidebarLogoProps } from "./types";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../component";
import { Avatar, AvatarFallback, AvatarImage } from "../../Avatar";

export const SidebarLogo = ({ className, title, description, href = "", src, fallback }: SidebarLogoProps) => {
  return (
    <SidebarMenu className={className}>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <a href={href}>
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={src} alt={title} />
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