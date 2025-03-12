import { ButtonProps, ButtonVariant } from "@/components/Button";
import { MessageDialogProps } from "@/kit/Alert/MessageDialog";

export type OnClickButtonParams = {
  setLoading: (loading: boolean) => void;
  closeDialog: () => void;
};

export type MessageDialogParams = {
  title?: string;
  description?: string;
  primaryButtonTitle?: string;
  onClickPrimaryButton?: (params: OnClickButtonParams) => void;
  variant?: ButtonVariant;
  primaryButtonProps?: ButtonProps;
}