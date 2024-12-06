import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';
import { FontSizeTypes } from "@/types/font-sizes";
import { TextColorsTypes } from "@/types/text-colors";
import { useTextColorClass, useFontSizeClass } from "@/hooks/ClassName";

export type SpanProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
  size?: FontSizeTypes;
  color?: TextColorsTypes;
}

export const Span = ({ className, children, size = "regular", color = "default", ...rest }: SpanProps) => {
  const fontSizeClass = useFontSizeClass(size);
  const textColorClass = useTextColorClass(color);

  return (
    <span className={cn.get(styles.span, fontSizeClass, textColorClass, className)} {...rest}>
      {children}
    </span>
  );
};