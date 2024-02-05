/**
 * Public Accessible Route, these not require authentication 
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
];

/**
 * Routes used for authentication
 * These route redirect logged in user to "/settings"
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
];

/**
 * Prefix for API authentication routes
 * Used for authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
  * Default redirect path after Logged in
  * @type {string}
  */
export const DEFAULT_LOGIN_REDIRECT = "/settings"
