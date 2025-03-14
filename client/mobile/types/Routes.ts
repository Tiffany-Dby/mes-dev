export enum AppRoutes {
  home = "/",
  categories = "/categories",
  account = "/account",
  signUp = "/sign-up",
  signIn = "/sign-in",
  checkout = "/checkout",
  me = "/api/auth/me",
}

export enum ApiRoutes {
  url = "http://localhost:8000",
  signUp = "/api/auth/register",
  signIn = "/api/auth/login",
  me = "/api/auth/me",
  updateUser = "/api/users/update",
}
