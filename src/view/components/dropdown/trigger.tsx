import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import type { ReactNode } from "react";

export function DropdownMenuTrigger({ children }: { children: ReactNode }) {
  return (
    <DropdownMenuPrimitive.Trigger className="cursor-pointer outline-none">
      {children}
    </DropdownMenuPrimitive.Trigger>
  );
}
