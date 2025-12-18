import type { Transaction } from "../../types/transaction";
import { api } from "../api";

type TransactionsResponse = Array<Transaction>;
type TransactionsFilters = {
  month: number;
  year: number;
  bankAccountId?: string;
  type?: Transaction["type"];
};

export async function getAll(filters: TransactionsFilters) {
  const { data } = await api.get<TransactionsResponse>("/transactions", {
    params: filters,
  });
  return data;
}
