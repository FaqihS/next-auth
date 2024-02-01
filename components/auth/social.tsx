'use client';

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";



export function Social() {

  return(
    <div className="flex items-center  w-full gap-2">
      <Button 
        variant='outline' 
        size='lg' 
        className="w-full"
        onClick={()=>{}}
      >
        <FcGoogle className="size-5"/>
      </Button>
      <Button 
        variant='outline' 
        size='lg' 
        className="w-full"
        onClick={()=>{}}
      >
        <FaGithub  className="size-5" />
      </Button>
    </div>
  )
}
