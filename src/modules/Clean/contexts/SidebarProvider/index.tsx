"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

type SidebarContextData = {
  sidebarIsOpen: boolean;
  openSidebar: (state: boolean) => void;
  toggleSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextData>(
  {} as SidebarContextData,
);

type SidebarProviderProps = {
  children: ReactNode;
};

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(((state) => !state));
  };

  return (
    <SidebarContext.Provider value={{
      sidebarIsOpen: isOpen,
      openSidebar: setIsOpen,
      toggleSidebar,
    }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
