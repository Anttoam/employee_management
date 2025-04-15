'use client'
import GeneticForms from "@/components/Form";
import { charField, emailField, passwordField } from "@/lib/formField";
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
  const fields = [
    new charField("last_name", "姓", "姓を入力してください", true), 
    new charField("first_name", "名", "名を入力してください", true), 
    new charField("last_name_kana", "セイ", "セイを入力してください", false), 
    new charField("first_name_kana", "メイ", "メイを入力してください", false), 
    new charField("login_id", "ログインID", "ログインIDを入力してください", true), 
    new emailField("email", "メールアドレス", "メールアドレスを入力してください", true), 
    new passwordField("password", "パスワード", "パスワードを入力してください", true), 
  ]

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="flex justify-center items-center mt-6">
      <GeneticForms schema={formSchema} fields={fields} onSubmit={onSubmit}/>
    </div>
  );
}
