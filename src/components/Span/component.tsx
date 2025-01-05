import React from "react";

import { SpanProps } from "./types";
import { Text } from "../Text";

const Span = React.forwardRef<
  HTMLHeadingElement,
  SpanProps
>(({
  children,
  ...props
}, ref) => {
  return (
    <Text {...props} ref={ref} asChild>
      <span>
        {children}
      </span>
    </Text>
  )
});

Span.displayName = "Span"

export { Span };