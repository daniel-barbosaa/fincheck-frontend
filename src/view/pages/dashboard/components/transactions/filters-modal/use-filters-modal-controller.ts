import { useState } from "react";
import { useBankAccounts } from "../../../../../../app/hooks/use-bank-accounts";

export function useFiltersModal() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<
    undefined | string
  >(undefined);
  const [selectedYear, setSelectdYear] = useState(new Date().getFullYear());
  const { accounts } = useBankAccounts();

  function handleSelectBankAccount(bankAccountId: string) {
    setSelectedBankAccountId((prevState) =>
      prevState === bankAccountId ? undefined : bankAccountId,
    );
  }

  function handleChangeYear(step: number) {
    setSelectdYear((prevState) => prevState + step);
  }

  return {
    handleSelectBankAccount,
    selectedBankAccountId,
    selectedYear,
    handleChangeYear,
    accounts,
  };
}
