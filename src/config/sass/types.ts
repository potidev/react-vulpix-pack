import { VulpixZIndex } from '../../types/vulpix-zindex'
import { VulpixSizes } from "../../types/vulpix-sizes";
import { VulpixColors } from "../../types/vulpix-colors";
import { VulpixFonts } from "../../types/vulpix-fonts";
import { VulpixDevices } from "../../types/vulpix-devices";
import { VulpixFontSizes } from '../../types/vulpix-font-sizes';
import { VulpixBorderRadius } from '../../types/vulpix-border-radius';

export type VulpixSassConfig = {
  theme?: Partial<VulpixColors> 
    & Partial<VulpixFonts> 
    & Partial<VulpixSizes> 
    & { devices: Partial<VulpixDevices> }
    & { zIndexs: Partial<VulpixZIndex> }
    & { fontSizes: Partial<VulpixFontSizes> }
    & { borderRadius: Partial<VulpixBorderRadius> }
  importFontInSass?: boolean;
}