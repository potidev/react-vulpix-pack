import React from "react";

import { CardDescriptionProps } from "./types";
import { Paragraph } from "@/modules/Common";

export const CardDescription = ({ color = "soft", children, ...props }: CardDescriptionProps) => {
  return (
    <Paragraph color={color} {...props}>
      {children}
    </Paragraph>
  );
};