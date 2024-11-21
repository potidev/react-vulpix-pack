import { getVulpixSassAdditionalData as sassAdditionalData } from "@/config/sass";
import { VulpixNextConfig } from "../types";

export const getVulpixSassAdditionalData = (config?: VulpixNextConfig): string => {
  return sassAdditionalData(config);
}