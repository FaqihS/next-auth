"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { RegisterSchema, TRegisterSchema } from "@/schemas";

import bcrypt from "bcrypt";



export async function register (values: TRegisterSchema){
  
  const validatedFields = RegisterSchema.safeParse(values)


  if(!validatedFields.success){
    return {error: "Invalid fields"}
  }

  const { email,password,name } = validatedFields.data

  const hashedPassword = await bcrypt.hash(password,10)

  const existingUser = await db.user.findUnique({
    where: {
      email,
    }
  });

  if(existingUser) {
    return { error: "Email already registered"}
  }

  const newUser = await getUserByEmail(email);

  if(!newUser){
    return { error: "Failed to Register, try again later"}
  }

  // TODO: Email Verification 

  return {success: "User Created"}
}
