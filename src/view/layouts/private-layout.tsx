import { Outlet } from "react-router-dom";
import { Logo } from "../components/ui/logo";
import { UserMenu } from "../components/user-menu";
import * as Sentry from "@sentry/react";
import { UnexpectedError } from "../components/states/unexpected-error";

export function PrivateLayout() {
  return (
    <div className="flex h-full w-full flex-col gap-4 p-4 md:p-8 md:pt-6">
      <header className="flex h-12 items-center justify-between">
        <Logo className="h-6 text-teal-900" />
        <UserMenu />
      </header>
      <main className="flex max-h-full flex-1 flex-col">
        <Sentry.ErrorBoundary fallback={<UnexpectedError />}>
          <Outlet />
        </Sentry.ErrorBoundary>
      </main>
    </div>
  );
}
