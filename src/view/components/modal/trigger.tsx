import * as DialogPrimitive from "@radix-ui/react-dialog";

export function ModalTrigger(props: DialogPrimitive.DialogTriggerProps) {
  return <DialogPrimitive.Trigger>{props.children}</DialogPrimitive.Trigger>;
}
