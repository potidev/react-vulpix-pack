import React, { HTMLAttributes } from "react";

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';

type ListProps = HTMLAttributes<HTMLUListElement>;

export const List = ({ className, children, ...props }: ListProps) => {
  return (
    <ul className={cn.get(styles.list, className)}>
      {children}
    </ul>
  );
};