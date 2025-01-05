export type TextProps = {
  className?: string;
  asChild?: boolean;
  color?: "default" | "soft";
} & Omit<React.HTMLProps<HTMLHeadingElement>, "size" | "color">;