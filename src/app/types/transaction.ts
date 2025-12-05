export const TRANSACTION = {
  INCOME: "INCOME",
  EXPENSE: "EXPENSE",
};

export type TransactionType = keyof typeof TRANSACTION;
