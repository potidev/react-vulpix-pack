import { SidebarContainer } from "./SidebarContainer";
import { SidebarControlButton } from "./SidebarControlButton";
import { SidebarDropdown, SidebarDropdownProps } from "./SidebarDropdown";
import { SidebarItem, SidebarItemProps } from "./SidebarItem";
import { SidebarLogo } from "./SidebarLogo";
import { SidebarPage, SidebarPageProps } from "./SidebarPage";
import { SidebarPageMain } from "./SidebarPageMain";
import { SidebarToolbar } from "./SidebarToolbar";


export const Sidebar = {
  Root: SidebarPage,
  Container: SidebarContainer,
  ControlButton: SidebarControlButton,
  Dropdown: SidebarDropdown,
  Item: SidebarItem,
  Logo: SidebarLogo,
  Main: SidebarPageMain,
  Toolbar: SidebarToolbar,
};

export { SidebarDropdownItemProps } from "./SidebarDropdownItem";
export { SidebarPageProps }
export { SidebarItemProps }