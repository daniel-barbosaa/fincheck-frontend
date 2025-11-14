import { formatCurrency } from "../../../../app/utils/formatters/format-currency";
import { Card } from "../../../components/card";
import { BankAccountTypeIcon } from "../../../components/icons/bank-account-type-icon";

interface AccountCardProps {
  name: string;
  currencyValue: number;
  type: "cash" | "checking" | "investment";
}

export function AccountCard({ currencyValue, name, type }: AccountCardProps) {
  return (
    <Card
      className="flex h-50 flex-col justify-between border-b-4 border-amber-700 p-4"
      style={{ borderColor: "#f4ff32" }}
    >
      <div>
        <BankAccountTypeIcon type={type} />
        <span className="text-foreground/90 mt-4 block font-medium tracking-tighter">
          {name}
        </span>
      </div>
      <div>
        <span className="text-foreground/90 block font-medium tracking-tighter">
          {formatCurrency(currencyValue)}
        </span>
        <small className="text-foreground/60">Saldo atual</small>
      </div>
    </Card>
  );
}
