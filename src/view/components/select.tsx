import * as SelectPrimitive from "@radix-ui/react-select";

import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { cn } from "../../app/utils/class-name-merge";
import { FieldError } from "./field-error";
import { useState } from "react";

interface SelectProps {
  className?: string;
  error?: string;
  placeholder?: string;
  options: {
    value: string;
    label: string;
  }[];
}

export function Select({
  className,
  error,
  placeholder,
  options,
}: SelectProps) {
  const [selectdValue, setSelectedValue] = useState("");

  function handleSelect(value: string) {
    setSelectedValue(value);
  }
  return (
    <div>
      <div className="relative">
        <label
          className={cn(
            "text-foreground/80 pointer-events-none absolute top-6.5 left-3 z-10 -translate-y-1/2",
            selectdValue &&
              "top-2 left-[13px] translate-y-0 text-xs transition-all",
          )}
        >
          {placeholder}
        </label>
        <SelectPrimitive.Root onValueChange={handleSelect}>
          <SelectPrimitive.Trigger
            className={cn(
              "relative h-13 w-full rounded-lg border border-gray-500 bg-white px-3 pt-4 text-left text-gray-800 transition-all outline-none focus:border-gray-800",
              className,
              error && "!border-red-900",
            )}
          >
            <SelectPrimitive.Value />
            <SelectPrimitive.Icon className="absolute top-1/2 right-3 -translate-y-1/2">
              <ChevronDownIcon className="text-foreground/90 size-6" />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>

          <SelectPrimitive.Portal>
            <SelectPrimitive.Content className="shadow-base z-99 overflow-hidden rounded-2xl border border-gray-100 bg-white">
              <SelectPrimitive.ScrollUpButton className="text-foreground/90 flex h-[25px] cursor-default items-center justify-center bg-white">
                <ChevronUpIcon />
              </SelectPrimitive.ScrollUpButton>

              <SelectPrimitive.Viewport className="p-2">
                {options.map((option) => (
                  <SelectPrimitive.Item
                    key={option.value}
                    value={option.value}
                    className="text-foreground/90 rounded-lg p-2 text-sm transition-colors outline-none data-[highlighted]:bg-gray-50 data-[state=checked]:font-bold"
                  >
                    <SelectPrimitive.ItemText>
                      {option.label}
                    </SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>
              <SelectPrimitive.ScrollDownButton className="text-foreground/90 flex h-[25px] cursor-default items-center justify-center bg-white">
                <ChevronDownIcon />
              </SelectPrimitive.ScrollDownButton>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </div>
      <FieldError error={error} />
    </div>
  );
}
