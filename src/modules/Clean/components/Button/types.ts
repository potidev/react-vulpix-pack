import { VariantProps } from "class-variance-authority"
import { buttonVariants } from "./component";
import { ColorTypes } from "@/types/color";


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?: ColorTypes;
}