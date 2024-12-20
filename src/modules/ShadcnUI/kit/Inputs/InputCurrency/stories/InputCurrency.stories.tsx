import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { InputCurrency, InputCurrencyProps } from '../component';
import { Button, Form } from "../../../../components"
import { inputCurrencyExempleSchema } from "./schemas";

const meta: Meta<any> = {
  title: 'Shadcn UI/Kit/Inputs/InputCurrency',
  component: InputCurrency,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'black',
      values: [
        { name: 'black', value: '#000000' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { 
  },
  decorators: (Story) => {
    return (
      <Story />
    )
  }
};

export default meta;
type Story = StoryObj<any>;

export const Usage: Story = {
  render: () => {
    const form = useForm<z.infer<typeof inputCurrencyExempleSchema>>({
      resolver: zodResolver(inputCurrencyExempleSchema),
      defaultValues: {
        value: 0,
      }
    });
  
    function onSubmit(values: z.infer<typeof inputCurrencyExempleSchema>) {
      console.log(values);
    }
  
    return (
      <Form {...form}>
        <form
          className="flex flex-col gap-8"
          onSubmit={form.handleSubmit(onSubmit)}
        >
         
          <InputCurrency
            form={form}
            label="Value"
            name="value"
            placeholder="Plan value"
          />
  
          <Button type="submit">
            Submit
          </Button>
        </form>
      </Form>
    );
  }
};

export const WithDefaultValue: Story = {
  render: () => {
    const form = useForm<z.infer<typeof inputCurrencyExempleSchema>>({
      resolver: zodResolver(inputCurrencyExempleSchema),
      defaultValues: {
        value: 79.9,
      }
    });
  
    function onSubmit(values: z.infer<typeof inputCurrencyExempleSchema>) {
      console.log(values);
    }
  
    return (
      <Form {...form}>
        <form
          className="flex flex-col gap-8"
          onSubmit={form.handleSubmit(onSubmit)}
        >
         
          <InputCurrency
            form={form}
            label="Value"
            name="value"
            placeholder="Plan value"
          />
  
          <Button type="submit">
            Submit
          </Button>
        </form>
      </Form>
    );
  }
};