import { Input } from "../../components/Input";

import { AuthForm } from "../../components/authForm/AuthForm";
import { useLoginController } from "./useLoginController";

export function Login() {
  const { handleSubmit, register, errors } = useLoginController();
  return (
    <AuthForm
      onSubmit={handleSubmit}
      title="Entre em sua conta"
      subtitle="Novo por aqui?"
      linkText="Crie uma conta"
      linkTo="/register"
      buttonText="Entrar"
    >
      <Input
        type="email"
        placeholder="E-mail"
        {...register("email")}
        error={errors.email?.message}
      />
      <Input
        type="password"
        placeholder="Senha"
        {...register("password")}
        error={errors.password?.message}
      />
    </AuthForm>
  );
}
