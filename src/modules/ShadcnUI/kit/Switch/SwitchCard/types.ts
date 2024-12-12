import { ReactNode } from "react";

export type SwitchCardProps = {
  className?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  form?: boolean;
};