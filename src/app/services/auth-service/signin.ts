import { wait } from "../../utils/wait";
import { api } from "../api";

export interface SigninParams {
  email: string;
  password: string;
}
interface SigninResponse {
  accessToken: string;
}

export async function signIn(params: SigninParams) {
  await wait(4000);
  const { data } = await api.post<SigninResponse>("/auth/signin", params);
  return data;
}
