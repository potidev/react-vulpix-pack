"use client";

import React, { useEffect, useReducer } from "react";

import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input, InputProps, LabelProps } from "@/components";
import { FieldValues, Path, useFormContext, UseFormReturn } from "react-hook-form";

export type InputCurrencyProps<T extends FieldValues> = Omit<InputProps, "form"> & {
  name: Path<T>;
  label?: string;
  form: UseFormReturn<T>;
  labelClassName?: string;
  inputClassName?: string;
  labelProps?: Omit<LabelProps, "children">;
};

const toCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

export function InputCurrency<T extends FieldValues>({
  name,
  label,
  form,
  className,
  inputClassName,
  labelProps,
  ...props
}: InputCurrencyProps<T>) {
  const { watch, control } = useFormContext();
  const formValue = watch(name);

  const [value, setValue] = useReducer((_: string, next: string) => {
    if (!next) return "";
    const numericValue = Number(next.replace(/\D/g, "")) / 100;
    return numericValue ? toCurrency(numericValue) : "";
  }, "");

  useEffect(() => {
    setValue(formValue ? toCurrency(formValue) : "");
  }, [formValue]);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel {...labelProps}>{label}</FormLabel>}
          <FormControl>
            <Input
              id={name}
              type="text"
              inputMode="decimal"
              {...props}
              {...field}
              className={inputClassName}
              onChange={(ev) => {
                const inputValue = ev.target.value;
                setValue(inputValue);
                const numericValue =
                  Number(inputValue.replace(/\D/g, "")) / 100;
                field.onChange(numericValue || 0);
              }}
              value={value}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}