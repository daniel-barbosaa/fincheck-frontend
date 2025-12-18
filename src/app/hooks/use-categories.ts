import { useQuery } from "@tanstack/react-query";
import { QUERY_CACHE_KEYS } from "../constants/cache";
import { categoriesService } from "../services/categories-service";

export function useCategories() {
  const { data, isFetching } = useQuery({
    queryKey: [QUERY_CACHE_KEYS.categories],
    queryFn: categoriesService.getAll,
  });

  return {
    categories: data ?? [],
    isLoading: isFetching,
  };
}
