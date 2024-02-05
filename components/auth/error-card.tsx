import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./back-button";
import { CardWrapper } from "./card-wrapper";
import { Header } from "./header";



export function ErrorCard(){

  return (
   <CardWrapper 
      headerLabel="Opps something went wrong"
      backButtonLabel="Go Back to Login"
      backButtonHref="/auth/login"
    >

      <div className="w-full flex justify-center">
        <ExclamationTriangleIcon className="size-10 text-destructive"/>

      </div>
    </CardWrapper>
  )

}
