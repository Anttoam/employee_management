'use client'
import { charField, emailField, passwordField } from "@/lib/formField"
import { CharField, EmailField, PasswordField } from "./Fields"
import { Button } from "./ui/button"
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Field = charField | emailField | passwordField

type FormProps<T extends z.ZodTypeAny> = {
  schema: T;
  fields: Field[];
  onSubmit: (values: z.infer<T>) => void;
}

function GeneticForms<T extends z.ZodTypeAny>({schema, fields, onSubmit}: FormProps<T>) {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema), 
    defaultValues: Object.fromEntries(
      fields.map((f) => [f.name, ''])
    ) as z.infer<T>
  })
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {fields.map((f) => {
          if ( f instanceof charField ) {
            return <CharField key={f.name} field={f} control={form.control} />
          } else if ( f instanceof passwordField ) {
            return <PasswordField key={f.name} field={f} control={form.control} />
          } else if ( f instanceof emailField ) {
            return <EmailField key={f.name} field={f} control={form.control} />
          } else {
            throw new Error(`正しくないフィールドが設定されてます: ${f.constructor.name}`);
          }
        })}
        <Button type="submit">送信</Button>
      </form>
    </Form>
  )
}

export default GeneticForms
