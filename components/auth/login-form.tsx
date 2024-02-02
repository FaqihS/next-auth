"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, TLoginSchema } from "@/schemas";

import { useForm } from "react-hook-form";

import { CardWrapper } from "./card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

export function LoginForm() {
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: TLoginSchema) {
    console.log(values);
  }

  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have Account ?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Email </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="your-email@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Password </FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      placeholder="********" 
                      type="password" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError />
          <FormSuccess />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
