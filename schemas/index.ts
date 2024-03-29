import * as z from 'zod';


export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1,{
    message: "Password is required",
  }),
})

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6,{
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1,{
    message: "Name is required",
  }),
})


export type TLoginSchema = z.infer<typeof LoginSchema>
export type TRegisterSchema = z.infer<typeof RegisterSchema>
