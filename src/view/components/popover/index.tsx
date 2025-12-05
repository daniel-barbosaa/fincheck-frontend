import * as PopoverPrimitive from "@radix-ui/react-popover";
import type { ReactNode } from "react";

export function Popover({ children }: { children: ReactNode }) {
  return <PopoverPrimitive.Root>{children}</PopoverPrimitive.Root>;
}
