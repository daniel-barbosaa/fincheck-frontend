import { AuthForm } from "../../components/authForm/AuthForm";
import { Input } from "../../components/Input";
import { useRegisterController } from "./useRegisterController";

export function Register() {
  const { errors, register, handleSubmit } = useRegisterController();
  return (
    <AuthForm
      onSubmit={handleSubmit}
      title=" Crie uma conta"
      subtitle="Já possui uma conta?"
      linkText="Fazer login"
      linkTo="/login"
      buttonText="Criar conta"
    >
      <Input
        type="nome"
        placeholder="Nome"
        {...register("name")}
        error={errors.name?.message}
      />
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
