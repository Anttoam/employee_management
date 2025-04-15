'use client'
import { CharField, EmailField, PasswordField } from "@/components/Fields";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { charField, emailField, passwordField } from "@/lib/formField";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  last_name: z.string().min(1, {
    message: '姓を入力してください'
  }), 
  first_name: z.string().min(1, {
    message: '名を入力してください'
  }), 
  last_name_kana: z.string(), 
  first_name_kana: z.string(), 
  login_id: z.string().min(6, {
    message: '6文字以上入力してください', 
  }), 
  email: z.string().email(), 
  password: z.string(), 
})


export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema), 
    defaultValues: {
      last_name: '', 
      first_name: '', 
      last_name_kana: '', 
      first_name_kana: '', 
      login_id: '', 
      email: '', 
      password: '', 
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  const last_name =  new charField("last_name", "姓", "姓を入力してください", true)
  const first_name =  new charField("first_name", "名", "名を入力してください", true)
  const last_name_kana =  new charField("last_name_kana", "セイ", "セイを入力してください", false)
  const first_name_kana =  new charField("first_name_kana", "メイ", "メイを入力してください", false)
  const login_id =  new charField("login_id", "ログインID", "ログインIDを入力してください", true)
  const email =  new emailField("email", "メールアドレス", "メールアドレスを入力してください", true)
  const password =  new passwordField("password", "パスワード", "パスワードを入力してください", true)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CharField field={last_name} control={form.control}/>
        <CharField field={first_name} control={form.control}/>
        <CharField field={last_name_kana} control={form.control}/>
        <CharField field={first_name_kana} control={form.control}/>
        <CharField field={login_id} control={form.control}/>
        <EmailField field={email} control={form.control}/>
        <PasswordField field={password} control={form.control}/>
        <Button type="submit">送信</Button>
      </form>
    </Form>

  );
}
