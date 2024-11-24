"use client";

import React, { useMemo } from "react";

import { SidebarProps } from "./types";
import styles from './styles.module.scss';
import { SidebarHeader } from "../SidebarHeader/component";
import { SidebarProvider, useSidebarContext } from "@/contexts/Clean/SidebarProvider";
import { cn } from "@/utils/ClassNameUtils";

const SidebarComponent = ({ headerTitle, children }: SidebarProps) => {
  const { openSidebar, sidebarIsOpen } = useSidebarContext();

  const sidebarClass = useMemo(() => sidebarIsOpen ? undefined : styles.close, [sidebarIsOpen]);

  return (
    <aside className={cn.get(styles.sidebar, sidebarClass)}>
      <ul className={styles.list}>
        <SidebarHeader title={headerTitle} />
        <div className={styles.items}>
          {children}
        </div>
      </ul>
    </aside>
  );
}

export const Sidebar = (props: SidebarProps) => {
  return (
    <SidebarProvider>
      <SidebarComponent {...props} />
    </SidebarProvider>
  )
};