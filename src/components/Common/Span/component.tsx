import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';

type SpanProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export const Span = ({ className, children, ...rest }: SpanProps) => {
  return (
    <span className={cn.get(styles.span, className)} {...rest}>
      {children}
    </span>
  );
};