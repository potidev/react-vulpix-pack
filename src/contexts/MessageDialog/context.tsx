"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, Button } from "../../components";
import { MessageDialogParams } from "./types";
import { Loader2 } from "lucide-react";

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
  buttonTitle: "Fechar",
  variant: "default",
}

export const MessageDialogProvider = ({ children }: MessageDialogProviderProps) => {
  const [visibility, setVisibility] = useState(false);
  const [alertParams, setAlertParams] = useState<MessageDialogParams>(defaultValues);
  const [loading, setLoading] = useState<boolean>(false);
  
  const closeDialog = () => {
    setVisibility(false);  

    setTimeout(() => {
      setAlertParams(defaultValues);
      setLoading(false);
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
      ...params,
      buttonProps: {
        ...defaultValues.buttonProps,
        variant: params.variant,
        ...params.buttonProps,
      }
    });
  }

  return (
    <MessageDialogContext.Provider value={{ showMessageDialog }}>
      <AlertDialog onOpenChange={setVisibility} open={visibility} defaultOpen={false}>
        <AlertDialogContent>
          <AlertDialogHeader>
            {alertParams.title && <AlertDialogTitle>{alertParams.title}</AlertDialogTitle>}
            {
              alertParams && (
                <AlertDialogDescription>
                {alertParams.description}
              </AlertDialogDescription>
              )
            }
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button type="button" fullWidth className="w-full sm:w-fit" disabled={loading} {...alertParams.buttonProps} onClick={() => alertParams.onClickButton({
              closeDialog,
              setLoading,
            })}>
              {loading && <Loader2 className="animate-spin" />}
              {alertParams.buttonTitle}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {children}
    </MessageDialogContext.Provider>
  );
};

export const useMessageDialog = () => useContext(MessageDialogContext);
