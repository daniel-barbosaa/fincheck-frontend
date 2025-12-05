import { useDashboard } from "../../../dashboard-context/use-dashboard";

export function useNewTransactionModalController() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
  } = useDashboard();
  return {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
  };
}
