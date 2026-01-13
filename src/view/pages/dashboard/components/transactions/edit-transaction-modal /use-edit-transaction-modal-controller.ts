import { useForm } from "react-hook-form";

import {
  editTransactionFormSchema,
  type EditTransactionFormSchema,
} from "./new-tansaction-schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useMemo, useState } from "react";

import { useBankAccounts } from "../../../../../../app/hooks/use-bank-accounts";
import { useCategories } from "../../../../../../app/hooks/use-categories";
import type { Transaction } from "../../../../../../app/types/transaction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transactionsServices } from "../../../../../../app/services/transactions-service";
import type { UpdateTransactionsParams } from "../../../../../../app/services/transactions-service/update";
import { QUERY_CACHE_KEYS } from "../../../../../../app/constants/cache";
import toast from "react-hot-toast";

export function useEditTransactionModalController(
  transaction: Transaction | null,
  onClose: () => void,
) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const formMethods = useForm<EditTransactionFormSchema>({
    resolver: zodResolver(editTransactionFormSchema),
    defaultValues: {
      bankAccountId: transaction?.bankAccountId,
      categoryId: transaction?.categoryId,
      name: transaction?.name,
      value: transaction?.value,
      date: transaction ? new Date(transaction?.date) : new Date(),
    },
  });

  const { accounts, isLoading: isLoadingBankAccounts } = useBankAccounts();
  const { categories, isLoading: isLoadingCategories } = useCategories();
  const queryClient = useQueryClient();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: UpdateTransactionsParams) => {
      return transactionsServices.update(data);
    },
  });

  const { isPending: isPendingDelete, mutateAsync: deleteAccount } =
    useMutation({
      mutationFn: async (bankAccountId: string) => {
        return transactionsServices.remove(bankAccountId);
      },
    });

  async function handleSubmit(data: EditTransactionFormSchema) {
    try {
      await mutateAsync({
        ...data,
        id: transaction!.id,
        value: transaction!.value,
        type: transaction!.type,
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_CACHE_KEYS.transactions],
      });
      toast.success(
        transaction?.type === "EXPENSE"
          ? "Despesa editada com sucesso!"
          : "Receita editada com sucesso!",
      );
      onClose();
    } catch {
      toast.error(
        transaction?.type === "EXPENSE"
          ? "Erro ao editar a despesa!"
          : "Erro ao editar a receita!",
      );
    }
  }

  const categoriesFiltered = useMemo(() => {
    return categories.filter((category) => category.type === transaction?.type);
  }, [categories, transaction]);

  const allAccountsOption = accounts.map((account) => ({
    value: account.id,
    label: account.name,
  }));
  const allCategoriesOption = categoriesFiltered.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  async function handleDeleteTransaction() {
    try {
      await deleteAccount(transaction!.id);
      queryClient.invalidateQueries({
        queryKey: [QUERY_CACHE_KEYS.transactions],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_CACHE_KEYS.bankAccounts],
      });
      toast.success("A transação deletada com sucesso!");
      onClose();
      handleCloseDeleteModal();
    } catch {
      toast.error("Erro ao deletar transação!");
    }
  }
  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }
  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  return {
    formMethods,
    handleSubmit,
    allAccountsOption,
    isLoadingBankAccounts,
    isLoadingCategories,
    allCategoriesOption,
    isLoading: isPending,
    isDeleteModalOpen,
    isPendingDelete,
    handleDeleteTransaction,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
  };
}
