import styles from "./styles.module.scss";
import { ShapeColorsTypes } from "@/types/shape-colors";

export const useShapeBackgroundColorClass = (color?: ShapeColorsTypes): string => {
  switch(color) {
    case "soft":
      return styles.soft;
    case "default":
    default:
      return styles.default;
  }
}