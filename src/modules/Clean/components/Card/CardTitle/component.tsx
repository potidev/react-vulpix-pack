import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import { CardTitleProps } from "./types";
import styles from './styles.module.scss';
import { useFontSizeClass } from "@/hooks/ClassName";
import { H3 } from "@/modules/Common/components/H3";

export const CardTitle = ({ className, children, size = "large", ...props }: CardTitleProps) => {
  const fontSizeClass = useFontSizeClass(size); 

  return (
    <H3 color="default" className={cn.get(styles.cardTitle, fontSizeClass, className)} {...props}>
      {children}
    </H3>
  );
};