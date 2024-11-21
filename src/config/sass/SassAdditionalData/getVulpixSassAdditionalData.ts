import { Colors } from "../../../styles/typescript/colors";
import { VulpixSassConfig } from "../types";

export const getVulpixSassAdditionalData = (config?: VulpixSassConfig): string => {
  return `
    $primary-color: ${config?.theme?.primaryColor || Colors.primaryColor};
  `;
}