import { ReactNode } from "react";
import { CardProps } from "@/components";

export type CardWithHeaderProps = CardProps & {
  header?: ReactNode;
  headerClassName?: string;
};