import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import { CardRootProps } from "./types";
import styles from './styles.module.scss';

export const CardRoot = ({ className, background = "default", hoverEffect = false, cursorPointer = false, children }: CardRootProps) => {
  const backgroundClass = background === "soft" ? styles.softCardBackground : styles.defaultCardBackground;
  const hoverClass = hoverEffect === true ? styles.cardHover : "";
  const cursorPointerClass = cursorPointer === true ? styles.cursorPointer : "";

  return (
    <section className={cn.get(styles.card, backgroundClass, hoverClass, cursorPointerClass, className)}>
      {children}
    </section>
  );
};