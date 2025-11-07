import { Button } from "../../components/button";
import { Input } from "../../components/input";

import { AuthForm } from "../../components/auth-form";
import { useLoginController } from "./useLoginController";

export function Login() {
  const { handleSubmit, register, errors, isPending } = useLoginController();
  return (
    <AuthForm
      onSubmit={handleSubmit}
      title="Entre em sua conta"
      subtitle="Novo por aqui?"
      linkText="Crie uma conta"
      linkTo="/register"
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
      <Button type="submit" className="mt-2" isLoading={isPending}>
        Entrar
      </Button>
    </AuthForm>
  );
}
