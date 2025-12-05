import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface CalendarProps {
  value: Date;
  onChange?(date: Date): void;
}

export function Calendar({ value, onChange }: CalendarProps) {
  return (
    <DayPicker
      locale={ptBR}
      mode="single"
      selected={value}
      onSelect={(date) => onChange?.(date ?? new Date())}
      classNames={{
        caption_label:
          "flex items-center capitalize text-gray-900 text-base ml-2 font-medium tracking tracking-[-0.408px]",
        weekdays: "uppercase text-xs text-gray-500 font-medium",
        chevron: "fill-teal-800",
        today: "text-white",
        day: "text-gray-700",
        selected: "bg-primary text-white rounded-full",
      }}
      formatters={{
        formatCaption(date, options) {
          return format(date, "LLLL yyyy", options);
        },
      }}
    />
  );
}
