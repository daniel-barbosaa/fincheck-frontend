import { z } from "zod";
import { ACCOUNT_ENUM } from "../../../../../../app/types/account";

export const editAccountFormSchema = z.object({
  initialBalance: z.string().nonempty("Saldo inicial é obrigatório"),
  name: z.string().nonempty("Nome da conta é obrigatório"),
  type: z.enum(ACCOUNT_ENUM),
  color: z.string().nonempty("Cor é obrigatória"),
});

export type EditAccountFormSchema = z.infer<typeof editAccountFormSchema>;

export const editAccountFormDefaultValues: EditAccountFormSchema = {
  initialBalance: "0",
  name: "",
  type: "CHECKING",
  color: "",
};
