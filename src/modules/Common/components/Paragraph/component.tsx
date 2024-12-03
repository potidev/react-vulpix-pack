import React from "react";

import { cn } from "@/utils/ClassNameUtils";
import { FontSizeTypes } from "@/types/font-sizes";
import { useFontSizeClass, useTextColorClass } from "@/hooks";

import styles from './styles.module.scss';
import { TextColorsTypes } from "@/types/text-colors";

export type ParagraphProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & {
  size?: FontSizeTypes;
  color?: TextColorsTypes;
}

export const Paragraph = ({ className, children, size = "regular", color = "default", ...rest }: ParagraphProps) => {
  const fontSizeClass = useFontSizeClass(size);
  const textColorClass = useTextColorClass(color);

  return (
    <span className={cn.get(styles.paragraph, fontSizeClass, textColorClass, className)} {...rest}>
      {children}
    </span>
  );
};