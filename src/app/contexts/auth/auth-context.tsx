import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  getStorageItem,
  removeStorageItem,
  setStorageItem,
} from "../../helpers/local-storage";
import { STORAGE_KEYS } from "../../constants/storage-keys";
import { useQuery } from "@tanstack/react-query";
import { userService } from "../../services/users-service";

import type { User } from "../../types/User";

interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string): void;
  signout(): void;
  user: User | undefined;
  isLoading: boolean;
}

const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = getStorageItem(STORAGE_KEYS.accessToken);
    return !!storedAccessToken;
  });

  const { data, isError, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: userService.user,
    enabled: signedIn,
    staleTime: Infinity,
  });

  const signin = useCallback((accessToken: string) => {
    setStorageItem(STORAGE_KEYS.accessToken, accessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    removeStorageItem(STORAGE_KEYS.accessToken);
    setSignedIn(false);
  }, []);

  useEffect(() => {
    if (isError) {
      signout();
    }
  }, [isError, signout]);

  return (
    <AuthContext.Provider
      value={{
        signedIn,
        signin,
        signout,
        user: data,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
