"use client";

import React from "react";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import styles from "./styles.module.scss";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../.."
import { useForm } from "react-hook-form";
import { Button } from "@/modules/Clean/components/Button";
import { Checkbox } from "../../../Checkbox";

const FormSchema = z.object({
  mobile: z.boolean().default(false).optional(),
})
 
export function Render() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert("See console.")
    console.log(data);
    /*
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
      */
  }
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem className={styles.checkboxItem}>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className={styles.div}>
                <FormLabel>
                  Use different settings for my mobile devices
                </FormLabel>
                <FormDescription>
                  You can manage your mobile notifications in the{" "}
                  <a href="/examples/forms">mobile settings</a> page.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}