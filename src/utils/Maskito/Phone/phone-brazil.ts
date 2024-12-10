import type {MaskitoOptions} from '@maskito/core';
 
export const simpleBrazil = {
    mask: [
        '(',
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
    ],
} satisfies MaskitoOptions;

export const brazil = {
    mask: [
        '+',
        '5',
        '5',
        ' ',
        '(',
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
    ],
} satisfies MaskitoOptions;