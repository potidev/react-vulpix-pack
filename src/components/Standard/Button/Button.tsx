
import React from "react";

import styles from './styles.module.scss';
import { ButtonProps } from "./types";

export const Button = ({ label, onClick }: ButtonProps) => {
  return <button className={styles.button} onClick={onClick}>{label}</button>;
};