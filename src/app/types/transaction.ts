export const TRANSACTION = {
  INCOME: "INCOME",
  EXPENSE: "EXPENSE",
};

export type TransactionType = keyof typeof TRANSACTION;

export type Transaction = {
  id: string;
  name: string;
  categoryId: string;
  bankAccountId: string;
  value: number;
  date: Date;
  type: TransactionType;
  category?: {
    id: string;
    name: string;
    icon: string;
  };
};
