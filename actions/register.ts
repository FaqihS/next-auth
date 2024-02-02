"use server";

import { RegisterSchema, TRegisterSchema } from "@/schemas";



export async function register (values: TRegisterSchema){
  
  const validatedFields = RegisterSchema.safeParse(values)

  if(!validatedFields){
    return {error: "Invalid fields"}
  }

  return {success: "Email sent!"}
}
