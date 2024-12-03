import { FontSizeTypes } from "@/types/font-sizes";
import { TextColorsTypes } from "@/types/text-colors";

export type H3Props = {
  className?: string;
  size?: FontSizeTypes;
  color?: TextColorsTypes;
} & Omit<React.HTMLProps<HTMLHeadingElement>, "size">;