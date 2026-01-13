import type { TransactionType } from "../../types/transaction";
import { api } from "../api";

export interface UpdateTransactionsParams {
  id: string;
  bankAccountId: string;
  name: string;
  value: number;
  date: Date;
  type: TransactionType;
}

export async function update({ id, ...params }: UpdateTransactionsParams) {
  const { data } = await api.put(`/transactions/${id}`, params);
  return data;
}
