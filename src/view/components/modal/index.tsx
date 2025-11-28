import * as DialogPrimitive from "@radix-ui/react-dialog";
import React from "react";

export function Modal(
  props: Readonly<React.ComponentProps<typeof DialogPrimitive.Root>>,
) {
  return <DialogPrimitive.Root {...props} />;
}
