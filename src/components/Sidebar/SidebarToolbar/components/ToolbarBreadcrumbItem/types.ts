type AnchorTarget = '_self' | '_blank' | '_parent' | '_top' | string | undefined;

export type ToolbarBreadcrumbItemProps = {
  label: string;
  href?: string;
  target?: AnchorTarget;
  className?: string;
  separator?: boolean;
}