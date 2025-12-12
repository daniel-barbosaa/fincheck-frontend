import type { BankAccount } from "../../types/bank-account";
import { api } from "../api";

type BanckAccountResponse = Array<BankAccount>;

export async function getAll() {
  const { data } = await api.get<BanckAccountResponse>("/bank-accounts");
  return data;
}
