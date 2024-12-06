import { ColorTypes } from "@/types/color";
import { ShapeColorsTypes } from "@/types/shape-colors";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  inputClassName?: string;
  labelClassName?: string;
  backgroundColor?: ShapeColorsTypes;
  color?: ColorTypes;
  error?: boolean;
  errorMessage?: string;
  helperMessage?: string;
}