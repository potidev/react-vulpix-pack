import { ResponsiveIndicator } from "@/types/tailwind-responsive";
import { cn } from "../lib";

export class DisplayBlockClassName {
  static getResponsive = (responsive: ResponsiveIndicator) => {
    switch(responsive) {
      case "":
        return "block";
      case "sm":
        return "sm:block";
      case "md":
        return "md:block";
      case "lg":
        return "lg:block";
      case "xl":
        return "xl:block";
      case "2xl":
        return "2xl:block"
      default:
        return "";
    }
  }
}