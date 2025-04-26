import * as LabelPrimitive from "@radix-ui/react-label";
import { VariantProps } from "class-variance-authority";
import { labelVariants } from "./component";

export type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants> & {
  required?: boolean;
  requiredLabel?: string;
  requiredClassName?: string;
  requiredContainerClassName?: string;
};
