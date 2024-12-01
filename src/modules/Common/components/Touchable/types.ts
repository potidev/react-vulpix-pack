import { MouseEventHandler, ReactNode } from "react"; 
import { FontSizeTypes } from "@/types/font-sizes";

export type TouchableType = "a" | "button";

export type ButtonType = 'button' | 'submit' | 'reset';

export type ATarget = '_self' | '_blank' | '_parent' | '_top' | string;

type ButtonProps = {
  type: "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  buttonType?: ButtonType;
};

type AProps = {
  type: "a";
  href?: string;
  aTarget?: ATarget;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

type MixTouchableProps = ButtonProps | AProps;

export type TouchableProps = {
  className?: string;
  children: ReactNode;
  fontSize?: FontSizeTypes;
} & MixTouchableProps;