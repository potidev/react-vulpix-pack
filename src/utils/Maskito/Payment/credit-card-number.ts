import type { MaskitoOptions } from "@maskito/core";

export const creditCardNumber = {
  mask: [
    /\d/, /\d/, /\d/, /\d/, ' ',
    /\d/, /\d/, /\d/, /\d/, ' ',
    /\d/, /\d/, /\d/, /\d/, ' ',
    /\d/, /\d/, /\d/, /\d/
  ],
} satisfies MaskitoOptions;