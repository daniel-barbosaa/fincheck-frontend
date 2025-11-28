import { useState } from "react";
import { useDashboard } from "../../dashboard-context/use-dashboard";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isFiltersModalOpen, setIsFilterModalOpen] = useState<boolean>(true);

  function handleOpenFiltersModal() {
    setIsFilterModalOpen(true);
  }
  function handleCloseFiltersModal() {
    setIsFilterModalOpen(false);
  }

  return {
    areValuesVisible,
    isInitialLoading: false,
    transaction: [],
    isLoading: false,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    isFiltersModalOpen,
  };
}
