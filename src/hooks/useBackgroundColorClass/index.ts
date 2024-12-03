import { ColorTypes } from "@/types/color";
import styles from "./styles.module.scss";

export const useBackgroundColorClass = (color?: ColorTypes): string => {
  switch (color) {
    case "primary":
      return styles.primary;
    case "text":
      return styles.text;
    case "background":
    default:
      return styles.background;
  }
}