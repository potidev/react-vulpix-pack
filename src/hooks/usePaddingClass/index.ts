import styles from "./styles.module.scss";
import { PaddingSizeTypes } from "@/types/padding-sizes";

export const usePaddingClass = (size?: PaddingSizeTypes): string => {
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
    default:
      return styles.regular;
  }
}