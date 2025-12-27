import { TrashIcon } from "../icons/trash-icon";

interface TrashButtonProps {
  onOpen?(): void;
}
export function TrashButton({ onOpen }: TrashButtonProps) {
  return (
    <button onClick={onOpen}>
      <TrashIcon className="size-6 text-red-900" />
    </button>
  );
}
