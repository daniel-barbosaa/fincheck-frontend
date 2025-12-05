import { useState } from "react";
import { cn } from "../../app/utils/class-name-merge";
import { FieldError } from "./field-error";
import { formatDate } from "../../app/utils/formatters/format-date";
import { Popover } from "./popover";
import { PopoverTrigger } from "./popover/trigger";
import { PopoverContent } from "./popover/content";
import { Calendar } from "./calendar";

interface DateInputProps {
  className?: string;
  error?: string;
}
export function DateInput({ className, error }: DateInputProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
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
            <span>{formatDate(selectedDate)}</span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="p-4">
          <Calendar
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </PopoverContent>
      </Popover>
      <FieldError error={error} />
    </div>
  );
}
