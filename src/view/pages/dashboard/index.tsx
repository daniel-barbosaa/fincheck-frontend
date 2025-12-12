import { Logo } from "../../components/ui/logo";
import { UserMenu } from "../../components/user-menu";
import { Accounts } from "./components/accounts";
import { Fab } from "./components/fab";
import { EditAccountModal } from "./components/modals/edit-account-modal ";
import { NewAccountModal } from "./components/modals/new-account-modal";
import { NewTransactionModal } from "./components/modals/new-transaction-modal";
import { Transactions } from "./components/transactions";
import { DashboardProvider } from "./dashboard-context";

export function Dashboard() {
  return (
    <DashboardProvider>
      <div className="flex h-full w-full flex-col gap-4 p-4 md:p-8 md:pt-6">
        <header className="flex h-12 items-center justify-between">
          <Logo className="h-6 text-teal-900" />
          <UserMenu />
        </header>
        <main className="flex max-h-full flex-1 flex-col gap-4 md:flex-row">
          <section className="w-full md:max-w-1/2">
            <Accounts />
          </section>
          <section className="w-full md:max-w-1/2">
            <Transactions />
          </section>
        </main>
        <Fab />
        <NewAccountModal />
        <NewTransactionModal />
        <EditAccountModal />
      </div>
    </DashboardProvider>
  );
}
