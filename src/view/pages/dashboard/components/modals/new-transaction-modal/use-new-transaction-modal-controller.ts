import { useForm } from "react-hook-form";
import { useDashboard } from "../../../dashboard-context";
import {
  newTransactionFormDefaultValues,
  newTransactionFormSchema,
  type NewTransactionFormSchema,
} from "./new-tansaction-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_CACHE_KEYS } from "../../../../../../app/constants/cache";
import { bankAccountService } from "../../../../../../app/services/bank-account-service";
import { categoriesService } from "../../../../../../app/services/categories-service";
import { useMemo } from "react";
import type { CreateTransactionsParams } from "../../../../../../app/services/transactions-service/create";
import { transactionsServices } from "../../../../../../app/services/transactions-service";
import toast from "react-hot-toast";

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

  const { data: bankAccounts = [], isFetching: isLoadingBankAccounts } =
    useQuery({
      queryKey: [QUERY_CACHE_KEYS.bankAccounts],
      queryFn: bankAccountService.getAll,
    });
  const { data: categories = [], isFetching: isLoadingCategories } = useQuery({
    queryKey: [QUERY_CACHE_KEYS.categories],
    queryFn: categoriesService.getAll,
  });

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

  const allAccountsOption = bankAccounts.map((account) => ({
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
