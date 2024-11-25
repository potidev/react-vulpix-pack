import { Fonts, Colors, Sizes, Devices, ZIndexs } from "../../../styles/typescript";

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
    $sidebar-toolbar-background-color: ${config?.theme?.sidebarToolbarBackgroundColor || config?.theme?.backgroundColor || Colors.sidebarToolbarBackgroundColor || Colors.backgroundColor};
    $sidebar-desktop-size: ${config?.theme?.sidebarSize?.desktop || Sizes.sidebarSize.desktop};
    $sidebar-mobile-size: ${config?.theme?.sidebarSize?.tablet || Sizes.sidebarSize.tablet};
    $sidebar-icon-desktop-size: ${config?.theme?.sidebarIcon?.desktop || Sizes.sidebarIcon.desktop};
    $sidebar-icon-mobile-size: ${config?.theme?.sidebarIcon?.tablet || Sizes.sidebarIcon.tablet};

    $mobile-s: ${config?.theme?.mobileS || Devices.mobileS}px;
    $mobile-m: ${config?.theme?.mobileM || Devices.mobileM}px;
    $mobile-l: ${config?.theme?.mobileL || Devices.mobileL}px;
    $tablet: ${config?.theme?.tablet || Devices.tablet}px;
    $laptop: ${config?.theme?.laptop || Devices.laptop}px;
    $laptop-l: ${config?.theme?.laptopL || Devices.laptopL}px;
    $desktop: ${config?.theme?.desktop || Devices.desktop}px;

    $modal-z-index: ${config?.theme?.zIndex?.modal || ZIndexs.zIndex.modal};
    $sidebar-z-index: ${config?.theme?.zIndex?.sidebar || ZIndexs.zIndex.sidebar};
    $sidebar-overlay-z-index: ${config?.theme?.zIndex?.sidebarOverlay || ZIndexs.zIndex.sidebarOverlay};
    $fixed-header-z-index: ${config?.theme?.zIndex?.fixedHeader || ZIndexs.zIndex.fixedHeader};
  `;
}