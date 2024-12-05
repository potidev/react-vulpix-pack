import React from "react";
import styles from "./styles.module.scss";
import { InputProps } from "./types";
import { cn } from "@/utils";
import { useBorderColorFocusClass, useShapeBackgroundColorClass } from "@/hooks";
import { Label, Paragraph } from "@/modules/Common";

export const Input = ({ 
  label, 
  className, 
  inputClassName, 
  labelClassName, 
  backgroundColor = "default", 
  color = "text", 
  error,
  errorMessage,
  helperMessage,
  ...props 
}: InputProps) => {
  const inputBackgroundColorClass = useShapeBackgroundColorClass(backgroundColor);
  const inputBorderColorFocusClass = useBorderColorFocusClass(color);

  return (
    <div className={cn.get(styles.inputWrapper, className)}>
      {label && <Label color={error === true ? "danger" : "default"} size="small" className={cn.get(labelClassName)}>{label}</Label>}
      <input className={cn.get(styles.input, inputBackgroundColorClass, inputBorderColorFocusClass, inputClassName)} {...props} />
      {errorMessage || helperMessage ? <Paragraph size="tiny" color={error ? "danger" : "soft"}>{errorMessage || helperMessage}</Paragraph> : null}
    </div>
  );
};