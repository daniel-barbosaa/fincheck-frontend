import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  editAccountFormSchema,
  type EditAccountFormSchema,
} from "./edit-account-schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bankAccountService } from "../../../../../../app/services/bank-account-service";
import toast from "react-hot-toast";
import { QUERY_CACHE_KEYS } from "../../../../../../app/constants/cache";
import { useDashboard } from "../../../dashboard-context";
import { type UpdateBankAccountParams } from "../../../../../../app/services/bank-account-service/update";
import { useEffect, useState } from "react";

export function useEditAccountModalController() {
  const { isEditAccountModalOpen, closeEditAccountModal, accountBeingEdit } =
    useDashboard();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(true);
  const formMethods = useForm<EditAccountFormSchema>({
    resolver: zodResolver(editAccountFormSchema),
    defaultValues: {
      color: accountBeingEdit?.color,
      name: accountBeingEdit?.name,
      type: accountBeingEdit?.type,
      initialBalance: accountBeingEdit?.initialBalance,
    },
  });
  const { reset } = formMethods;

  useEffect(() => {
    if (accountBeingEdit) {
      reset({
        color: accountBeingEdit?.color,
        name: accountBeingEdit?.name,
        type: accountBeingEdit?.type,
        initialBalance: accountBeingEdit?.initialBalance,
      });
    }
  }, [accountBeingEdit, reset]);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: UpdateBankAccountParams) => {
      return bankAccountService.update(data);
    },
  });
  const queryClient = useQueryClient();

  async function handleSubmit(data: EditAccountFormSchema) {
    try {
      await mutateAsync({
        ...data,
        initialBalance: Number(data.initialBalance),
        id: accountBeingEdit!.id,
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_CACHE_KEYS.bankAccounts],
      });
      toast.success("Conta editada com sucesso!");
      closeEditAccountModal();
    } catch {
      toast.error("Erro ao editar a conta!");
    }
  }

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }
  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  return {
    isEditAccountModalOpen,
    closeEditAccountModal,
    formMethods,
    handleSubmit,
    isPending,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    isDeleteModalOpen,
  };
}
