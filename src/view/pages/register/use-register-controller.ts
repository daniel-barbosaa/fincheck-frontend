import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerFormDefaultValues,
  registerFormSchema,
  type RegisterFormSchema,
} from "./register-form-schema";
import { authService } from "../../../app/services/auth-service";
import { useMutation } from "@tanstack/react-query";
import type { SignupParams } from "../../../app/services/auth-service/signup";

import { toast } from "react-hot-toast";
import { useAuth } from "../../../app/hooks/use-auth";

export function useRegisterController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: registerFormDefaultValues,
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: SignupParams) => {
      return authService.signUp(data);
    },
  });
  const { signin } = useAuth();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signin(accessToken);
    } catch {
      toast.error("Ocorreu um erro ao criar sua conta!");
    }
  });

  return { handleSubmit, register, errors, isPending };
}
