import type { User } from "../../types/User";
import { api } from "../api";

type MeResponse = User;

export async function user() {
  const { data } = await api.get<MeResponse>("/users/me");
  return data;
}
