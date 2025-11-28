import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { type ReactNode } from "react";
import { ModalClose } from "./close";

interface ModalHeaderProps {
  children: ReactNode;
  rightAction?: ReactNode;
}
export function ModalHeader({ children, rightAction }: ModalHeaderProps) {
  return (
    <header className="text-foreground/90 flex h-12 items-center justify-between">
      <ModalClose className="flex size-12 items-center justify-center">
        <Cross2Icon className="size-6" />
      </ModalClose>
      <DialogPrimitive.DialogTitle>
        <span className="text-lg font-bold tracking-tight">{children}</span>
      </DialogPrimitive.DialogTitle>
      <div className="flex size-12 items-center justify-center">
        {rightAction}
      </div>
    </header>
  );
}
