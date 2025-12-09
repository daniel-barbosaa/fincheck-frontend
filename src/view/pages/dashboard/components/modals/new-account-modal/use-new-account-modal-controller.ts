import { useForm } from "react-hook-form";
import { useDashboard } from "../../../dashboard-context/use-dashboard";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  newAccountFormSchema,
  type NewAccountFormSchema,
} from "./new-account-schema";

export function useNewAccountModalController() {
  const { isNewAccountModalOpen, closeNewAccountModal } = useDashboard();
  const formMethods = useForm<NewAccountFormSchema>({
    resolver: zodResolver(newAccountFormSchema),
    defaultValues: {
      initialBalance: "12",
      name: "Nubank",
    },
  });

  async function handleSubmit(data: NewAccountFormSchema) {
    console.log(data);
  }

  return {
    isNewAccountModalOpen,
    closeNewAccountModal,
    formMethods,
    handleSubmit,
  };
}
