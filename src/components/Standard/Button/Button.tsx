import React from "react";
import { ButtonProps } from "./types";

export const Button = ({ label }: ButtonProps) => {
  return <button>{label}</button>;
};