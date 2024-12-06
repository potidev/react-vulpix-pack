import styles from "./styles.module.scss";
import { ColorTypes } from "@/types/color";

export const useBorderColorFocusClass = (color?: ColorTypes): string => {
  switch (color) {
    case "background":
      return styles.borderColorFocusBackground;
    case "primary":
      return styles.borderColorFocusPrimary;
    case "success":
      return styles.borderColorFocusSuccess;
    case "warning":
      return styles.borderColorFocusWarning;
    case "danger":
      return styles.borderColorFocusDanger;
    case "text":
      return styles.borderColorFocusText;
  }
}