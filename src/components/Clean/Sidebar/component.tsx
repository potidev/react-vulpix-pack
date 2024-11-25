"use client";

import React, { useMemo } from "react";

import { SidebarProps } from "./types";
import styles from './styles.module.scss';
import { SidebarHeader } from "../SidebarHeader/component";
import { SidebarProvider, useSidebarContext } from "@/contexts/Clean/SidebarProvider";
import { cn } from "@/utils/ClassNameUtils";

export const Sidebar = ({ children, ...rest }: SidebarProps) => {
  const { sidebarIsOpen } = useSidebarContext();

  const sidebarClass = useMemo(() => sidebarIsOpen ? undefined : styles.close, [sidebarIsOpen]);

  return (
    <aside className={cn.get(styles.sidebar, sidebarClass)}>
      <ul className={styles.list}>
        <SidebarHeader {...rest} />
        <div className={styles.items}>
          {children}
        </div>
      </ul>
    </aside>
  );
}