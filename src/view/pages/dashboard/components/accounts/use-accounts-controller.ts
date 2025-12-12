import { useMemo, useState } from "react";
import { useWindowWidth } from "../../../../../app/hooks/use-window-width";

import { useQuery } from "@tanstack/react-query";
import { bankAccountService } from "../../../../../app/services/bank-account-service";
import { QUERY_CACHE_KEYS } from "../../../../../app/constants/cache";
import { useDashboard } from "../../dashboard-context";

export function useAccountsController() {
  const windowWidth = useWindowWidth();
  const {
    valueVisible,
    toggleValuesVisibility,
    openNewAccountModal,
    openEditAccountModal,
  } = useDashboard();
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const { data = [], isFetching } = useQuery({
    queryKey: [QUERY_CACHE_KEYS.bankAccounts],
    queryFn: bankAccountService.getAll,
  });

  const currentBalance = useMemo(() => {
    if (!data) return;

    return data.reduce((total, account) => total + account.currentBalance, 0);
  }, [data]);

  return {
    setSliderState,
    sliderState,
    windowWidth,
    valueVisible,
    toggleValuesVisibility,
    isLoading: isFetching,
    accounts: data,
    openNewAccountModal,
    currentBalance: currentBalance ?? 0,
    openEditAccountModal,
  };
}
