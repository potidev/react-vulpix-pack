import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
  color?: "text" | "primary";
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
}