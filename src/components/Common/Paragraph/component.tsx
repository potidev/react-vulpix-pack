import React from "react";

import { cn } from "@/utils/ClassNameUtils";
import { FontSizeTypes } from "@/types/font-sizes";
import { useFontSizeClass } from "@/hooks/useFontSizeClass";

import styles from './styles.module.scss';

type ParagraphProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & {
  size?: FontSizeTypes;
}

export const Paragraph = ({ className, children, size = "regular", ...rest }: ParagraphProps) => {
  const fontSizeClass = useFontSizeClass(size);

  return (
    <span className={cn.get(styles.paragraph, fontSizeClass, className)} {...rest}>
      {children}
    </span>
  );
};