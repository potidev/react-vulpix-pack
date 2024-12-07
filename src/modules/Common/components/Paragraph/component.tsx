import React from "react";

import { cn } from "@/utils/ClassNameUtils";
import { FontSizeTypes } from "@/types/font-sizes";
import { useFontSizeClass, useTextColorClass } from "@/hooks/ClassName";

import styles from './styles.module.scss';
import { TextColorsTypes } from "@/types/text-colors";

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & {
  size?: FontSizeTypes;
  color?: TextColorsTypes;
}

export const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  ParagraphProps
>(({ className, children, size = "regular", color = "default", ...rest }, ref) => {
  const fontSizeClass = useFontSizeClass(size);
  const textColorClass = useTextColorClass(color);

  return (
    <span className={cn.get(styles.paragraph, fontSizeClass, textColorClass, className)} ref={ref} {...rest}>
      {children}
    </span>
  );
});