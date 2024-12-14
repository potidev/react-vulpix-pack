"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { Spinner, SpinnerProps } from "../../components";

type LoaderOverlayContextData = {
  showLoaderOverlay: (visibility: boolean, params?: SpinnerProps) => void;
};

export const LoaderOverlayContext = createContext<LoaderOverlayContextData>(
  {} as LoaderOverlayContextData,
);

type LoaderOverlayProviderProps = {
  children: ReactNode;
};

export const LoaderOverlayProvider = ({ children }: LoaderOverlayProviderProps) => {
  const [visibility, setVisibility] = useState(false);
  const [spinnerProps, setSpinnerProps] = useState<SpinnerProps>();

  const showLoaderOverlay = (visibility: boolean, params?: SpinnerProps) => {
    setVisibility(visibility);
    setSpinnerProps(params || {  size: "large" });
  };

  return (
    <LoaderOverlayContext.Provider value={{ showLoaderOverlay }}>
      {children}
        {visibility && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <Spinner {...spinnerProps} />
          </div>
        )}
    </LoaderOverlayContext.Provider>
  );
};

export const useLoaderOverlay = () => useContext(LoaderOverlayContext);
