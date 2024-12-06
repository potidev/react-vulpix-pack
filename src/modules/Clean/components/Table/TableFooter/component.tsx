import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn.get(
      styles.tableFooter,
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

export { TableFooter };