import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signInFormDefaultValues,
  signInFormSchema,
  type SignInFormSchema,
} from "./sign-in-form-schema";
import { api } from "../../../app/services/api";

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: signInFormDefaultValues,
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    //TODO: integrate with API
    await api.post("/auth/signin");
    console.log(data);
  });

  return { handleSubmit, register, errors };
}
