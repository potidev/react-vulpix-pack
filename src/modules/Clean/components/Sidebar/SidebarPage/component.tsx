import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import { SidebarPageProps } from "./types";
import styles from './styles.module.scss';

export const SidebarPage = ({ className, children }: SidebarPageProps) => {
  return (
    <div className={cn.get(styles.container, className)}>
      {children}
    </div>
  );
};