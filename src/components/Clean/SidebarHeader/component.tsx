"use client";

import React, { useMemo } from "react";
import { MdKeyboardDoubleArrowLeft as Arrow } from "react-icons/md";

import { cn } from "@/utils/ClassNameUtils";

import { SidebarHeaderProps } from "./types";
import styles from './styles.module.scss';
import sharedStyles from '../SidebarItem/shared.module.scss';
import { useSidebarContext } from "@/contexts/Clean/SidebarProvider";

export const SidebarHeader = ({ className, title }: SidebarHeaderProps) => {
  const { toggleSidebar, sidebarIsOpen } = useSidebarContext();

  const sidebarClass = useMemo(() => sidebarIsOpen ? undefined : styles.rotate, [sidebarIsOpen]);

  return (
    <li className={cn.get(styles.container, className)}>
      {title && <span className={cn.get(styles.title, sharedStyles.sidebarItemContainer)}>{title}</span>}
      <button className={cn.get(styles.button, sidebarClass)} onClick={() => { toggleSidebar() }}>
        <Arrow />
      </button>
    </li>
  );
};