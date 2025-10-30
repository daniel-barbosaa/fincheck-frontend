import { wait } from "../../utils/wait";
import { api } from "../api";

export interface SignupParams {
  name: string;
  email: string;
  password: string;
}
interface SignupResponse {
  accessToken: string;
}

export async function signUp(params: SignupParams) {
  await wait(1000);
  const { data } = await api.post<SignupResponse>("/auth/signup", params);
  return data;
}
