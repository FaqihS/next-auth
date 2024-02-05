'use client';

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";



export function Social() {
  function onClick(provider: "google" | "github"){
    signIn(provider,{
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });

  }

  return(
    <div className="flex items-center  w-full gap-2">
      <Button 
        variant='outline' 
        size='lg' 
        className="w-full"
        onClick={()=> onClick('google') }
      >
        <FcGoogle className="size-5"/>
      </Button>
      <Button 
        variant='outline' 
        size='lg' 
        className="w-full"
        onClick={()=> onClick('github') }
      >
        <FaGithub  className="size-5" />
      </Button>
    </div>
  )
}
