import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signInFormDefaultValues,
  signInFormSchema,
  type SignInFormSchema,
} from "./sign-in-form-schema";

import { useMutation } from "@tanstack/react-query";
import { authService } from "../../../app/services/auth-service";
import toast from "react-hot-toast";
import type { SigninParams } from "../../../app/services/auth-service/signin";

export function useLoginController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: signInFormDefaultValues,
  });
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signIn(data);
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);
    } catch {
      toast.error("Credenciais inválidas!");
    }
  });

  return { handleSubmit, register, errors, isPending };
}
