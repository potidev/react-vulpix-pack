import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';
import sharedStyles from './shared.module.scss';
import { SidebarItemProps } from "./types";

export const SidebarItem = ({ label, active = false, icon, className }: SidebarItemProps) => {
  const activeClass = active ? styles.active : '';
  
  return (
    <li className={cn.get(sharedStyles.sidebarItemContainer, activeClass, className)}>
      <div className={sharedStyles.icon}>
        {icon}
      </div>
      <span className={styles.label}>
        {label}
      </span>
    </li>
  );
};