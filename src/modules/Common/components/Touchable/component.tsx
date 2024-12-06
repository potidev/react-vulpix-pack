import React from "react";

import { cn } from "@/utils/ClassNameUtils";
import { useFontSizeClass } from "@/hooks/ClassName";

import { TouchableProps } from "./types";
import styles from "./styles.module.scss";

export const Touchable = ({ fontSize = "regular", ...props }: TouchableProps) => {
  const fontSizeClass = useFontSizeClass(fontSize);

  if(props.type === "a") {
    return (
      <a className={cn.get(fontSizeClass, props.className)} target={props.aTarget} onClick={props.onClick}>
        {props.children}
      </a>
    )
  }

  if(props.type === "button") {
    return (
      <button className={cn.get(styles.resetButton, props.className)} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
};