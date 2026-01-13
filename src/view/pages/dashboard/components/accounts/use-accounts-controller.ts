import { useMemo, useState } from "react";
import { useWindowWidth } from "../../../../../app/hooks/use-window-width";

import { useDashboard } from "../../dashboard-context";
import { useBankAccounts } from "../../../../../app/hooks/use-bank-accounts";

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

  const { accounts, isLoading } = useBankAccounts();

  const currentBalance = useMemo(() => {
    if (!accounts) return;

    return accounts.reduce(
      (total, account) => total + account.currentBalance,
      0,
    );
  }, [accounts]);

  return {
    setSliderState,
    sliderState,
    windowWidth,
    valueVisible,
    toggleValuesVisibility,
    isLoading,
    accounts,
    openNewAccountModal,
    currentBalance: currentBalance ?? 0,
    openEditAccountModal,
  };
}
