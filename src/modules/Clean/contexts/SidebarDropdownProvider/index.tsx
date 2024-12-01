"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

type SidebarDropdownContextData = {
  currentOpenId?: string;
  setCurrentOpenId: (id?: string) => void;
  singleOpen?: boolean;
};

export const SidebarDropdownContext = createContext<SidebarDropdownContextData>(
  {} as SidebarDropdownContextData,
);

type SidebarDropdownProviderProps = {
  children: ReactNode;
  singleOpen?: boolean;
};

export const SidebarDropdownProvider = ({ children, singleOpen }: SidebarDropdownProviderProps) => {
  const [openId, setOpenId] = useState<string>();
  
  const setCurrentOpenId = (id: string) => {
    setOpenId((state) => state === id ? undefined : id);
  }

  return (
    <SidebarDropdownContext.Provider value={{
      currentOpenId: openId,
      setCurrentOpenId,
      singleOpen,
    }}>
      {children}
    </SidebarDropdownContext.Provider>
  );
};

export const useSidebarDropdownContext = () => useContext(SidebarDropdownContext);
