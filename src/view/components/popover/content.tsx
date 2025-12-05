import * as PopoverPrimitive from "@radix-ui/react-popover";
import type { ReactNode } from "react";
import { cn } from "../../../app/utils/class-name-merge";

interface PopoverPrimitiveProps {
  children: ReactNode;
  className?: string;
}
export function PopoverContent({ children, className }: PopoverPrimitiveProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        className={cn(
          "shadow-base z-99 space-y-2 rounded-2xl bg-white p-2",
          "data-[side=bottom]:animate-slide-up-end-fade data-[side=top]:animate-slide-down-and-fade",
          className,
        )}
      >
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
}
