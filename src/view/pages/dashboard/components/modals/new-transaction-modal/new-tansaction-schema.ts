import { z } from "zod";

export const newTransactionFormSchema = z.object({
  value: z.string("Informe o valor da transação").nonempty("Informe o valor"),
  name: z.string("Informe o nome da transação").nonempty("Informe o nome"),
  categoryId: z
    .string("Selecione uma categoria")
    .nonempty("Selecione a categoria"),
  bankAccountId: z
    .string("Selecione uma conta")
    .nonempty("Informe a conta bancaria"),
  date: z.date(),
});

export type NewTransactionFormSchema = z.infer<typeof newTransactionFormSchema>;

export const newTransactionFormDefaultValues: NewTransactionFormSchema = {
  value: "",
  name: "",
  categoryId: "",
  bankAccountId: "",
  date: new Date(),
};
