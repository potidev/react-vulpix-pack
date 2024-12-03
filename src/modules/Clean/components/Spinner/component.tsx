import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import { SpinnerProps, SpinnerSize } from "./types";
import styles from './styles.module.scss';
import { ColorTypes } from "@/types/color";

export const Spinner = ({ className, size = "regular", color = "text" }: SpinnerProps) => {
  const getSize = (size: SpinnerSize) => {
    switch(size) {
      case "small":
        return 16;
      case "large":
        return 32;
      case "regular":
      default:
        return 24;
    }
  }

  const getColor = (color: ColorTypes) => {
    switch(color) {
      
      case "primary":
        return styles.primary;
      case "background":
        return styles.background;
      case "text":
      default:
        return styles.text;
    }
  }

  const finalSize = getSize(size);
  const colorClass = getColor(color);

  return (
    <div
      className={cn.get(styles.spinner, colorClass, className)}
      style={{ width: finalSize, height: finalSize, borderTopWidth: finalSize / 8 }}
    />
  );
};
