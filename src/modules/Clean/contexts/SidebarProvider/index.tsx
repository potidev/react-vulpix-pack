"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { SidebarPage, SidebarPageProps } from "../../components/Sidebar/SidebarPage";

type SidebarContextData = {
  sidebarIsOpen: boolean;
  openSidebar: (state: boolean) => void;
  toggleSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextData>(
  {} as SidebarContextData,
);

export type SidebarProviderProps = {
  children: ReactNode;
} & SidebarPageProps;

export const SidebarProvider = ({ children, ...pageProps }: SidebarProviderProps) => {
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
      <SidebarPage {...pageProps}>
        {children}
      </SidebarPage>
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
