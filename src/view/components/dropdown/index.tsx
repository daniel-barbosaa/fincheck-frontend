import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import type { ReactNode } from "react";

export function DropdownMenu({ children }: { children: ReactNode }) {
  return <DropdownMenuPrimitive.Root>{children}</DropdownMenuPrimitive.Root>;
}
