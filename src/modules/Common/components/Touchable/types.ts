import { FontSizeTypes } from "@/types/font-sizes";
import { MouseEventHandler, ReactNode } from "react";

export type TouchableType = "a" | "button";

export type ButtonType = 'button' | 'submit' | 'reset';

export type ATarget = '_self' | '_blank' | '_parent' | '_top' | string;

export type ButtonProps = {
  type: "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  buttonType?: ButtonType;
};

export type AProps = {
  type: "a";
  href?: string;
  aTarget?: ATarget;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export type MixTouchableProps = ButtonProps | AProps;

export type TouchableProps = {
  className?: string;
  children: ReactNode;
  fontSize?: FontSizeTypes;
} & MixTouchableProps;