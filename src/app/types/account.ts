import { convertObjectToOptions } from "../helpers/convert-objects-to-options";

export const ACCOUNT = {
  CHECKING: "Conta corrente",
  INVESTMENT: "Investimentos",
  CASH: "Dinheiro físico",
};

export type Accountype = keyof typeof ACCOUNT;

export const ACCOUNT_OPTIONS = convertObjectToOptions(ACCOUNT);
