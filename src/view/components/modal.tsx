import * as DialogPrimitive from "@radix-ui/react-dialog";
import React, { type ReactNode } from "react";
import { cn } from "../../app/utils/class-name-merge";
import { Cross2Icon } from "@radix-ui/react-icons";

function ModalRoot(
  props: Readonly<React.ComponentProps<typeof DialogPrimitive.Root>>,
) {
  return <DialogPrimitive.Root {...props} />;
}

interface ModalContentProps {
  children: ReactNode;
}

function ModalContent({ children }: ModalContentProps) {
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
interface ModalHeaderProps {
  children: ReactNode;
  rightAction?: ReactNode;
}

function ModalHeader({ children, rightAction }: ModalHeaderProps) {
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

function ModalTrigger(props: DialogPrimitive.DialogTriggerProps) {
  return <DialogPrimitive.Trigger>{props.children}</DialogPrimitive.Trigger>;
}

function ModalClose({ ...props }: DialogPrimitive.DialogCloseProps) {
  return (
    <DialogPrimitive.Close {...props}>{props.children}</DialogPrimitive.Close>
  );
}

export const Modal = {
  Root: ModalRoot,
  Header: ModalHeader,
  Content: ModalContent,
  Trigger: ModalTrigger,
  Close: ModalClose,
};
