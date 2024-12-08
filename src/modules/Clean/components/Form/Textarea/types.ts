import { ColorTypes } from "@/types/color";
import { ShapeColorsTypes } from "@/types/shape-colors";

export type TextareaProps = React.ComponentProps<"textarea"> & {
  className?: string;
  backgroundColor?: ShapeColorsTypes;
  color?: ColorTypes;
};