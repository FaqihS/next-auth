import { CardWrapper } from "./card-wrapper";

export function LoginForm(){

  return( 
    <CardWrapper  
      headerLabel="Welcome Back"
      backButtonLabel="Don't have Account ?"
      backButtonHref="/auth/register"
      showSocial
    > 
      Login Form
    </CardWrapper>
  );
}
