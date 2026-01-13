import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { Input } from "./input";
import type { ComponentProps } from "react";

type InputTextProps<T extends FieldValues> = ComponentProps<"input"> & {
  control: Control<T>;
  name: FieldPath<T>;
};

export function InputText<T extends FieldValues>({
  control,
  name,
  placeholder,
}: InputTextProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        const showMessage = error?.message;
        return (
          <Input
            name={name}
            error={showMessage}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            type="text"
          />
        );
      }}
    />
  );
}
