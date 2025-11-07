import { api } from "../api";

export interface SigninParams {
  email: string;
  password: string;
}
interface SigninResponse {
  accessToken: string;
}

export async function signIn(params: SigninParams) {
  const { data } = await api.post<SigninResponse>("/auth/signin", params);
  return data;
}
