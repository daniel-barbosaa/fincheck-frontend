import { createContext, useCallback, useState, type ReactNode } from "react";
import {
  getStorageItem,
  setStorageItem,
} from "../../../../app/helpers/local-storage";
import { STORAGE_KEYS } from "../../../../app/constants/storage-keys";

interface DashboardContextValue {
  toggleValuesVisibility(): void;
  areValuesVisible: boolean;
  openNewAccountModal(): void;
  isNewAccountModalOpen: boolean;
  closeNewAccountModal(): void;
}

const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [valueVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(true);
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

  return (
    <DashboardContext.Provider
      value={{
        toggleValuesVisibility,
        areValuesVisible,
        openNewAccountModal,
        isNewAccountModalOpen,
        closeNewAccountModal,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardContext;
