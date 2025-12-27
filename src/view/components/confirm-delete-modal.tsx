import { TrashIcon } from "./icons/trash-icon";
import { Button } from "./ui/button";
import { Modal } from "./ui/modal";
interface ConfirmDeleteModalProps {
  onClose?(): void;
  title: string;
  description?: string;
  onConfirm(): void;
  isLoading: boolean;
}
export function ConfirmDeleteModal({
  onClose,
  title,
  description,
  onConfirm,
  isLoading,
}: ConfirmDeleteModalProps) {
  return (
    <Modal.Root open onOpenChange={onClose}>
      <Modal.Content>
        <Modal.Header>Excluir</Modal.Header>
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="flex size-[52px] items-center justify-center rounded-full bg-red-50">
            <TrashIcon className="size-6 text-red-900" />
          </div>
          <p className="text-foreground/90 w-47 font-bold tracking-[0.5px]">
            {title}
          </p>
          {description && (
            <p className="text-foreground/90 tracking-[0.5px]">{description}</p>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <Button
            variant="destructive"
            onClick={onConfirm}
            isLoading={isLoading}
          >
            Sim, desejo excluir
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
        </div>
      </Modal.Content>
    </Modal.Root>
  );
}
