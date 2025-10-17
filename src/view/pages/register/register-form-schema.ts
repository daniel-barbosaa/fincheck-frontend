import { z } from "zod";

export const registerFormSchema = z.object({
  name: z.string("Insira seu nome").nonempty("Nome é obrigatório"),
  email: z.email("Insira um e-mail válido").nonempty("E-mail é obrigatório"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8, "Sua senha deve conter 8 ou mais caracteres"),
});

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;

export const registerFormDefaultValues: RegisterFormSchema = {
  name: "",
  email: "",
  password: "",
};
