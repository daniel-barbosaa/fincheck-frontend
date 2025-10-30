import { createContext } from "react";

interface AuthContextValue {
  signedIn: boolean;
}

export const AuthContext = createContext({} as AuthContextValue);
