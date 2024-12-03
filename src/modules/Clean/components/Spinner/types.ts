import { ColorTypes } from "@/types/color";

export type SpinnerProps = {
  className?: string;
  size?: SpinnerSize;
  color?: ColorTypes;
};

export type SpinnerSize = "small" | "regular" | "large";