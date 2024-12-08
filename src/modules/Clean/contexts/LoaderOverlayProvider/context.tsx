"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { Spinner, SpinnerProps } from "../../components";
import styles from "./styles.module.scss";

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
    setSpinnerProps(params);
  };

  return (
    <LoaderOverlayContext.Provider value={{ showLoaderOverlay }}>
      {children}
        {visibility && (
          <div className={styles.overlay}>
            <Spinner {...spinnerProps} />
          </div>
        )}
    </LoaderOverlayContext.Provider>
  );
};

export const useLoaderOverlay = () => useContext(LoaderOverlayContext);
