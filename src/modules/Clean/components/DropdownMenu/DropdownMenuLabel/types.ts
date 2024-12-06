import { TextColorsTypes } from "@/types/text-colors";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export type DropdownMenuLabelProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
  color?: TextColorsTypes;
}