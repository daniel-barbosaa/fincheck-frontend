import type { Accountype } from "../../types/account";
import { api } from "../api";

export interface BanckAccountParams {
  name: string;
  initialBalance: number;
  type: Accountype;
  color: string;
}

export async function create(params: BanckAccountParams) {
  const { data } = await api.post("/bank-account", params);
  return data;
}
