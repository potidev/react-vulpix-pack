import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import { TableRoundedProps } from "./types";
import styles from './styles.module.scss';

export const TableRounded = ({ className, children }: TableRoundedProps) => {
  return (
    <div className={cn.get(styles.tableRounded, className)}>
      {children}
    </div>
  );
};