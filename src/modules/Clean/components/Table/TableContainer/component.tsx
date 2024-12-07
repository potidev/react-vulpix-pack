import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';

const TableContainer = React.forwardRef<
HTMLDivElement,
 React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn.get(
      styles.container,
      className
    )}
    {...props}
  />
))
TableContainer.displayName = "TableContainer"

export { TableContainer };