import { cva, VariantProps } from "class-variance-authority";

export const spinnerStyles = cva(
  "animate-spin rounded-full border-t-transparent border-default", // Classes comuns
  {
    variants: {
      size: {
        small: "h-4 w-4 border-2",
        regular: "h-6 w-6 border-[3px]",
        medium: "h-8 w-8 border-4",
        large: "h-12 w-12 border-[5px]",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

export type SpinnerProps = VariantProps<typeof spinnerStyles> & {
  className?: string;
};