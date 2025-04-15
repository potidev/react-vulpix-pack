import type { MaskitoOptions } from '@maskito/core';

export const cvv = {
  mask: ({ value }) => {
    const digits = value.replace(/\D/g, '');
    const length = Math.min(digits.length, 4);

    return Array.from({ length }, () => /\d/);
  },
} satisfies MaskitoOptions;