import { useDashboard } from "../../dashboard-context/use-dashboard";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  return {
    areValuesVisible,
    isInitialLoading: false,
    transaction: [],
    isLoading: false,
  };
}
