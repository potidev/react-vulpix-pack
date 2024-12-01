import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import { SidebarToolbarProps } from "./types";
import styles from './styles.module.scss';
import { SidebarControlButton } from "../SidebarControlButton/component";

export const SidebarToolbar = ({ className }: SidebarToolbarProps) => {
  return (
    <aside className={cn.get(styles.container, className)}>
      <SidebarControlButton />
    </aside>
  );
};