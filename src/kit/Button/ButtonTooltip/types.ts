import { ButtonProps, Tooltip, TooltipContent } from "@/components";
import { ReactNode } from "react";

export type ButtonTooltipProps = ButtonProps & {
  tooltip: ReactNode;
  tooltipProps?: Omit<React.ComponentPropsWithoutRef<typeof Tooltip>, "children">;
  tooltipContentProps?: Omit<React.ComponentPropsWithoutRef<typeof TooltipContent>, "children">;
};