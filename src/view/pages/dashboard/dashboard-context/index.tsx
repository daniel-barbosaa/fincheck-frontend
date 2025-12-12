import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import {
  getStorageItem,
  setStorageItem,
} from "../../../../app/helpers/local-storage";
import { STORAGE_KEYS } from "../../../../app/constants/storage-keys";
import type { TransactionType } from "../../../../app/types/transaction";
import type { BankAccount } from "../../../../app/types/bank-account";

interface DashboardContextValue {
  valueVisible: boolean;
  isNewTransactionModalOpen: boolean;
  isNewAccountModalOpen: boolean;
  isEditAccountModalOpen: boolean;
  newTransactionType: TransactionType | null;
  accountBeingEdit: null | BankAccount;
  openNewAccountModal(): void;
  closeNewAccountModal(): void;
  openNewTransactionModal(type: TransactionType): void;
  closeNewTransactionModal(): void;
  toggleValuesVisibility(): void;
  openEditAccountModal(bankAccount: BankAccount): void;
  closeEditAccountModal(): void;
}

const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [valueVisible, setAreValuesVisible] = useState(() => {
    return getStorageItem<boolean>(STORAGE_KEYS.valuesVisibleKey) ?? true;
  });
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
  const [isEditAccountModalOpen, setIsEditAccountModalOpen] = useState(true);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  const [accountBeingEdit, setAccountBeingEdit] = useState<null | BankAccount>(
    null,
  );
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

  const openEditAccountModal = useCallback((account: BankAccount) => {
    setIsEditAccountModalOpen(true);
    setAccountBeingEdit(account);
  }, []);
  const closeEditAccountModal = useCallback(() => {
    setIsEditAccountModalOpen(false);
  }, []);

  console.log(accountBeingEdit);

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
        closeEditAccountModal,
        isEditAccountModalOpen,
        openEditAccountModal,
        accountBeingEdit,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  return useContext(DashboardContext);
}
