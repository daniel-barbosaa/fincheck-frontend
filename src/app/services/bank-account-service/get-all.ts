import type { Accountype } from "../../types/account";
import { api } from "../api";

type BanckAccountResponse = Array<{
  id: string;
  name: string;
  initialBalance: number;
  type: Accountype;
  color: string;
  currentBalance: number;
}>;

export async function getAll() {
  const { data } = await api.get<BanckAccountResponse>("/bank-accounts");
  return data;
}
