import { api } from "../api";

export async function remove(transactionId: string) {
  const { data } = await api.delete(`/transactions/${transactionId}`);
  return data;
}
