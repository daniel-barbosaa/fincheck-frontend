import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ReactNode } from "react";
import { cn } from "../../../app/utils/class-name-merge";

interface ModalContentProps {
  children: ReactNode;
}

export function ModalContent({ children }: ModalContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        className={cn(
          "fixed inset-0 z-50 bg-black/80 backdrop-blur-xs",
          "data-[state=open]:animate-overlay-show",
        )}
      />
      <DialogPrimitive.Content
        className={cn(
          "shadow-base fixed top-1/2 left-1/2 z-51 w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 outline-none",
        )}
      >
        <div className="space-y-10">{children}</div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
