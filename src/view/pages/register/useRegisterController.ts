import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerFormDefaultValues,
  registerFormSchema,
  type RegisterFormSchema,
} from "./register-form-schema";

export function useRegisterController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: registerFormDefaultValues,
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    //TODO: integrate with API
    console.log(data);
  });

  return { handleSubmit, register, errors };
}
