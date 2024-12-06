import { cn } from "@/utils";
import { ColorTypes } from "@/types/color";

import styles from "./styles.module.scss";

export const useSoftBackgroundColorHoverClass = (color?: ColorTypes): string => {
  const getSoftBackgroundColorHoverClass = () => {
    switch (color) {
      case "background":
        return styles.background;
      case "primary":
        return styles.primary;
      case "success":
        return styles.success;
      case "warning":
        return styles.warning;
      case "danger":
        return styles.danger;
      case "text":
      default:
        return styles.text;
    }
  }

  return cn.get(
    getSoftBackgroundColorHoverClass(),
  );
}