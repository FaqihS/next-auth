import NextAuth from "next-auth";
import authConfig from "./auth.config";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes"

const { auth } = NextAuth(authConfig)

export default auth((req) => {

  const {nextUrl} = req;
  const isLoggedin = !!req.auth;

  const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoutes  = authRoutes.includes(nextUrl.pathname);

  if(isApiAuthRoutes) return null;
  if(isAuthRoutes) {
    if(isLoggedin){
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl));
    }
    return null;
  }
  if(!isLoggedin && !isPublicRoutes){
    return Response.redirect(new URL("/auth/login",nextUrl));
  }
  return null;
  
})

// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
