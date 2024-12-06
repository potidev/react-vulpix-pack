import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import styles from "./styles.module.scss";

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn.get(styles.dropdownShortcut, className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export { DropdownMenuShortcut };