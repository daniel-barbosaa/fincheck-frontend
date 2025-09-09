import { Input } from "../../components/Input";

import { AuthForm } from "../../components/authForm/AuthForm";

export function Login() {
  return (
    <AuthForm
      title="Entre em sua conta"
      subtitle="Novo por aqui?"
      linkText="Crie uma conta"
      linkTo="/register"
      buttonText="Entrar"
    >
      <Input type="email" placeholder="E-mail" name="email" />
      <Input type="password" placeholder="Senha" name="password" />
    </AuthForm>
  );
}
