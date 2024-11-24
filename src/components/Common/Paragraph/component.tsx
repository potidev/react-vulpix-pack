import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';

type ParagraphProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export const Paragraph = ({ className, children, ...rest }: ParagraphProps) => {
  return (
    <span className={cn.get(styles.paragraph, className)} {...rest}>
      {children}
    </span>
  );
};