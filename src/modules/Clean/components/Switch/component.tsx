import React from "react";

import { cn } from "@/utils/ClassNameUtils";

import { SwitchProps } from "./types";
import styles from './styles.module.scss';
import { useBackgroundColorClass } from "@/hooks/ClassName";
import { Label } from "@/modules/Common";

export const Switch = ({ className, checked = false, disabled, color = "text", label, onChange, id, labelSize, labelColor, labelClassName, labelHtmlFor, containerClassName, labelNoSelectable = true }: SwitchProps) => {
  const switchThumbCheckedClass = checked ? styles.switchThumbChecked : '';
  const switchTrackCheckedClass = useBackgroundColorClass(color);

  if (!label && containerClassName) {
    console.warn(
      `[Switch] Invalid prop 'containerClassName': This class has used just when 'label' prop is set.`
    );
  }

  const getSwitchTrackFinalClass = () => {
    if (!disabled && checked) {
      return switchTrackCheckedClass;
    }

    if (!disabled && !checked) {
      return styles.switchTrackUnchecked;
    }

    if (disabled) {
      return styles.switchTrackDisabled;
    }
  }

  const handleClick = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const renderSwitch = () => {
    return (
      <button
        className={cn.get(styles.switch, className)}
        onClick={handleClick}
        value={`${checked}`}
        role="switch"
        id={id}
      >
        <div className={cn.get(styles.switchTrack, getSwitchTrackFinalClass())}>
          <span className={cn.get(styles.switchThumb, switchThumbCheckedClass)} />
        </div>
      </button>
    );
  }

  if (label) {
    return (
      <div className={cn.get(styles.switchContainerWithLabel, containerClassName)}>
        {renderSwitch()}
        <Label noSelectable={labelNoSelectable} htmlFor={labelHtmlFor} color={labelColor} size={labelSize} className={labelClassName}>{label}</Label>
      </div>
    )
  }

  return renderSwitch();
};