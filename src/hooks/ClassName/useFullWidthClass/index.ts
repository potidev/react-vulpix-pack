import styles from "./styles.module.scss";

export const useFullWidthClass = (fullWidth?: boolean) => {
  if(fullWidth === true) {
    return styles.fullWidth;
  }
  return undefined; 
}