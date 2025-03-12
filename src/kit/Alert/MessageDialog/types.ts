import { ButtonProps, ButtonVariant, buttonVariants } from "@/components/Button";
import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import { VariantProps } from "class-variance-authority";

export type MessageDialogProps = AlertDialogProps & {
  title?: string;
  description?: string;
  primaryButtonTitle?: string;
  onClickPrimaryButton?: () => void;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  primaryButtonProps?: ButtonProps;
  primaryButtonLoading?: boolean;
}