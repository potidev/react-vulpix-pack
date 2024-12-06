import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import styles from './styles.module.scss';
import { FontSizeTypes } from "@/types/font-sizes";
import { TextColorsTypes } from "@/types/text-colors";
import { useTextColorClass, useFontSizeClass } from "@/hooks/ClassName";

export type LabelProps = Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "color"> & {
  size?: FontSizeTypes;
  color?: TextColorsTypes;
  noSelectable?: boolean;
}

export const Label = ({ className, children, size = "regular", color = "default", noSelectable, ...rest }: LabelProps) => {
  const fontSizeClass = useFontSizeClass(size);
  const textColorClass = useTextColorClass(color);
  const selectableClass = noSelectable ? styles.noSelectable : "";

  return (
    <label className={cn.get(styles.label, fontSizeClass, textColorClass, selectableClass, className)} {...rest}>
      {children}
    </label>
  );
};