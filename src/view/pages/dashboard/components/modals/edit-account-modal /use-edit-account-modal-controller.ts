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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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

  const { isPending, mutateAsync: updateAccount } = useMutation({
    mutationFn: async (data: UpdateBankAccountParams) => {
      return bankAccountService.update(data);
    },
  });
  const { isPending: isPendingDelete, mutateAsync: deleteAccount } =
    useMutation({
      mutationFn: async (bankAccountId: string) => {
        return bankAccountService.remove(bankAccountId);
      },
    });
  const queryClient = useQueryClient();

  async function handleSubmit(data: EditAccountFormSchema) {
    try {
      await updateAccount({
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

  async function handleDeleteAccount() {
    try {
      await deleteAccount(accountBeingEdit!.id);
      queryClient.invalidateQueries({
        queryKey: [QUERY_CACHE_KEYS.bankAccounts],
      });
      toast.success("Conta deletada com sucesso!");
      closeEditAccountModal();
      handleCloseDeleteModal();
    } catch {
      toast.error("Erro ao deletar conta!");
    }
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
    handleDeleteAccount,
    isPendingDelete,
  };
}
