import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import * as Sentry from "@sentry/react";
import {
  getStorageItem,
  removeStorageItem,
  setStorageItem,
} from "../../helpers/local-storage";
import { STORAGE_KEYS } from "../../constants/storage-keys";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { userService } from "../../services/users-service";

import type { User } from "../../types/User";
import { PageLoader } from "../../../view/components/ui/page-loader";
import Clarity from "@microsoft/clarity";

interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string): void;
  signout(): void;
  user: User | undefined;
}

const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = getStorageItem(STORAGE_KEYS.accessToken);
    return !!storedAccessToken;
  });
  const queryClient = useQueryClient();

  const { data, isError } = useQuery({
    queryKey: ["user", signedIn],
    queryFn: userService.user,
    enabled: signedIn,
    staleTime: 5 * 60 * 1000,
  });

  const signin = useCallback((accessToken: string) => {
    setStorageItem(STORAGE_KEYS.accessToken, accessToken);
    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    removeStorageItem(STORAGE_KEYS.accessToken);
    setSignedIn(false);
    queryClient.clear();

    if (import.meta.env.PROD) {
      Sentry.setUser(null);
    }
  }, [queryClient]);

  useEffect(() => {
    if (isError) {
      signout();
    }
  }, [isError, signout, queryClient]);

  useEffect(() => {
    if (import.meta.env.PROD) {
      Sentry.setUser({
        email: data?.email,
      });

      if (data?.email) {
        Clarity.identify(data.email);
      }
    }
  }, [data]);

  const isBooting = signedIn && !data;

  return (
    <AuthContext.Provider
      value={{
        signedIn,
        signin,
        signout,
        user: data,
      }}
    >
      {isBooting ? <PageLoader /> : children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
