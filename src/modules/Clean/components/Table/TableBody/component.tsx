import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn.get(styles.tableBody, className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

export { TableBody }