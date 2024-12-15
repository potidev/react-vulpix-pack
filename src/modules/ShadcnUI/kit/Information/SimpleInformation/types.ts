import { ResponsideIndicator } from "@/types/tailwind-responsive";
import { ReactNode } from "react";

export type SimpleInformationProps = {
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
  contentClassName?: string;
  label: string;
  value?: string;
  defaultValue?: string;
  icon?: ReactNode;
  tipMessage?: string;
  valueTitle?: string;
  collapsedValueLineClamp?: number;
  copyButton?: boolean;
  copyButtonTitle?: string;
  copiedMessage?: string;
  copiedMessageDuration?: number;
  responsiveColon?: ResponsideIndicator[];
  colonContent?: string;
}