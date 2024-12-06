import { ColorTypes } from "@/types/color";
import { ShapeColorsTypes } from "@/types/shape-colors";
import * as SelectPrimitive from "@radix-ui/react-select"


export type SelectTriggerProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
  label?: string;
  labelClassName?: string;
  color?: ColorTypes;
  error?: boolean;
  errorMessage?: string;
  helperMessage?: string;
}