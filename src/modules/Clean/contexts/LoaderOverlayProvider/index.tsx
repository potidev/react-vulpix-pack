"use client";

import React, { createContext, useContext, useState } from 'react';
import styles from './styles.module.scss';
import { Spinner, SpinnerProps } from '../../components';

interface LoaderOverlayContextValue {
  show: (visibility: boolean, params?: SpinnerProps) => void;
}

const LoaderOverlayContext = createContext<LoaderOverlayContextValue | undefined>(undefined);

export const LoaderOverlayProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const [spinnerProps, setSpinnerProps] = useState<SpinnerProps>();

  const show = (visibility: boolean, params?: SpinnerProps) => {
    setVisibility(visibility);
    setSpinnerProps(params);
  };

  return (
    <LoaderOverlayContext.Provider value={{ show }}>
      {children}
      {visibility && (
        <div className={styles.overlay}>
          <Spinner {...spinnerProps} />
        </div>
      )}
    </LoaderOverlayContext.Provider>
  );
};

export const useLoaderOverlay = (): LoaderOverlayContextValue => {
  const context = useContext(LoaderOverlayContext);
  if (!context) {
    throw new Error('useLoader must be used within a LoaderOverlayProvider');
  }
  return context;
};
