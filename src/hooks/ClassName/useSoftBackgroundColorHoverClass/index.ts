import { cn } from "@/utils";
import { ColorTypes } from "@/types/color";

import styles from "./styles.module.scss";
import colorOnHover from "./text-colors.module.scss";


type Settings = {
  recommendedTextColorOnHover?: boolean;
  hoverTransition?: boolean;
}

export const useSoftBackgroundColorHoverClass = (color?: ColorTypes, settings?: Settings): string => {
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
  };

  const getRecommendedTextColorClass = () => {
    switch (color) {
      case "background":
        return colorOnHover.background;
      case "primary":
        return colorOnHover.primary;
      case "success":
        return colorOnHover.success;
      case "warning":
        return colorOnHover.warning;
      case "danger":
        return colorOnHover.danger;
      case "text":
      default:
        return colorOnHover.text;
    }   
  }

  return cn.get(
    getSoftBackgroundColorHoverClass(),
    settings && settings.recommendedTextColorOnHover === true ? getRecommendedTextColorClass() : undefined,
    settings && settings.hoverTransition ? styles.hoverTransision : undefined,
  );
}