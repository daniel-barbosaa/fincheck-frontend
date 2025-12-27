import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

import { AuthForm } from "../../components/auth-form";
import { useLoginController } from "./use-login-controller";

export default function Login() {
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
