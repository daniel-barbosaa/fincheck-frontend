import { useState } from "react";
import { useDashboard } from "../../dashboard-context";
import { useTransactions } from "../../../../../app/hooks/use-transactions";

export function useTransactionsController() {
  const { valueVisible } = useDashboard();
  const [isFiltersModalOpen, setIsFilterModalOpen] = useState<boolean>(false);
  const { transactions, isLoading, isInitialLoading } = useTransactions();

  function handleOpenFiltersModal() {
    setIsFilterModalOpen(true);
  }
  function handleCloseFiltersModal() {
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
  };
}
