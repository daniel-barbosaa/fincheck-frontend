import { type ReactNode } from "react";
import { AuthContext } from "./auth-context";

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider value={{ signedIn: true }}>
      {children}
    </AuthContext.Provider>
  );
}
