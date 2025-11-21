import { Logo } from "../../components/logo";
import { UserMenu } from "../../components/user-menu";
import { Accounts } from "./components/accounts";
import { Transactions } from "./components/transactions";

export function Dashboard() {
  return (
    <div className="flex h-full w-full flex-col gap-4 p-4 md:p-8 md:pt-6">
      <header className="flex h-12 items-center justify-between">
        <Logo className="h-6 text-teal-900" />
        <UserMenu />
      </header>
      <main className="flex flex-1 flex-col gap-4 md:flex-row">
        <section className="w-full md:max-w-1/2">
          <Accounts />
        </section>
        <section className="w-full md:max-w-1/2">
          <Transactions />
        </section>
      </main>
    </div>
  );
}
