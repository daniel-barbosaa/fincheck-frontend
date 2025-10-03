import { Input } from "../../components/Input";

import { AuthForm } from "../../components/authForm/AuthForm";
import { useLoginController } from "./useLoginController";

export function Login() {
  const { handleSubmit, register, errors } = useLoginController();
  return (
    <AuthForm
      title="Entre em sua conta"
      subtitle="Novo por aqui?"
      linkText="Crie uma conta"
      linkTo="/register"
      buttonText="Entrar"
      onSubmit={handleSubmit}
    >
      <Input type="email" placeholder="E-mail" {...register("email")} />
      <p>{errors.email?.message}</p>
      <Input type="password" placeholder="Senha" {...register("password")} />
      <p>{errors.password?.message}</p>
    </AuthForm>
  );
}
