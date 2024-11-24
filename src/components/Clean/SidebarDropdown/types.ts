import { ReactNode } from "react";
import { SidebarDropdownItemProps } from "../SidebarDropdownItem/types";

export type SidebarDropdownProps = {
  className?: string;
  title?: string;
  icon: ReactNode;
  options?: SidebarDropdownItemProps[];
  openId?: string;
};