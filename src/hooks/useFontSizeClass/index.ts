import { FontSizeTypes } from "@/types/font-sizes";
import styles from "./styles.module.scss";

export const useFontSizeClass = (size?: FontSizeTypes): string => {
  switch(size) {
    case "tiny":
      return styles.tiny;
    case "small":
      return styles.small;
    case "regular":
      return styles.regular;
    case "medium":
      return styles.medium;
    case "large":
      return styles.large;
    case "xLarge":
      return styles.xLarge;
    default:
      return styles.regular;
  }
}