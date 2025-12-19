import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../components/icons/transactions-icon";
import { DropdownMenu } from "../../../../components/dropdown";
import { DropdownMenuTrigger } from "../../../../components/dropdown/trigger";
import { DropdownMenuContent } from "../../../../components/dropdown/content";
import { DropdownMenuItem } from "../../../../components/dropdown/item";
import { IncomeIcon } from "../../../../components/icons/income-icon";
import { ExpensesIcon } from "../../../../components/icons/expenses-icon";
import type { TransactionType } from "../../../../../app/types/transaction";

interface TransactionTypeDropdownProps {
  onSelect(type: TransactionType | undefined): void;
  selectedType: TransactionType | undefined;
}

export function TransactionTypeDropdown({
  onSelect,
  selectedType,
}: TransactionTypeDropdownProps) {
  const type =
    selectedType === "EXPENSE"
      ? "Despesas"
      : selectedType === "INCOME"
        ? "Receitas"
        : "Transações";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2">
          {selectedType === "EXPENSE" && <ExpensesIcon />}
          {selectedType === "INCOME" && <IncomeIcon />}
          {selectedType === undefined && <TransactionsIcon />}
          <span className="text-foreground/90 text-sm font-medium tracking-tighter">
            {type}
          </span>
          <ChevronDownIcon className="text-foreground" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="z-10 w-70">
        <DropdownMenuItem className="gap-2" onSelect={() => onSelect("INCOME")}>
          <IncomeIcon />
          Receitas
        </DropdownMenuItem>
        <DropdownMenuItem
          className="gap-2"
          onSelect={() => onSelect("EXPENSE")}
        >
          <ExpensesIcon />
          Despesas
        </DropdownMenuItem>
        <DropdownMenuItem
          className="gap-2"
          onSelect={() => onSelect(undefined)}
        >
          <TransactionsIcon />
          Transações
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
