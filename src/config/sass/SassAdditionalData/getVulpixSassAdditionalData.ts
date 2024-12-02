import { Fonts, Colors, Sizes, Devices, ZIndexs, FontSizes, BorderRadius, Paddings } from "../../../styles/typescript";

import { VulpixSassConfig } from "../types";
import { getCardPaddingDesktop, getCardPaddingTablet } from "./getCardPadding";

const DefaultTheme: VulpixSassConfig = {
  importFontInSass: true,
}

export const generateVariablesDevFile = (config?: VulpixSassConfig): string => {
  const importFont = config && config.importFontInSass !== undefined ? config?.importFontInSass : DefaultTheme.importFontInSass;

  return `
    ${importFont ? (config?.theme?.importFont || Fonts.importFont) : ""}

    $primary-color: ${config?.theme?.primaryColor || Colors.primaryColor};
    $text-color: ${config?.theme?.textColor || Colors.textColor};
    $soft-text-color: ${config?.theme?.softTextColor || Colors.softTextColor};
    $background-color: ${config?.theme?.backgroundColor || Colors.backgroundColor};
    $shape-color: ${config?.theme?.shapeColor || Colors.shapeColor};
    $soft-shape-color: ${config?.theme?.softShapeColor || Colors.softShapeColor};
    $separator-color: ${config?.theme?.separatorColor || Colors.separatorColor};

    $font-family: ${config?.theme?.fontFamily || Fonts.fontFamily || "Roboto, sans-serif"};

    $mobile-s: ${config?.theme?.devices?.mobileS || Devices.mobileS}px;
    $mobile-m: ${config?.theme?.devices?.mobileM || Devices.mobileM}px;
    $mobile-l: ${config?.theme?.devices?.mobileL || Devices.mobileL}px;
    $tablet: ${config?.theme?.devices?.tablet || Devices.tablet}px;
    $laptop: ${config?.theme?.devices?.laptop || Devices.laptop}px;
    $laptop-l: ${config?.theme?.devices?.laptopL || Devices.laptopL}px;
    $desktop: ${config?.theme?.devices?.desktop || Devices.desktop}px;
  
    $fs-tiny-tablet: ${config?.theme?.fontSizes?.tiny?.tablet || FontSizes.tiny.tablet};
    $fs-small-tablet: ${config?.theme?.fontSizes?.small?.tablet || FontSizes.small.tablet};
    $fs-regular-tablet: ${config?.theme?.fontSizes?.regular?.tablet || FontSizes.regular.tablet};
    $fs-medium-tablet: ${config?.theme?.fontSizes?.medium?.tablet || FontSizes.medium.tablet};
    $fs-large-tablet: ${config?.theme?.fontSizes?.large?.tablet || FontSizes.large.tablet};
    $fs-x-xarge-tablet: ${config?.theme?.fontSizes?.small?.tablet || FontSizes.xLarge.tablet};

    $fs-tiny-desktop: ${config?.theme?.fontSizes?.tiny?.desktop || FontSizes.tiny.desktop};
    $fs-small-desktop: ${config?.theme?.fontSizes?.small?.desktop || FontSizes.small.desktop};
    $fs-regular-desktop: ${config?.theme?.fontSizes?.regular?.desktop || FontSizes.regular.desktop};
    $fs-medium-desktop: ${config?.theme?.fontSizes?.medium?.desktop || FontSizes.medium.desktop};
    $fs-large-desktop: ${config?.theme?.fontSizes?.large?.desktop || FontSizes.large.desktop};
    $fs-x-xarge-desktop: ${config?.theme?.fontSizes?.small?.desktop || FontSizes.xLarge.desktop};

    $border-radius-tiny: ${config?.theme?.borderRadius?.tiny || BorderRadius.tiny};
    $border-radius-small: ${config?.theme?.borderRadius?.small || BorderRadius.small};
    $border-radius-regular: ${config?.theme?.borderRadius?.regular || BorderRadius.regular};
    $border-radius-medium: ${config?.theme?.borderRadius?.medium || BorderRadius.medium};
    $border-radius-large: ${config?.theme?.borderRadius?.large || BorderRadius.large};

    $padding-tiny-tablet: ${config?.theme?.paddings?.tiny?.tablet || Paddings.tiny.tablet};
    $padding-small-tablet: ${config?.theme?.paddings?.small?.tablet || Paddings.small.tablet};
    $padding-regular-tablet: ${config?.theme?.paddings?.regular?.tablet || Paddings.regular.tablet};
    $padding-medium-tablet: ${config?.theme?.paddings?.medium?.tablet || Paddings.medium.tablet};
    $padding-large-tablet: ${config?.theme?.paddings?.large?.tablet || Paddings.large.tablet};

    $padding-tiny-desktop: ${config?.theme?.paddings?.tiny?.desktop || Paddings.tiny.desktop};
    $padding-small-desktop: ${config?.theme?.paddings?.small?.desktop || Paddings.small.desktop};
    $padding-regular-desktop: ${config?.theme?.paddings?.regular?.desktop || Paddings.regular.desktop};
    $padding-medium-desktop: ${config?.theme?.paddings?.medium?.desktop || Paddings.medium.desktop};
    $padding-large-desktop: ${config?.theme?.paddings?.large?.desktop || Paddings.large.desktop};

    $z-index-modal: ${config?.theme?.zIndexs?.modal || ZIndexs.modal};
    $z-index-sidebar: ${config?.theme?.zIndexs?.sidebar || ZIndexs.sidebar};
    $z-index-sidebar-overlay: ${config?.theme?.zIndexs?.sidebarOverlay || ZIndexs.sidebarOverlay};
    $z-index-fixed-header: ${config?.theme?.zIndexs?.fixedHeader || ZIndexs.fixedHeader};

    $sidebar-background-color: ${config?.theme?.sidebarBackgroundColor || config?.theme?.backgroundColor || Colors.sidebarBackgroundColor || Colors.backgroundColor};
    $sidebar-toolbar-background-color: ${config?.theme?.sidebarToolbarBackgroundColor || config?.theme?.backgroundColor || Colors.sidebarToolbarBackgroundColor || Colors.backgroundColor};
    $sidebar-desktop-size: ${config?.theme?.sidebarSize?.desktop || Sizes.sidebarSize.desktop};
    $sidebar-mobile-size: ${config?.theme?.sidebarSize?.tablet || Sizes.sidebarSize.tablet};
    $sidebar-icon-desktop-size: ${config?.theme?.sidebarIcon?.desktop || Sizes.sidebarIcon.desktop};
    $sidebar-icon-mobile-size: ${config?.theme?.sidebarIcon?.tablet || Sizes.sidebarIcon.tablet};

    $card-padding-tablet: ${getCardPaddingTablet(config)};
    $card-padding-desktop: ${getCardPaddingDesktop(config)};
    $card-color: ${config?.theme?.cardColor || Colors.cardColor || config?.theme?.shapeColor || Colors.shapeColor};
    $soft-card-color: ${config?.theme?.softCardColor || Colors.softCardColor || config?.theme?.softShapeColor || Colors.softShapeColor};
  `;
}

export const getVulpixSassAdditionalData = (config?: VulpixSassConfig): string => {
  const sassData = generateVariablesDevFile(config);

  return sassData.replace(/\$(\w+[-\w]*)/g, (match, variableName) => {
    return `$vulpix-${variableName}`;
  });
};