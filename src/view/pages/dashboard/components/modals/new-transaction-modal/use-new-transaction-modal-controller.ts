import { useForm } from "react-hook-form";
import { useDashboard } from "../../../dashboard-context";
import {
  newTransactionFormDefaultValues,
  newTransactionFormSchema,
  type NewTransactionFormSchema,
} from "./new-tansaction-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_CACHE_KEYS } from "../../../../../../app/constants/cache";

import { useMemo } from "react";
import type { CreateTransactionsParams } from "../../../../../../app/services/transactions-service/create";
import { transactionsServices } from "../../../../../../app/services/transactions-service";
import toast from "react-hot-toast";
import { useBankAccounts } from "../../../../../../app/hooks/use-bank-accounts";
import { useCategories } from "../../../../../../app/hooks/use-categories";

export function useNewTransactionModalController() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
  } = useDashboard();
  const formMethods = useForm<NewTransactionFormSchema>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: newTransactionFormDefaultValues,
  });

  const { accounts, isLoading: isLoadingBankAccounts } = useBankAccounts();
  const { categories, isLoading: isLoadingCategories } = useCategories();

  const categoriesFiltered = useMemo(() => {
    return categories.filter(
      (category) => category.type === newTransactionType,
    );
  }, [categories, newTransactionType]);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: CreateTransactionsParams) => {
      return transactionsServices.create(data);
    },
  });
  const queryClient = useQueryClient();

  const allAccountsOption = accounts.map((account) => ({
    value: account.id,
    label: account.name,
  }));
  const allCategoriesOption = categoriesFiltered.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  async function handleSubmit(data: NewTransactionFormSchema) {
    try {
      await mutateAsync({
        ...data,
        value: Number(data.value),
        type: newTransactionType!,
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_CACHE_KEYS.transactions],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_CACHE_KEYS.bankAccounts],
      });

      toast.success(
        newTransactionType === "EXPENSE"
          ? "Despesa cadastrada com sucesso!"
          : "Receita cadastrada com sucesso!",
      );
      closeNewTransactionModal();
      formMethods.reset();
    } catch {
      toast.error(
        newTransactionType === "EXPENSE"
          ? "Erro ao cadastradar a despesa!"
          : "Erro ao cadastrar a receita!",
      );
    }
  }

  return {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
    formMethods,
    handleSubmit,
    allAccountsOption,
    isLoadingBankAccounts,
    isLoadingCategories,
    allCategoriesOption,
    isPending,
  };
}
