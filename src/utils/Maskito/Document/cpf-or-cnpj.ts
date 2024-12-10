import { MaskitoOptions } from "@maskito/core";

export const cpfOrCnpj = {
  mask: (elementState) => {
    const { value } = elementState;
    const digits = value.replace(/\D/g, '').length;

    // CPF - 000.000.000-00
    if (digits <= 11) {
      return [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    }

    // CNPJ - 00.000.000/0000-00
    return [
      /\d/,
      /\d/,
      '.',
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
    ];
  },
} satisfies MaskitoOptions;