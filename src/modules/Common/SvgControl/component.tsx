import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import { SvgControlProps } from "./types";
import styles from './styles.module.scss';

export const SvgControl = ({ className, children }: SvgControlProps) => {
  return (
    <div className={cn.get(styles.container, className)}>
      {children}
    </div>
  );
};