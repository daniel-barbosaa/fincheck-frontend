import { useQuery } from "@tanstack/react-query";
import { QUERY_CACHE_KEYS } from "../constants/cache";
import { transactionsServices } from "../services/transactions-service";
import { type TransactionsFilters } from "../services/transactions-service/get-all";

export function useTransactions(filters: TransactionsFilters) {
  const {
    data,
    isFetching,
    isLoading: isInitialLoading,
    refetch,
  } = useQuery({
    queryKey: [QUERY_CACHE_KEYS.transactions],
    queryFn: () => transactionsServices.getAll(filters),
  });

  return {
    transactions: data ?? [],
    isLoading: isFetching,
    isInitialLoading,
    refetchTransactions: refetch,
  };
}
