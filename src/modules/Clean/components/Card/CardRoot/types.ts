import { ShapeColorsTypes } from "@/types/shape-colors";
import { ReactNode } from "react";

export type CardRootProps = {
  className?: string;
  children?: ReactNode;
  color?: ShapeColorsTypes;
  hoverEffect?: boolean;
  cursorPointer?: boolean;
};