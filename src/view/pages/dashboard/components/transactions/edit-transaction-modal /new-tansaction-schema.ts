import { z } from "zod";

export const editTransactionFormSchema = z.object({
  value: z.union([
    z.string("Informe o valor da transação").nonempty("Informe o valor"),
    z.number(),
  ]),
  name: z.string("Informe o nome da transação").nonempty("Informe o nome"),
  categoryId: z
    .string("Selecione uma categoria")
    .nonempty("Selecione a categoria"),
  bankAccountId: z
    .string("Selecione uma conta")
    .nonempty("Informe a conta bancaria"),
  date: z.date(),
});

export type EditTransactionFormSchema = z.infer<
  typeof editTransactionFormSchema
>;

export const editTransactionFormDefaultValues: EditTransactionFormSchema = {
  value: "",
  name: "",
  categoryId: "",
  bankAccountId: "",
  date: new Date(),
};
