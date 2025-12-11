import { useForm } from "react-hook-form";
import { useDashboard } from "../../../dashboard-context/use-dashboard";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  newAccountFormDefaultValues,
  newAccountFormSchema,
  type NewAccountFormSchema,
} from "./new-account-schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bankAccountService } from "../../../../../../app/services/bank-account-service";
import type { BanckAccountParams } from "../../../../../../app/services/bank-account-service/create";
import toast from "react-hot-toast";
import { QUERY_CACHE_KEYS } from "../../../../../../app/constants/cache";

export function useNewAccountModalController() {
  const { isNewAccountModalOpen, closeNewAccountModal } = useDashboard();
  const formMethods = useForm<NewAccountFormSchema>({
    resolver: zodResolver(newAccountFormSchema),
    defaultValues: newAccountFormDefaultValues,
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: BanckAccountParams) => {
      return bankAccountService.create(data);
    },
  });
  const queryClient = useQueryClient();

  async function handleSubmit(data: NewAccountFormSchema) {
    try {
      await mutateAsync({
        ...data,
        initialBalance: Number(data.initialBalance),
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_CACHE_KEYS.bankAccounts],
      });
      toast.success("Conta foi cadastrada com sucesso!");
      closeNewAccountModal();
      formMethods.reset();
    } catch {
      toast.error("Erro ao cadastrar a conta!");
    }
  }

  return {
    isNewAccountModalOpen,
    closeNewAccountModal,
    formMethods,
    handleSubmit,
    isPending,
  };
}
