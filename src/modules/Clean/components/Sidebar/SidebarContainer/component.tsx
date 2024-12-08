"use client";

import React, { useMemo } from "react";

import { SidebarContainerProps } from "./types";
import styles from './styles.module.scss';
import { SidebarHeader } from "../SidebarHeader/component";
import { useSidebarContext } from "@/modules/Clean/contexts/SidebarProvider";
import { cn } from "@/utils/ClassNameUtils";
import { List } from "@/modules/Common";
import { useShapeBackgroundColorClass } from "@/hooks/ClassName";

export const SidebarContainer = ({ children, className, contentClassName, listClassName, color, ...rest }: SidebarContainerProps) => {
  console.log(color);
  
  const { sidebarIsOpen } = useSidebarContext();
  const backgroundColorClass = color ? useShapeBackgroundColorClass(color) : styles.sidebarDefaultBackgroundColor;

  const sidebarClass = useMemo(() => sidebarIsOpen ? undefined : styles.close, [sidebarIsOpen]);

  return (
    <aside className={cn.get(styles.sidebar, sidebarClass, backgroundColorClass, className)}>
      <List className={cn.get(styles.list, listClassName)}>
        <SidebarHeader {...rest} />
        <div className={cn.get(styles.content, contentClassName)}>
          {children}
        </div>
      </List>
    </aside>
  );
}