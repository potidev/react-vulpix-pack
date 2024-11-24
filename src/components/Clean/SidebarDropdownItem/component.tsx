import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import { SidebarDropdownItemProps } from "./types";
import styles from './styles.module.scss';
import sharedStyles from '../SidebarItem/shared.module.scss';

export const SidebarDropdownItem = ({ className, label }: SidebarDropdownItemProps) => {
  return (
    <li className={cn.get(sharedStyles.sidebarItemContainer, styles.container, className)}>
      {label}
    </li>
  );
};