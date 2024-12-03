import { FontSizeTypes } from "@/types/font-sizes";

export type CardTitleProps = {
  className?: string;
  size?: FontSizeTypes;
} & Omit<React.HTMLProps<HTMLHeadingElement>, "size" | "color">;