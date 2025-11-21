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
import { usersService } from "../../services/users-service";
import { PageLoader } from "../../../view/components/page-loader";

interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string): void;
  signout(): void;
}

const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = getStorageItem(STORAGE_KEYS.accessToken);
    return !!storedAccessToken;
  });
  const { isError, isFetching, isSuccess } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return usersService.user();
    },
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

  if (isFetching) {
    return <PageLoader />;
  }

  return (
    <AuthContext.Provider
      value={{ signedIn: isSuccess && signedIn, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
