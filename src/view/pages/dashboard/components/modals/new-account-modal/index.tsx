import { ACCOUNT_OPTIONS } from "../../../../../../app/types/account";
import { Button } from "../../../../../components/ui/button";
import { ColorsDropdownInput } from "../../../../../components/ui/colors-input";
import { CurrencyInput } from "../../../../../components/ui/currency-input";

import { InputText } from "../../../../../components/ui/input-text";
import { Modal } from "../../../../../components/ui/modal";
import { Select } from "../../../../../components/ui/select";

import { useNewAccountModalController } from "./use-new-account-modal-controller";

export function NewAccountModal() {
  const {
    isNewAccountModalOpen,
    closeNewAccountModal,
    handleSubmit,
    formMethods,
  } = useNewAccountModalController();

  return (
    <Modal.Root
      open={isNewAccountModalOpen}
      onOpenChange={closeNewAccountModal}
    >
      <Modal.Content>
        <Modal.Header>Nova Conta</Modal.Header>

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

          <Button className="mt-6 w-full" type="submit">
            Criar
          </Button>
        </form>
      </Modal.Content>
    </Modal.Root>
  );
}
