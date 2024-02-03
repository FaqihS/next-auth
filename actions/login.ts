"use server";

import { LoginSchema, TLoginSchema } from "@/schemas";



export async function login (values: TLoginSchema){
  
  const validatedFields = LoginSchema.safeParse(values)

  if(!validatedFields.success){
    return {error: "Invalid fields"}
  }

  return {success: "Email sent!"}
}
