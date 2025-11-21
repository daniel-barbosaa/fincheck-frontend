import { createContext, useCallback, useState, type ReactNode } from "react";
import {
  getStorageItem,
  setStorageItem,
} from "../../../../app/helpers/local-storage";
import { STORAGE_KEYS } from "../../../../app/constants/storage-keys";

interface DashboardContextValue {
  toggleValuesVisibility(): void;
  areValuesVisible: boolean;
}

const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [valueVisible, setAreValuesVisible] = useState(true);
  const { valuesVisibleKey } = STORAGE_KEYS;
  const areValuesVisible = getStorageItem(valuesVisibleKey) as boolean;

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState) => !prevState);
    setStorageItem(valuesVisibleKey, valueVisible);
  }, [valueVisible, valuesVisibleKey]);

  return (
    <DashboardContext.Provider
      value={{ toggleValuesVisibility, areValuesVisible }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardContext;
