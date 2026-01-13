import { AuthForm } from "../../components/auth-form";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useRegisterController } from "./use-register-controller";

export default function Register() {
  const { errors, register, handleSubmit, isPending } = useRegisterController();
  return (
    <AuthForm
      onSubmit={handleSubmit}
      title=" Crie uma conta"
      subtitle="Já possui uma conta?"
      linkText="Fazer login"
      linkTo="/login"
    >
      <Input
        type="text"
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
      <Button type="submit" className="mt-2" isLoading={isPending}>
        Criar conta
      </Button>
    </AuthForm>
  );
}
