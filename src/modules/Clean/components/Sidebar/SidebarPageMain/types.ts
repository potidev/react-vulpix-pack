import { ReactNode } from "react";

export type SidebarPageMainProps = {
  className?: string;
  children: ReactNode;
  fixedHeader?: ReactNode;
  fixedHeaderOnlyOnMobile?: ReactNode;
  defaultToolbarPadding?: boolean;
  defaultContentPadding?: boolean;
};