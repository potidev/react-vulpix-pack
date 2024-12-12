import { ReactNode } from "react";

export type SimpleChartCardProps = {
  className?: string;
  description?: string;
  title: string;
  icon?: ReactNode;
  children?: ReactNode;
};