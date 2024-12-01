
import React from "react";
import styles from './styles.module.scss';
import { TitleProps } from "./types";

export const Title = ({ label }: TitleProps) => {
  return <title className={styles.title}>{label}</title>;
};