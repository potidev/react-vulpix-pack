import { TooltipProps } from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

export type TipIconProps = {
  className?: string;
  contentClassName?: string;
  stringContentClassName?: string;
  toolTipProps?: Omit<TooltipProps, "children">;
  message: ReactNode;
  type?: "question" | "alert" | "ban" | "ellipsis" | "copy";
  color?: "default" | "soft";
};
