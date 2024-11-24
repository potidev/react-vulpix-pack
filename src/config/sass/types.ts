import { VulpixSizes } from "../../types/vulpix-sizes";
import { VulpixColors } from "../../types/vulpix-colors";
import { VulpixFonts } from "../../types/vulpix-fonts";

export type VulpixSassConfig = {
  theme?: Partial<VulpixColors> & Partial<VulpixFonts> & Partial<VulpixSizes>;
  importFontInSass?: boolean;
}