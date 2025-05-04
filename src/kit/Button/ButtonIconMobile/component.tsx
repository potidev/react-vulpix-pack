import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components";

export type ButtonIconMobileProps = Omit<ButtonProps, "children" | "size"> & {
  buttonTitle: ReactNode;
  icon: ReactNode;
};

export const ButtonIconMobile = ({ className, buttonTitle, icon, ...props }: ButtonIconMobileProps) => {
  return (
    <Button size="iconOnMobile" {...props}>
      {icon}
      {buttonTitle ? <aside className="hidden md:flex">{buttonTitle}</aside> : null}
    </Button>
  );
};