"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, Button } from "../../components";
import { ConfirmationDialogParams } from "./types";
import { Loader2 } from "lucide-react";

type ConfirmationDialogContextData = {
  showConfirmationDialog: (visibility: boolean, params?: ConfirmationDialogParams) => void;
};

export const ConfirmationDialogContext = createContext<ConfirmationDialogContextData>(
  {} as ConfirmationDialogContextData,
);

type ConfirmationDialogProviderProps = {
  children: ReactNode;
};

const defaultValues: ConfirmationDialogParams = {
  cancelButton: "Cancelar",
  confirmButton: "Continuar",
  variant: "default",
}

export const ConfirmationDialogProvider = ({ children }: ConfirmationDialogProviderProps) => {
  const [visibility, setVisibility] = useState(false);
  const [alertParams, setAlertParams] = useState<ConfirmationDialogParams>(defaultValues);
  const [loading, setLoading] = useState<boolean>(false);
  
  const closeDialog = () => {
    setVisibility(false);  

    setTimeout(() => {
      setAlertParams(defaultValues);
      setLoading(false);
    }, 200);
  }

  const showConfirmationDialog = (visibility: boolean, params?: ConfirmationDialogParams) => {
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
    <ConfirmationDialogContext.Provider value={{ showConfirmationDialog }}>
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
            <AlertDialogCancel disabled={loading}>{alertParams.cancelButton}</AlertDialogCancel>
            <Button type="button" fullWidth className="w-full sm:w-fit" disabled={loading} {...alertParams.buttonProps} onClick={() => alertParams.onClickConfirm({
              closeDialog,
              setLoading,
            })}>
              {loading && <Loader2 className="animate-spin" />}
              {alertParams.confirmButton}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {children}
    </ConfirmationDialogContext.Provider>
  );
};

export const useConfirmationDialog = () => useContext(ConfirmationDialogContext);
