"use client";

import React, { useMemo } from "react";

import { SidebarContainerProps } from "./types";
import styles from './styles.module.scss';
import { SidebarHeader } from "../SidebarHeader/component";
import { useSidebarContext } from "@/modules/Clean/contexts/SidebarProvider";
import { cn } from "@/utils/ClassNameUtils";

export const SidebarContainer = ({ children, className, contentClassName, listClassName, ...rest }: SidebarContainerProps) => {
  const { sidebarIsOpen } = useSidebarContext();

  const sidebarClass = useMemo(() => sidebarIsOpen ? undefined : styles.close, [sidebarIsOpen]);

  return (
    <aside className={cn.get(styles.sidebar, sidebarClass, className)}>
      <ul className={cn.get(styles.list, listClassName)}>
        <SidebarHeader {...rest} />
        <div className={cn.get(styles.content, contentClassName)}>
          {children}
        </div>
      </ul>
    </aside>
  );
}