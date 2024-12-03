export type SidebarItemProps = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  className?: string;
  onClick?: () => void;
};