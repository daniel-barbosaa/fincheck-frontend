import type { TransactionType } from "./transaction";

export type CategoriesType = {
  id: string;
  userId: string;
  name: string;
  icon: string;
  type: TransactionType;
};
