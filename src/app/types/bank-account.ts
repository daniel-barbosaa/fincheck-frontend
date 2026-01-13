import type { Accountype } from "./account";

export type BankAccount = {
  id: string;
  name: string;
  initialBalance: number;
  type: Accountype;
  color: string;
  currentBalance: number;
};
