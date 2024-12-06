import { cn } from "@/utils";
import styles from "./styles.module.scss";
import { ColorTypes } from "@/types/color";

export const useColorClass = (color?: ColorTypes): string => {
  const getColorClass = () => {
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
      default:
      case "text":
        return styles.text;
    }
  }

  return cn.get(getColorClass());
}