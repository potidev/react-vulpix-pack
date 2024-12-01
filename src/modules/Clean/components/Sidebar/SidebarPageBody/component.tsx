import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import { SidebarPageBodyProps } from "./types";
import styles from './styles.module.scss';

export const SidebarPageBody = ({ className, children }: SidebarPageBodyProps) => {
  return (
    <body className={cn.get(styles.container, className)}>
      {children}
    </body>
  );
};