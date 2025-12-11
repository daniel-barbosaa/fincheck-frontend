import { createContext, useCallback, useState, type ReactNode } from "react";
import {
  getStorageItem,
  setStorageItem,
} from "../../../../app/helpers/local-storage";
import { STORAGE_KEYS } from "../../../../app/constants/storage-keys";
import type { TransactionType } from "../../../../app/types/transaction";

interface DashboardContextValue {
  valueVisible: boolean;
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
  const [valueVisible, setAreValuesVisible] = useState(() => {
    return getStorageItem<boolean>(STORAGE_KEYS.valuesVisibleKey) ?? true;
  });
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  const [newTransactionType, setNewTransactionType] =
    useState<TransactionType | null>(null);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prev) => {
      const update = !prev;
      setStorageItem(STORAGE_KEYS.valuesVisibleKey, update);
      return update;
    });
  }, []);

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
        valueVisible,
        openNewAccountModal,
        isNewAccountModalOpen,
        closeNewAccountModal,
        openNewTransactionModal,
        closeNewTransactionModal,
        isNewTransactionModalOpen,
        newTransactionType,
        toggleValuesVisibility,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardContext;
