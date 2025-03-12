import React from "react";

import { SpinnerProps, spinnerStyles } from "./types";

export const Spinner = ({ className, size }: SpinnerProps) => {
  return (
    <div
      className={spinnerStyles({ size, className })}
      role="status"
    />
  );
};