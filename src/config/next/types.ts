import { VulpixColors } from "@/types/vulpix-colors";
import { VulpixFonts } from "@/types/vulpix-fonts";

export type VulpixNextConfig = {
  theme?: Partial<VulpixColors> & Partial<VulpixFonts>;
  importFontInSass?: boolean;
}