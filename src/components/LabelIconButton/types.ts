import { ReactNode } from "react";

export type LabelIconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "default" | "soft";
};