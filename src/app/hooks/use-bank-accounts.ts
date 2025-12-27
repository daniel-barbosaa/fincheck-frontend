import { useQuery } from "@tanstack/react-query";
import { QUERY_CACHE_KEYS } from "../constants/cache";
import { bankAccountService } from "../services/bank-account-service";

export function useBankAccounts() {
  const { data, isFetching } = useQuery({
    queryKey: [QUERY_CACHE_KEYS.bankAccounts],
    queryFn: bankAccountService.getAll,
    staleTime: Infinity,
  });

  return {
    accounts: data ?? [],
    isLoading: isFetching,
  };
}
