import { ColorTypes } from "@/types/color";
import { FontSizeTypes } from "@/types/font-sizes";
import { TextColorsTypes } from "@/types/text-colors";

export type SwitchProps = {
  className?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  color?: Exclude<ColorTypes, "background">;
  label?: string;
  labelSize?: FontSizeTypes;
  labelColor?: TextColorsTypes;
  labelClassName?: string;
  containerClassName?: string;
  labelHtmlFor?: string;
  labelNoSelectable?: boolean;
};