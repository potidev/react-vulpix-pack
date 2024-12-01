import { SidebarHeaderProps } from "../SidebarHeader";

export type SidebarContainerProps = {
  children?: React.ReactNode;
  className?: string;
  listClassName?: string;
  contentClassName?: string;
} & SidebarHeaderProps;