import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import { CheckboxContainerProps } from "./types";
import styles from './styles.module.scss';

export const CheckboxContainer = ({ className, children }: CheckboxContainerProps) => {
  return (
    <div className={cn.get(styles.checkboxContainer, className)}>
      {children}
    </div>
  );
};