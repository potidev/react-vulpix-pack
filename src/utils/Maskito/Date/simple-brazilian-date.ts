import type { MaskitoOptions } from '@maskito/core';

export const simpleBrazilianDate = {
  mask: [
    /\d/,
    /\d/,
    "/",
    /\d/,
    /\d/,
    '/',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
} satisfies MaskitoOptions;