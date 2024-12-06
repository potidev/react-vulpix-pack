import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';

const TableRoot = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => {
  return (
    <div className={styles.tableContainer}>
      <table
        ref={ref}
        className={cn.get(styles.tableRoot, className)}
        {...props}
      />
    </div>
  );
});
TableRoot.displayName = "TableRoot"

export { TableRoot };