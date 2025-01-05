import { VariantProps } from "class-variance-authority";
import { ButtonProps, buttonVariants } from "../../components";

export type OnClickConfirmParams = {
  closeDialog: () => void;
  setLoading: (loading: boolean) => void
}

export type ConfirmationDialogParams = {
  title?: string;
  description?: string;
  confirmButton?: string;
  cancelButton?: string;
  onClickConfirm?: (params: OnClickConfirmParams) => void;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  buttonProps?: ButtonProps;
}