import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import type { ReactNode } from "react";
import { cn } from "../../../app/utils/class-name-merge";

interface DropdownMenuItemProps {
  children: ReactNode;
  className?: string;
  onSelect?(): void;
}
export function DropdownMenuItem({
  children,
  className,
  onSelect,
}: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        "text-foreground/90 flex min-h-10 cursor-pointer items-center rounded-2xl px-4 py-2 text-sm transition-colors outline-none data-[highlighted]:bg-gray-50",
        className,
      )}
      onSelect={onSelect}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  );
}
