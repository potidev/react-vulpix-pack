"use client";

import React, { useMemo } from "react"
import { MdKeyboardDoubleArrowLeft as Arrow } from "react-icons/md";;

import { cn } from "@/utils/ClassNameUtils";
import { useSidebarContext } from "@/contexts/Clean/SidebarProvider";

import { SidebarControlButtonProps } from "./types";
import styles from './styles.module.scss';
import sharedStyles from '../SidebarItem/shared.module.scss';

export const SidebarControlButton = ({ className }: SidebarControlButtonProps) => {
  const { toggleSidebar, sidebarIsOpen } = useSidebarContext();

  const sidebarClass = useMemo(() => sidebarIsOpen ? undefined : styles.rotate, [sidebarIsOpen]);
  
  return (
    <button className={cn.get(styles.button, sidebarClass, className)} onClick={() => { toggleSidebar() }}>
      <Arrow />
    </button>
  );
};