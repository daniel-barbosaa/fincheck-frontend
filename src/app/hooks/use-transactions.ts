import { useQuery } from "@tanstack/react-query";
import { QUERY_CACHE_KEYS } from "../constants/cache";
import { transactionsServices } from "../services/transactions-service";

export function useTransactions() {
  const {
    data,
    isFetching,
    isLoading: isInitialLoading,
  } = useQuery({
    queryKey: [QUERY_CACHE_KEYS.transactions],
    queryFn: () =>
      transactionsServices.getAll({
        month: 11,
        year: 2025,
      }),
  });

  return {
    transactions: data ?? [],
    isLoading: isFetching,
    isInitialLoading,
  };
}
