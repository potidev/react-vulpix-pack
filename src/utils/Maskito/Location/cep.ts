import type { MaskitoOptions } from '@maskito/core';

export const cep = {
  mask: [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
  ],
} satisfies MaskitoOptions;