import { NumericFormat } from "react-number-format";
import { FieldError } from "./field-error";
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

type CurrencyInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
};
export function CurrencyInput<T extends FieldValues>({
  name,
  control,
}: CurrencyInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        const showMessage = error?.message;
        return (
          <div>
            <NumericFormat
              thousandSeparator="."
              decimalSeparator=","
              className="text-foreground/90 w-full text-[32px] font-bold tracking-tight outline-none"
              onChange={onChange}
              value={value}
            />
            <FieldError error={showMessage} />
          </div>
        );
      }}
    />
  );
}
