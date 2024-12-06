import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn.get(
      styles.tableCell,
      className
    )}
    {...props}
  />
))
TableCell.displayName = "TableCell"

export { TableCell };