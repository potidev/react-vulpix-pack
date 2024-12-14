import { ReactNode } from "react";

export type DividedLoginPageProps = {
  logoTitle?: string;
  logoSrc?: string;
  logoClassName?: string;
  caption?: string;
  subCaption?: string;
  children: ReactNode;
};