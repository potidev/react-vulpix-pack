import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn.get(
      styles.tableHead,
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

export { TableHead };