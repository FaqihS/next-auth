"use server";

import { LoginSchema, TLoginSchema } from "@/schemas";



export async function login (values: TLoginSchema){
  
  const validatedFields = LoginSchema.safeParse(values)

  if(!validatedFields){
    return {error: "Invalid fields"}
  }

  return {success: "Email sent!"}
}
