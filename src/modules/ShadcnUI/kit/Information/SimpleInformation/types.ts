import { ReactNode } from "react";

export type SimpleInformationProps = {
  className?: string;
  label: string;
  value?: string;
  defaultValue?: string;
  icon?: ReactNode;
  tipMessage?: string;
}