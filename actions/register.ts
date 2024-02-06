"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";
import { RegisterSchema, TRegisterSchema } from "@/schemas";

import bcrypt from "bcryptjs";



export async function register (values: TRegisterSchema){
  
  const validatedFields = RegisterSchema.safeParse(values)


  if(!validatedFields.success){
    return {error: "Invalid fields"}
  }

  const { email,password,name } = validatedFields.data

  const hashedPassword = await bcrypt.hash(password,10)

  const existingUser = await getUserByEmail(email);
  if(existingUser) {
    return { error: "Email already registered"}
  }

  const newUser = await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    }

  })

  if(!newUser){
    return { error: "Failed to Register, try again later"}
  }

  const verificationToken= await generateVerificationToken(email)

  await sendVerificationEmail(verificationToken.email,verificationToken.token);

  return {success: "Confirmation email sent!"}
}
