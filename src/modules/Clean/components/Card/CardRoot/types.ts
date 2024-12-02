import { ReactNode } from "react";

export type CardRootProps = {
  className?: string;
  children?: ReactNode;
  background?: "soft" | "default";
  hoverEffect?: boolean;
  cursorPointer?: boolean;
};