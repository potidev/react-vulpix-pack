import { ReactNode } from "react";

export type SimpleStatsCardProps = {
  className?: string;
  value: ReactNode;
  valueClassName?: string;
  description?: string;
  descriptionClassName?: string;
  valueDescription?: ReactNode;
  valueDescriptionClassName?: string;
  title: string;
  titleClassName?: string;
  icon: React.ComponentType<{ className?: string }>;
  iconClassName?: string;
  children?: ReactNode;
};