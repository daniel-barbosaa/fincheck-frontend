import { ACCOUNT_OPTIONS } from "../../../../../../app/types/account";
import { Button } from "../../../../../components/button";
import { ColorsDropdownInput } from "../../../../../components/colors-input";
import { CurrencyInput } from "../../../../../components/currency-input";
import { Input } from "../../../../../components/input";

import { Modal } from "../../../../../components/modal";
import { ModalContent } from "../../../../../components/modal/content";
import { ModalHeader } from "../../../../../components/modal/header";
import { Select } from "../../../../../components/select";
import { useNewAccountModalController } from "./use-new-account-modal-controller";

export function NewAccountModal() {
  const { isNewAccountModalOpen, closeNewAccountModal } =
    useNewAccountModalController();
  return (
    <Modal open={isNewAccountModalOpen} onOpenChange={closeNewAccountModal}>
      <ModalContent>
        <ModalHeader>Nova Conta</ModalHeader>
        <form>
          <div>
            <span className="text-foreground/70 text-xs tracking-tight">
              Saldo
            </span>
            <div className="flex items-center gap-2">
              <span className="text-foreground/70 tracking-tight">R$</span>
              <CurrencyInput />
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4">
            <Input type="text" name="name" placeholder="Nome da conta" />
            <Select placeholder="Tipo" options={ACCOUNT_OPTIONS} />
            <ColorsDropdownInput />
          </div>

          <Button className="mt-6 w-full" type="submit">
            Criar
          </Button>
        </form>
      </ModalContent>
    </Modal>
  );
}
