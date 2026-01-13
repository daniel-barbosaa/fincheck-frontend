import type { Accountype } from "../../types/account";
import { api } from "../api";

export interface CreateBankAccountParams {
  name: string;
  initialBalance: number;
  type: Accountype;
  color: string;
}

export async function create(params: CreateBankAccountParams) {
  const { data } = await api.post("/bank-accounts", params);
  return data;
}
