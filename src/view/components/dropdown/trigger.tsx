import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export function DropdownMenuTrigger(
  props: DropdownMenuPrimitive.DropdownMenuTriggerProps,
) {
  return (
    <DropdownMenuPrimitive.Trigger
      className="cursor-pointer outline-none"
      {...props}
    >
      {props.children}
    </DropdownMenuPrimitive.Trigger>
  );
}
