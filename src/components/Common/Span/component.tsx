import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';
import { FontSizeTypes } from "@/types/font-sizes";
import { useFontSizeClass } from "@/hooks/useFontSizeClass";

export type SpanProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
  size?: FontSizeTypes;
}

export const Span = ({ className, children, size = "regular", ...rest }: SpanProps) => {
  const fontSizeClass = useFontSizeClass(size);

  return (
    <span className={cn.get(styles.span, fontSizeClass, className)} {...rest}>
      {children}
    </span>
  );
};