import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.email("Insira um e-mail válido").nonempty("E-mail é obrigatório"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8, "Sua senha deve conter 8 ou mais caracteres"),
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;

export const signInFormDefaultValues: SignInFormSchema = {
  email: "",
  password: "",
};
