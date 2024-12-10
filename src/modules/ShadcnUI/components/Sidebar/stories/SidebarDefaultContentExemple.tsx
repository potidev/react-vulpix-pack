import React from "react";

import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "../component"
import { Calendar, ChevronDown, Home, Inbox, Search, Settings } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../DropdownMenu";
import { SidebarLogo } from "../SidebarLogo";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
    badge: 0,
    active: true,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
    badge: 24,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
    badge: 12,
  }
]

const items2 = [
  {
    title: "Search",
    url: "#",
    icon: Search,
    badge: undefined,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    badge: undefined,
  },
]

export const SidebarDefaultContentExemple = () => {
  return (
    <SidebarContent>
      <SidebarHeader>
        <SidebarLogo title="Vulpix Pack" src="https://raw.githubusercontent.com/potidev/react-vulpix-pack/0872cd99757e7c15e61b33e48d2fa90997889188/.github/assets/svg/logo.svg" />
      </SidebarHeader>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={item.active}>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
                {item.badge !== undefined && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarSeparator />
      <SidebarGroup>
        <SidebarGroupLabel>Settings</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items2.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
                {item.badge !== undefined && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}