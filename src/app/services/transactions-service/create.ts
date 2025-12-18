import type { TransactionType } from "../../types/transaction";
import { api } from "../api";

export interface CreateTransactionsParams {
  bankAccountId: string;
  name: string;
  value: number;
  date: Date;
  type: TransactionType;
}

export async function create(params: CreateTransactionsParams) {
  const { data } = await api.post("/transactions", params);
  return data;
}
