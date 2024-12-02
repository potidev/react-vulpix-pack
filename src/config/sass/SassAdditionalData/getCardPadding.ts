import { Paddings, Sizes } from "../../../styles/typescript";
import { VulpixSassConfig } from "../types";

export const getCardPaddingTablet = (config?: VulpixSassConfig) => {
  if(config?.theme?.cardPadding?.tablet) return config?.theme?.cardPadding?.tablet;
  if(Sizes.cardPadding?.tablet) return Sizes.cardPadding?.tablet;
  
  if(config?.theme?.paddings?.medium?.tablet) return config?.theme?.paddings?.medium?.tablet;
  if(Paddings.medium.tablet) return Paddings.medium.tablet;

  return "16px";
}

export const getCardPaddingDesktop = (config?: VulpixSassConfig) => {
  if(config?.theme?.cardPadding?.desktop) return config?.theme?.cardPadding?.desktop;
  if(Sizes.cardPadding?.desktop) return Sizes.cardPadding?.desktop;
  
  if(config?.theme?.paddings?.regular?.desktop) return config?.theme?.paddings?.regular?.desktop;
  if(Paddings.regular.desktop) return Paddings.regular.desktop;

  return "16px";
}