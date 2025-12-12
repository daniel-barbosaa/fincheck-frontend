import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  editAccountFormSchema,
  type EditAccountFormSchema,
  editAccountFormDefaultValues,
} from "./edit-account-schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bankAccountService } from "../../../../../../app/services/bank-account-service";
import type { BanckAccountParams } from "../../../../../../app/services/bank-account-service/create";
import toast from "react-hot-toast";
import { QUERY_CACHE_KEYS } from "../../../../../../app/constants/cache";
import { useDashboard } from "../../../dashboard-context";

export function useEditAccountModalController() {
  const { isEditAccountModalOpen, closeEditAccountModal } = useDashboard();
  const formMethods = useForm<EditAccountFormSchema>({
    resolver: zodResolver(editAccountFormSchema),
    defaultValues: editAccountFormDefaultValues,
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: BanckAccountParams) => {
      return bankAccountService.create(data);
    },
  });
  const queryClient = useQueryClient();

  async function handleSubmit(data: EditAccountFormSchema) {
    try {
      await mutateAsync({
        ...data,
        initialBalance: Number(data.initialBalance),
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_CACHE_KEYS.bankAccounts],
      });
      toast.success("Conta foi cadastrada com sucesso!");
      closeEditAccountModal();
      formMethods.reset();
    } catch {
      toast.error("Erro ao cadastrar a conta!");
    }
  }

  return {
    isEditAccountModalOpen,
    closeEditAccountModal,
    formMethods,
    handleSubmit,
    isPending,
  };
}
