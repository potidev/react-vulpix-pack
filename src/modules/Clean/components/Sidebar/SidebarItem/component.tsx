import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';
import sharedStyles from './shared.module.scss';
import { SidebarItemProps } from "./types";
import { Span } from "@/modules/Common/components/Span";

export const SidebarItem = ({ label, active = false, icon, className }: SidebarItemProps) => {
  const activeClass = active ? styles.active : '';
  
  return (
    <li className={cn.get(sharedStyles.sidebarItemContainer, activeClass, className)}>
      <div className={sharedStyles.icon}>
        {icon}
      </div>
      <Span size="small" className={cn.get(styles.label, activeClass)}>
        {label}
      </Span>
    </li>
  );
};