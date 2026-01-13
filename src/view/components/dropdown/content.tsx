import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import type { ReactNode } from "react";
import { cn } from "../../../app/utils/class-name-merge";

interface DropdownMenuContentProps {
  children: ReactNode;
  className?: string;
}
export function DropdownMenuContent({
  children,
  className,
}: DropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        className={cn(
          "shadow-base z-99 space-y-2 rounded-2xl bg-white p-2",
          "data-[side=bottom]:animate-slide-up-end-fade data-[side=top]:animate-slide-down-and-fade",
          className,
        )}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
}
