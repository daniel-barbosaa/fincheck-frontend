import { PlusIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../components/dropdown";
import { DropdownMenuTrigger } from "../../../../components/dropdown/trigger";
import { DropdownMenuContent } from "../../../../components/dropdown/content";
import { DropdownMenuItem } from "../../../../components/dropdown/item";

import { BankAccountIcon } from "../../../../components/icons/bank-account-icon";
import { CategoryIcon } from "../../../../components/icons/categories/category-icon";
import { useDashboard } from "../../dashboard-context";

export function Fab() {
  const { openNewAccountModal, openNewTransactionModal } = useDashboard();
  return (
    <div className="fixed right-4 bottom-4 z-30">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex size-12 items-center justify-center rounded-full bg-teal-900 text-white">
            <PlusIcon className="size-6" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            className="gap-2"
            onSelect={() => openNewTransactionModal("EXPENSE")}
          >
            <CategoryIcon type="expense" />
            Nova despesa
          </DropdownMenuItem>
          <DropdownMenuItem
            className="gap-2"
            onSelect={() => openNewTransactionModal("INCOME")}
          >
            <CategoryIcon type="income" />
            Nova Receita
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2" onSelect={openNewAccountModal}>
            <BankAccountIcon />
            Nova Conta
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
