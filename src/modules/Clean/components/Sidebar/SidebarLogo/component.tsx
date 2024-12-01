import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import { SidebarLogoProps } from "./types";
import styles from './styles.module.scss';

export const SidebarLogo = ({ className, ...props }: SidebarLogoProps) => {
  return (
    <img className={cn.get(className, styles.logo)} {...props} />
  );
};