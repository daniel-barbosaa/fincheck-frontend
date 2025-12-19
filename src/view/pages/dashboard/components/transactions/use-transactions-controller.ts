import { useEffect, useState } from "react";
import { useDashboard } from "../../dashboard-context";
import { useTransactions } from "../../../../../app/hooks/use-transactions";
import { type TransactionsFilters } from "../../../../../app/services/transactions-service/get-all";

export function useTransactionsController() {
  const [isFiltersModalOpen, setIsFilterModalOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<TransactionsFilters>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const { valueVisible } = useDashboard();
  const { transactions, isLoading, isInitialLoading, refetchTransactions } =
    useTransactions(filters);

  useEffect(() => {
    refetchTransactions();
  }, [filters, refetchTransactions]);

  function handleOpenFiltersModal() {
    setIsFilterModalOpen(true);
  }
  function handleCloseFiltersModal() {
    setIsFilterModalOpen(false);
  }

  function handleChangeFilters<TFilter extends keyof TransactionsFilters>(
    filter: TFilter,
  ) {
    return (value: TransactionsFilters[TFilter]) => {
      if (value === filters[filter]) return;
      setFilters((prevState) => ({
        ...prevState,
        [filter]: value,
      }));
    };
  }

  function handleApplyFilters({
    bankAccountId,
    year,
  }: {
    bankAccountId: string | undefined;
    year: number;
  }) {
    handleChangeFilters("bankAccountId")(bankAccountId);
    handleChangeFilters("year")(year);
    setIsFilterModalOpen(false);
  }

  return {
    valueVisible,
    isInitialLoading,
    transactions,
    isLoading,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    isFiltersModalOpen,
    handleChangeFilters,
    filters,
    handleApplyFilters,
  };
}
