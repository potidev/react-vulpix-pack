import { ReactNode } from "react";

export type SimpleStatsCardProps = {
  className?: string;
  value: string;
  description?: string;
  title: string;
  icon?: ReactNode;
  children?: ReactNode;
};