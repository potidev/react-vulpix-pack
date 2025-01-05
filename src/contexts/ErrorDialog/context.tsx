"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, Button } from "../../components";
import { ErrorDialogParams } from "./types";
import { Loader2 } from "lucide-react";

type ErrorDialogContextData = {
  showErrorDialog: (visibility: boolean, params?: ErrorDialogParams) => void;
};

export const ErrorDialogContext = createContext<ErrorDialogContextData>(
  {} as ErrorDialogContextData,
);

type ErrorDialogProviderProps = {
  children: ReactNode;
};

const defaultValues: ErrorDialogParams = {
  buttonTitle: "Fechar",
  variant: "destructive",
}

export const ErrorDialogProvider = ({ children }: ErrorDialogProviderProps) => {
  const [visibility, setVisibility] = useState(false);
  const [alertParams, setAlertParams] = useState<ErrorDialogParams>(defaultValues);
  const [loading, setLoading] = useState<boolean>(false);
  
  const closeDialog = () => {
    setVisibility(false);  

    setTimeout(() => {
      setAlertParams(defaultValues);
      setLoading(false);
    }, 200);
  }

  const showErrorDialog = (visibility: boolean, params?: ErrorDialogParams) => {
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
    <ErrorDialogContext.Provider value={{ showErrorDialog }}>
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
    </ErrorDialogContext.Provider>
  );
};

export const useErrorDialog = () => useContext(ErrorDialogContext);
