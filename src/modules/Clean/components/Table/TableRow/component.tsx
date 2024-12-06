import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn.get(
      styles.tableRow,
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

export { TableRow };