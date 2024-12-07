import React, { ReactNode } from "react";

type PositionScreenProps = {
  children: ReactNode;
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  withoutPadding?: boolean;
  style?: React.CSSProperties;
}

export const PositionScreen = ({ children, justifyContent = "flex-start", alignItems = "flex-start", withoutPadding = false, style }: PositionScreenProps) => {
  return (
    <div style={{ boxSizing: "border-box", display: "flex", height: "100vh", width: "100vw", alignItems, justifyContent, padding: withoutPadding ? undefined : "24px", ...style }}>
      {children}
    </div>
  );
};