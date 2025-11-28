import * as ModalPrimitive from "@radix-ui/react-dialog";

export function ModalClose({ ...props }: ModalPrimitive.DialogCloseProps) {
  return (
    <ModalPrimitive.Close {...props}>{props.children}</ModalPrimitive.Close>
  );
}
