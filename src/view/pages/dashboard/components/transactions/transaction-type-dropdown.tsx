import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../components/icons/transactions-icon";
import { DropdownMenu } from "../../../../components/dropdown";
import { DropdownMenuTrigger } from "../../../../components/dropdown/trigger";
import { DropdownMenuContent } from "../../../../components/dropdown/content";
import { DropdownMenuItem } from "../../../../components/dropdown/item";
import { IncomeIcon } from "../../../../components/icons/income-icon";
import { ExpensesIcon } from "../../../../components/icons/expenses-icon";

export function TransactionTypeDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2">
          <TransactionsIcon />
          <span className="text-foreground/90 text-sm font-medium tracking-tighter">
            Transações
          </span>
          <ChevronDownIcon className="text-foreground" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="z-10 w-70">
        <DropdownMenuItem className="gap-2">
          <IncomeIcon />
          Receitas
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <ExpensesIcon />
          Despesas
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <TransactionsIcon />
          Transações
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
