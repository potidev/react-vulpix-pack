import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { ShapeColorsTypes } from "@/types/shape-colors";

export type AvatarFallbackProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & {
  color?: ShapeColorsTypes;
};