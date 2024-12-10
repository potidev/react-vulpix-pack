import type { MaskitoOptions } from '@maskito/core';

export const cnpj = {
  mask: [
    /\d/,
    /\d/,
    ".",
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '/',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ],
} satisfies MaskitoOptions;