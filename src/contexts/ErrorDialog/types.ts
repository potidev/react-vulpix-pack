import { VariantProps } from "class-variance-authority";
import { ButtonProps, buttonVariants } from "../../components";

export type OnClickButtonParams = {
  closeDialog: () => void;
  setLoading: (loading: boolean) => void
}

export type ErrorDialogParams = {
  title?: string;
  description?: string;
  buttonTitle?: string;
  onClickButton?: (params: OnClickButtonParams) => void;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  buttonProps?: ButtonProps;
}