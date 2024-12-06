import React from "react";
import { Loader2 } from "lucide-react"
import { cn } from "@/utils/ClassNameUtils";

import { ButtonSpinnerProps } from "./types";
import styles from "./styles.module.scss";

export const ButtonSpinner = ({ className }: ButtonSpinnerProps) => {
  return (
    <Loader2 className={cn.get(className, styles.spinner)} />
  );
};