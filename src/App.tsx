import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./Router";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./app/contexts/auth/auth-context";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import * as Sentry from "@sentry/react";
import { UnexpectedError } from "./view/components/states/unexpected-error";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  return (
    <Sentry.ErrorBoundary fallback={<UnexpectedError />}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <AuthProvider>
          <Router />
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </Sentry.ErrorBoundary>
  );
}
