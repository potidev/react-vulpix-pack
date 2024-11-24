import { Fonts } from "../../../styles/typescript/fonts";
import { Colors } from "../../../styles/typescript/colors";
import { Sizes } from "../../../styles/typescript";

import { VulpixSassConfig } from "../types";

const DefaultTheme: VulpixSassConfig = {
  importFontInSass: true,
}

export const getVulpixSassAdditionalData = (config?: VulpixSassConfig): string => {
  const importFont = config && config.importFontInSass !== undefined ? config?.importFontInSass : DefaultTheme.importFontInSass;

  return `
    ${importFont ? (config?.theme?.importFont || Fonts.importFont) : ""}

    $primary-color: ${config?.theme?.primaryColor || Colors.primaryColor};
    $background-color: ${config?.theme?.backgroundColor || Colors.backgroundColor};
    $text-color: ${config?.theme?.textColor || Colors.textColor};
    $soft-text-color: ${config?.theme?.softTextColor || Colors.softTextColor};
    $separator-color: ${config?.theme?.separatorColor || Colors.separatorColor};
    $font-family: ${config?.theme?.fontFamily || Fonts.fontFamily || "Roboto, sans-serif"};

    $sidebar-background-color: ${config?.theme?.sidebarBackgroundColor || config?.theme?.backgroundColor || Colors.sidebarBackgroundColor || Colors.backgroundColor};
    $sidebar-desktop-size: ${config?.theme?.sidebarSize?.desktop || Sizes.sidebarSize.desktop};
    $sidebar-mobile-size: ${config?.theme?.sidebarSize?.mobile || Sizes.sidebarSize.mobile};
    $sidebar-icon-desktop-size: ${config?.theme?.sidebarIcon?.desktop || Sizes.sidebarIcon.desktop};
    $sidebar-icon-mobile-size: ${config?.theme?.sidebarIcon?.mobile || Sizes.sidebarIcon.mobile};
  `;
}