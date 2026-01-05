import { Accounts } from "./components/accounts";
import { Fab } from "./components/fab";
import { EditAccountModal } from "./components/modals/edit-account-modal ";
import { NewAccountModal } from "./components/modals/new-account-modal";
import { NewTransactionModal } from "./components/modals/new-transaction-modal";
import { Transactions } from "./components/transactions";
import { DashboardContext, DashboardProvider } from "./dashboard-context";

export default function Dashboard() {
  return (
    <DashboardProvider>
      <DashboardContext.Consumer>
        {({ accountBeingEdit }) => (
          <>
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
            {accountBeingEdit && <EditAccountModal />}
          </>
        )}
      </DashboardContext.Consumer>
    </DashboardProvider>
  );
}
