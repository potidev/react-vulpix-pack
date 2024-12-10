type AnchorTarget = '_self' | '_blank' | '_parent' | '_top' | string | undefined;

export type BreadcrumbItem = {
  label: string;
  href?: string;
  target?: AnchorTarget;
}

export type SidebarToolbarProps = {
  className?: string;
  breadcrumbs?: BreadcrumbItem[];
};