import React from "react";

import { ParagraphProps } from "./types";
import { Text } from "../Text";

const Paragraph = React.forwardRef<
  HTMLHeadingElement,
  ParagraphProps
>(({
  color="soft",
  ...props
}, ref) => {
  return (
    <Text color={color} {...props} ref={ref} />
  )
});

Paragraph.displayName = "Paragraph"

export { Paragraph };