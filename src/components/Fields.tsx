import { charField, emailField, passwordField } from "@/lib/formField"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"

type CharFieldProps = {
  field: charField;
  control: any;
}

export function CharField({field, control}: CharFieldProps) {
  return (
    <>
    <FormField
      control={control}
      name={field.name}
      render={({ field: inputField }) => (
        <FormItem>
          <FormLabel>{ field.label }</FormLabel>
          <FormControl>
            <Input placeholder={field.placeholder} {...inputField}/>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    </>
  )
}

type EmailFieldProps = {
  field: emailField;
  control: any;
}

export function EmailField({field, control}: EmailFieldProps) {
  return (
    <>
    <FormField
      control={control}
      name={field.name}
      render={({ field: inputField }) => (
        <FormItem>
          <FormLabel>{ field.label }</FormLabel>
          <FormControl>
            <Input placeholder={field.placeholder} type={field.type} {...inputField}/>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    </>
  )
}

type PasswordFieldProps = {
  field: passwordField;
  control: any;
}

export function PasswordField({field, control}: PasswordFieldProps) {
  return (
    <>
    <FormField
      control={control}
      name={field.name}
      render={({ field: inputField }) => (
        <FormItem>
          <FormLabel>{ field.label }</FormLabel>
          <FormControl>
            <Input placeholder={field.placeholder} type={field.type} {...inputField}/>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    </>
  )
}
