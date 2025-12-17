import { ACCOUNT_OPTIONS } from "../../../../../../app/types/account";
import { ConfirmDeleteModal } from "../../../../../components/confirm-delete-modal";
import { TrashIcon } from "../../../../../components/icons/trash-icon";

import { Button } from "../../../../../components/ui/button";
import { ColorsDropdownInput } from "../../../../../components/ui/colors-input";
import { CurrencyInput } from "../../../../../components/ui/currency-input";

import { InputText } from "../../../../../components/ui/input-text";
import { Modal } from "../../../../../components/ui/modal";
import { Select } from "../../../../../components/ui/select";

import { useEditAccountModalController } from "./use-edit-account-modal-controller";

export function EditAccountModal() {
  const {
    isEditAccountModalOpen,
    closeEditAccountModal,
    handleSubmit,
    formMethods,
    isPending,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
    isDeleteModalOpen,
    handleDeleteAccount,
    isPendingDelete,
  } = useEditAccountModalController();

  if (isDeleteModalOpen) {
    return (
      <ConfirmDeleteModal
        title="Tem certeza que deseja excluir esta conta?"
        description="Ao excluir a conta, também serão excluídos todos os registros de receita e despesas relacionados."
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteAccount}
        isLoading={isPendingDelete}
      />
    );
  }

  return (
    <Modal.Root
      open={isEditAccountModalOpen}
      onOpenChange={closeEditAccountModal}
    >
      <Modal.Content>
        <Modal.Header
          rightAction={<TrashButton onOpen={handleOpenDeleteModal} />}
        >
          Editar Conta
        </Modal.Header>

        <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
          <div>
            <span className="text-foreground/70 text-xs tracking-tight">
              Saldo
            </span>
            <div className="flex items-center gap-2">
              <span className="text-foreground/70 tracking-tight">R$</span>
              <CurrencyInput
                name="initialBalance"
                control={formMethods.control}
              />
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4">
            <InputText
              name="name"
              placeholder="Nome da conta"
              control={formMethods.control}
            />
            <Select
              name="type"
              placeholder="Tipo"
              options={ACCOUNT_OPTIONS}
              control={formMethods.control}
            />
            <ColorsDropdownInput name="color" control={formMethods.control} />
          </div>

          <Button className="mt-6 w-full" type="submit" isLoading={isPending}>
            Salvar
          </Button>
        </form>
      </Modal.Content>
    </Modal.Root>
  );
}

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
