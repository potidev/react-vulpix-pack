import { useBorderColorFocusClass, useShapeBackgroundColorClass } from "@/hooks/ClassName";
import { cn } from "@/utils"
import * as React from "react"
import { TextareaProps } from "./types";

import inputStyles from "../Input/styles.module.scss";
import styles from "./styles.module.scss";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className, backgroundColor = "shape", color = "text", ...props }, ref) => {

  const inputBackgroundColorClass = useShapeBackgroundColorClass(backgroundColor);
  const inputBorderColorFocusClass = useBorderColorFocusClass(color);

  return (
    <textarea
      className={cn.get(
        inputStyles.input,
        styles.textarea,
        inputBackgroundColorClass,
        inputBorderColorFocusClass,
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }