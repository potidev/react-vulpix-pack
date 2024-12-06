import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import { CardRootProps } from "./types";
import styles from './styles.module.scss';
import { useShapeBackgroundColorClass } from "@/hooks/ClassName";

export const CardRoot = ({ className, color = "default", hoverEffect = false, cursorPointer = false, children }: CardRootProps) => {
  const shapeBackgroundColorClass = useShapeBackgroundColorClass(color);
  const hoverClass = hoverEffect === true ? styles.cardHover : "";
  const cursorPointerClass = cursorPointer === true ? styles.cursorPointer : "";

  return (
    <section className={cn.get(styles.card, shapeBackgroundColorClass, hoverClass, cursorPointerClass, className)}>
      {children}
    </section>
  );
};