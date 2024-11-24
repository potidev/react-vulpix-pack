import React from "react";

import styles from "./styles.module.scss";
import { TouchableProps } from "./types";
import { cn } from "@/utils/ClassNameUtils";

export const Touchable = (props: TouchableProps) => {
  if(props.type === "a") {
    return (
      <a className={props.className} target={props.aTarget} onClick={props.onClick}>
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