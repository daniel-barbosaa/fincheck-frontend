import { cn } from "../../../app/utils/class-name-merge";
import { FieldError } from "./field-error";
import { formatDate } from "../../../app/utils/formatters/format-date";
import { Popover } from "./popover";

import { Calendar } from "./calendar";
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

type DateInputProps<T extends FieldValues> = {
  className?: string;
  control: Control<T>;
  name: FieldPath<T>;
};
export function DateInput<T extends FieldValues>({
  className,
  control,
  name,
}: DateInputProps<T>) {
  new Date();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        const showMessage = error?.message;
        return (
          <div>
            <Popover.Root>
              <Popover.Trigger asChild>
                <button
                  type="button"
                  className={cn(
                    "text-foreground/80 relative h-13 w-full rounded-lg border border-gray-500 bg-white px-3 pt-4 text-left transition-all outline-none focus:border-gray-800",
                    className,
                    error && "!border-red-900",
                  )}
                >
                  <span className="pointer-events-none absolute top-2 left-[13px] text-xs text-gray-700">
                    Data
                  </span>
                  <span>{formatDate(value)}</span>
                </button>
              </Popover.Trigger>
              <Popover.Content className="p-4">
                <Calendar value={value} onChange={onChange} />
              </Popover.Content>
            </Popover.Root>
            <FieldError error={showMessage} />
          </div>
        );
      }}
    />
  );
}
