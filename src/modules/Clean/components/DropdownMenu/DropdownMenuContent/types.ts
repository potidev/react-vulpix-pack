import { ShapeColorsTypes } from "@/types/shape-colors";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export type DropdownMenuContentProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & {
  backgroundColor?: ShapeColorsTypes;
}