import { FontSizeTypes } from "@/types/font-sizes";
import { TextColorsTypes } from "@/types/text-colors";

export type TextProps = {
  className?: string;
  size?: FontSizeTypes;
  color?: TextColorsTypes;
  asChild?: boolean;
} & Omit<React.HTMLProps<HTMLHeadingElement>, "size" | "color">;