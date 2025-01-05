import { ReactNode } from "react";

export type SidebarMainContainerProps = {
  className?: string;
  children?: ReactNode;
  fixedHeader?: ReactNode;
  defaultContentPadding?: boolean;
};