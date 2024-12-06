import { ColorTypes } from "@/types/color";
import { cn } from "@/utils";

import backgroundColors from "./background-colors.module.scss";
import textColors from "./text-colors.module.scss";
import hoverColors from "./hover-colors.module.scss";

type Settings = {
  hoverBackground?: boolean;
  recommendedTextColor?: boolean;
  hoverTransition?: boolean;
}

export const useBackgroundColorClass = (color?: ColorTypes, settings?: Settings): string => {
  const getBackgroundColorClass = () => {
    switch (color) {
      case "primary":
        return backgroundColors.primary;
      case "text":
        return backgroundColors.text;
      case "danger":
        return backgroundColors.danger;
      case "success":
        return backgroundColors.success;
      case "warning":
        return backgroundColors.warning;
      case "background":
      default:
        return backgroundColors.background;
    }
  }

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
      case "background":
      default:
        return hoverColors.background;
    }
  }

  const getRecommendedTextColor = () => {
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
    getBackgroundColorClass(), 
    settings && settings.hoverBackground === true ? getBackgroundColorHover() : undefined,
    settings && settings.recommendedTextColor === true ? getRecommendedTextColor() : undefined, 
    settings && settings.hoverTransition === true ? hoverColors.hoverTransision : undefined, 
  );
}