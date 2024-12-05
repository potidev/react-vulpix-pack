import { TextColorsTypes } from "@/types/text-colors";
import styles from "./styles.module.scss";

export const useTextColorClass = (color?: TextColorsTypes): string => {
  switch(color) {
    case "soft":
      return styles.soft;
    case "danger":
      return styles.danger;
    case "default":
    default:
      return styles.default;
  }
}