import * as PopoverPrimitive from "@radix-ui/react-popover";

export function PopoverTrigger(props: PopoverPrimitive.PopoverTriggerProps) {
  return (
    <PopoverPrimitive.Trigger
      className="cursor-pointer outline-none"
      {...props}
    >
      {props.children}
    </PopoverPrimitive.Trigger>
  );
}
