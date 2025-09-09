import { AuthForm } from "../../components/authForm/AuthForm";
import { Input } from "../../components/Input";

export function Register() {
  return (
    <AuthForm
      title=" Crie uma conta"
      subtitle="Já possui uma conta?"
      linkText="Fazer login"
      linkTo="/login"
      buttonText="Criar conta"
    >
      <Input type="nome" placeholder="Nome" name="nome" />
      <Input type="email" placeholder="E-mail" name="email" />
      <Input type="password" placeholder="Senha" name="password" />
    </AuthForm>
  );
}
