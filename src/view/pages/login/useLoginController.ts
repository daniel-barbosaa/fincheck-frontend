import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signInFormDefaultValues,
  signInFormSchema,
  type SignInFormSchema,
} from "./sign-in-form-schema";

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: signInFormDefaultValues,
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    //TODO: integrate with API
    console.log(data);
  });

  return { handleSubmit, register, errors };
}
