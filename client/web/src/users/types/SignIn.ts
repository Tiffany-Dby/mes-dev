export interface UserResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface SignInResponse {
  access: string;
  refresh: string;
  user: UserResponse;
}

export interface SignInData {
  email: string;
  password: string;
}
