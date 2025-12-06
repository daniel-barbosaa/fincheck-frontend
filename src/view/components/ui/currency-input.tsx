import { NumericFormat } from "react-number-format";
export function CurrencyInput() {
  return (
    <NumericFormat
      thousandSeparator="."
      decimalSeparator=","
      className="text-foreground/90 w-full text-[32px] font-bold tracking-tight outline-none"
      defaultValue="0,00"
    />
  );
}
