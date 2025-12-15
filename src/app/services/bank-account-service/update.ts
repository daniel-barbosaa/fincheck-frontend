import type { Accountype } from "../../types/account";
import { api } from "../api";

export interface UpdateBankAccountParams {
  id: string;
  name: string;
  initialBalance: number;
  type: Accountype;
  color: string;
}

export async function update({ id, ...params }: UpdateBankAccountParams) {
  const { data } = await api.put(`/bank-accounts/${id}`, params);
  return data;
}
