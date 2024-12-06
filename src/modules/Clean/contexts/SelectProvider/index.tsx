"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface SelectContextType {
  selectedValue: string | null;
  setSelectedValue: (value: string) => void;
}

const SelectContext = createContext<SelectContextType | undefined>(undefined);

interface SelectProps {
  children: ReactNode;
  className?: string;
}

export const SelectProvider: React.FC<SelectProps> = ({ children, className }) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <SelectContext.Provider value={{ selectedValue, setSelectedValue }}>
      {children}
    </SelectContext.Provider>
  );
};

export const useSelectContext = (): SelectContextType => {
  const context = useContext<SelectContextType | undefined>(SelectContext);
  if (!context) {
    throw new Error("useSelectContext must be used within a Select");
  }
  return context;
};
