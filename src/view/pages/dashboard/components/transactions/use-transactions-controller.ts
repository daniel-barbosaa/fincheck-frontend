import { useState } from "react";
import { useDashboard } from "../../dashboard-context/use-dashboard";

export function useTransactionsController() {
  const { valueVisible } = useDashboard();

  const [isFiltersModalOpen, setIsFilterModalOpen] = useState<boolean>(false);

  function handleOpenFiltersModal() {
    setIsFilterModalOpen(true);
  }
  function handleCloseFiltersModal() {
    setIsFilterModalOpen(false);
  }

  return {
    valueVisible,
    isInitialLoading: false,
    transaction: [],
    isLoading: false,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    isFiltersModalOpen,
  };
}
