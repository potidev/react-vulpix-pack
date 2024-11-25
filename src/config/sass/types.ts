import { VulpixZIndex } from '../../types/vulpix-zindex'
import { VulpixSizes } from "../../types/vulpix-sizes";
import { VulpixColors } from "../../types/vulpix-colors";
import { VulpixFonts } from "../../types/vulpix-fonts";
import { VulpixDevices } from "../../types/vulpix-devices";

export type VulpixSassConfig = {
  theme?: Partial<VulpixColors> & Partial<VulpixFonts> & Partial<VulpixSizes> & Partial<VulpixDevices> & Partial<VulpixZIndex>;
  importFontInSass?: boolean;
}