import React, { useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, Button } from "@/components";

import { MessageDialogProps } from "./types";
import { Loader2 } from "lucide-react";

export const MessageDialog = ({ title, description, primaryButtonTitle, primaryButtonProps, variant, onClickPrimaryButton, primaryButtonLoading = false, ...rest }: MessageDialogProps) => {
  return (
    <AlertDialog {...rest}>
      <AlertDialogContent>
        <AlertDialogHeader>
          {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
          {
            description && (
              <AlertDialogDescription>
              {description}
            </AlertDialogDescription>
            )
          }
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button type="button" fullWidth className="w-full sm:w-fit" disabled={primaryButtonLoading} variant={variant} {...primaryButtonProps} onClick={onClickPrimaryButton}>
            {primaryButtonLoading && <Loader2 className="animate-spin" />}
            {primaryButtonTitle}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};