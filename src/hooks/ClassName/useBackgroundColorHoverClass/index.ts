import { ColorTypes } from "@/types/color";
import { cn } from "@/utils";

import textColors from "./text-colors.module.scss";
import hoverColors from "./hover-colors.module.scss";

type Settings = {
  recommendedTextColorOnHover?: boolean;
  hoverTransition?: boolean;
}

export const useBackgroundColorHoverClass = (color?: ColorTypes | "separator", settings?: Settings): string => {
  const getBackgroundColorHover = () => {
    switch (color) {
      case "primary":
        return hoverColors.primary;
      case "text":
        return hoverColors.text;
      case "danger":
        return hoverColors.danger;
      case "success":
        return hoverColors.success;
      case "warning":
        return hoverColors.warning;
      case "separator":
        return hoverColors.separator;
      case "background":
      default:
        return hoverColors.background;
    }
  }

  const getRecommendedTextColorHover = () => {
    switch (color) {
      case "primary":
        return textColors.primary;
      case "text":
        return textColors.text;
      case "danger":
        return textColors.danger;
      case "success":
        return textColors.success;
      case "warning":
        return textColors.warning;
      case "background":
      default:
        return textColors.background;
    }
  }

  return cn.get(
    getBackgroundColorHover(),
    settings && settings.recommendedTextColorOnHover === true ? getRecommendedTextColorHover() : undefined, 
    settings && settings.hoverTransition === true ? hoverColors.hoverTransision : undefined, 
  );
}