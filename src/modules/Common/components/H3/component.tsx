import React from "react";

import { cn } from "@/utils/ClassNameUtils";
import { useTextColorClass, useFontSizeClass } from "@/hooks/ClassName";

import styles from './styles.module.scss';
import { H3Props } from "./types";

export const H3 = ({ className, children, size = "regular", color = "default", ...rest }: H3Props) => {
  const fontSizeClass = useFontSizeClass(size);
  const textColorClass = useTextColorClass(color);

  return (
    <h3 className={cn.get(styles.h3, fontSizeClass, textColorClass, className)} {...rest}>
      {children}
    </h3>
  );
};