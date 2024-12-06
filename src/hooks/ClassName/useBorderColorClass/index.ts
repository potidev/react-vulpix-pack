import { cn } from "@/utils";
import { BorderColorTypes } from "@/types/color";
import { useColorClass } from "../useColorClass";

import borderColors from "./border-colors.module.scss";
import backgroundColorHoverColors from "./background-color-hover.module.scss";
import recommendedTextColorsHover from "./recommended-text-colors-hover.module.scss";
import { useSoftBackgroundColorHoverClass } from "../useSoftBackgroundColorHoverClass";



type Settings = {
  textColor?: boolean;
  recommendedTextColorHover?: boolean;
  backgroundColorHover?: boolean;
  softBackgroundColorHover?: boolean;
  hoverTransition?: boolean;
}

export const useBorderColorClass = (color?: BorderColorTypes, settings?: Settings): string => {
  const getBorderColorClass = () => {
    switch (color) {
      case "background":
        return borderColors.background;
      case "primary":
        return borderColors.primary;
      case "success":
        return borderColors.success;
      case "warning":
        return borderColors.warning;
      case "danger":
        return borderColors.danger;
      case "text":
        return borderColors.text;
      default:
        return borderColors.separator;
    }
  }

  const getBackgroundColorHoverClass = () => {
    switch (color) {
      case "background":
        return backgroundColorHoverColors.background;
      case "primary":
        return backgroundColorHoverColors.primary;
      case "success":
        return backgroundColorHoverColors.success;
      case "warning":
        return backgroundColorHoverColors.warning;
      case "danger":
        return backgroundColorHoverColors.danger;
      case "text":
        return backgroundColorHoverColors.text;
      default:
        return backgroundColorHoverColors.separator;
    }
  }

  const getRecommendedTextColorHoverClass = () => {
    switch (color) {
      case "background":
        return recommendedTextColorsHover.background;
      case "primary":
        return recommendedTextColorsHover.primary;
      case "success":
        return recommendedTextColorsHover.success;
      case "warning":
        return recommendedTextColorsHover.warning;
      case "danger":
        return recommendedTextColorsHover.danger;
      case "text":
        return recommendedTextColorsHover.text;
      default:
        return recommendedTextColorsHover.separator;
    }
  }

  return cn.get(
    getBorderColorClass(),
    settings && settings.textColor ? useColorClass(color === "separator" ? "text" : color) : undefined,
    settings && settings.backgroundColorHover ? getBackgroundColorHoverClass() : undefined,
    settings && settings.hoverTransition === true ? backgroundColorHoverColors.hoverTransision : undefined, 
    settings && settings.recommendedTextColorHover === true ? getRecommendedTextColorHoverClass() : undefined,
    settings && settings.softBackgroundColorHover === true ? useSoftBackgroundColorHoverClass(color === "separator" ? "text" : color) : undefined,
  );
}