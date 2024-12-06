import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import { SidebarDropdownItemProps } from "./types";
import styles from './styles.module.scss';
import sharedStyles from '../SidebarItem/shared.module.scss';
import { useFontSizeClass } from "@/hooks/ClassName";

export const SidebarDropdownItem = ({ className, label }: SidebarDropdownItemProps) => {
  const fontSizeClass = useFontSizeClass("small");

  return (
    <li className={cn.get(sharedStyles.sidebarItemContainer, styles.container, fontSizeClass, className)}>
      {label}
    </li>
  );
};