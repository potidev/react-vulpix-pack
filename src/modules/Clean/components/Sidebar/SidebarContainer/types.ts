import { ShapeColorsTypes } from "@/types/shape-colors";
import { SidebarHeaderProps } from "../SidebarHeader";

export type SidebarContainerProps = {
  children?: React.ReactNode;
  className?: string;
  listClassName?: string;
  contentClassName?: string;
  color?: ShapeColorsTypes;
} & SidebarHeaderProps;