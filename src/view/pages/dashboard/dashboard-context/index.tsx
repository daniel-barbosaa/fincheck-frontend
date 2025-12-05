import { createContext, useCallback, useState, type ReactNode } from "react";
import {
  getStorageItem,
  setStorageItem,
} from "../../../../app/helpers/local-storage";
import { STORAGE_KEYS } from "../../../../app/constants/storage-keys";
import type { TransactionType } from "../../../../app/types/transaction";

interface DashboardContextValue {
  areValuesVisible: boolean;
  isNewTransactionModalOpen: boolean;
  isNewAccountModalOpen: boolean;
  newTransactionType: TransactionType | null;
  openNewAccountModal(): void;
  closeNewAccountModal(): void;
  openNewTransactionModal(type: TransactionType): void;
  closeNewTransactionModal(): void;
  toggleValuesVisibility(): void;
}

const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [valueVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(true);
  const [newTransactionType, setNewTransactionType] =
    useState<TransactionType | null>(null);
  const { valuesVisibleKey } = STORAGE_KEYS;
  const areValuesVisible = getStorageItem(valuesVisibleKey) as boolean;

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState) => !prevState);
    setStorageItem(valuesVisibleKey, valueVisible);
  }, [valueVisible, valuesVisibleKey]);

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);
  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, []);

  const openNewTransactionModal = useCallback((type: TransactionType) => {
    setNewTransactionType(type);
    setIsNewTransactionModalOpen(true);
  }, []);
  const closeNewTransactionModal = useCallback(() => {
    setNewTransactionType(null);
    setIsNewTransactionModalOpen(false);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        toggleValuesVisibility,
        areValuesVisible,
        openNewAccountModal,
        isNewAccountModalOpen,
        closeNewAccountModal,
        openNewTransactionModal,
        closeNewTransactionModal,
        isNewTransactionModalOpen,
        newTransactionType,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardContext;
