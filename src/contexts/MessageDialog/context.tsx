"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { MessageDialogParams } from "./types";
import { MessageDialog } from "@/kit";

type MessageDialogContextData = {
  showMessageDialog: (visibility: boolean, params?: MessageDialogParams) => void;
};

export const MessageDialogContext = createContext<MessageDialogContextData>(
  {} as MessageDialogContextData,
);

type MessageDialogProviderProps = {
  children: ReactNode;
};

const defaultValues: MessageDialogParams = {
  primaryButtonTitle: "Fechar",
  variant: "default",
}

export const MessageDialogProvider = ({ children }: MessageDialogProviderProps) => {
  const [visibility, setVisibility] = useState(false);
  const [alertParams, setAlertParams] = useState<MessageDialogParams>(defaultValues);
  const [primaryButtonLoading, setPrimaryButtonLoading] = useState<boolean>(false);
  
  const closeDialog = () => {
    setVisibility(false);  

    setTimeout(() => {
      setAlertParams(defaultValues);
      setPrimaryButtonLoading(false);
    }, 200);
  }

  const showMessageDialog = (visibility: boolean, params?: MessageDialogParams) => {
    if(visibility) {
      setVisibility(true);
    } else {
      closeDialog();
    }
    setAlertParams({
      ...defaultValues,
      ...params
    });
  }

  return (
    <MessageDialogContext.Provider value={{ showMessageDialog }}>
      <MessageDialog 
        onOpenChange={setVisibility} 
        open={visibility} 
        defaultOpen={false}
        title={alertParams.title}
        description={alertParams.description}
        variant={alertParams.variant}
        primaryButtonTitle={alertParams.primaryButtonTitle}
        primaryButtonLoading={primaryButtonLoading}
        onClickPrimaryButton={() => alertParams.onClickPrimaryButton({
          closeDialog,
          setLoading: setPrimaryButtonLoading,
        })}
      />
      {children}
    </MessageDialogContext.Provider>
  );
};

export const useMessageDialog = () => useContext(MessageDialogContext);
