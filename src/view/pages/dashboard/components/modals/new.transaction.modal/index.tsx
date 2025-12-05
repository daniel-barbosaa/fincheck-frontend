import { ACCOUNT_OPTIONS } from "../../../../../../app/types/account";
import { Button } from "../../../../../components/button";

import { CurrencyInput } from "../../../../../components/currency-input";
import { DateInput } from "../../../../../components/date-input";
import { Input } from "../../../../../components/input";

import { Modal } from "../../../../../components/modal";
import { ModalContent } from "../../../../../components/modal/content";
import { ModalHeader } from "../../../../../components/modal/header";
import { Select } from "../../../../../components/select";
import { useNewTransactionModalController } from "./use-new-transaction-modal-controller";

export function NewTransactionModal() {
  const {
    closeNewTransactionModal,
    isNewTransactionModalOpen,
    newTransactionType,
  } = useNewTransactionModalController();
  const isExpense = newTransactionType === "EXPENSE";
  return (
    <Modal
      open={isNewTransactionModalOpen}
      onOpenChange={closeNewTransactionModal}
    >
      <ModalContent>
        <ModalHeader>{isExpense ? "Nova despesa" : "Nova Receita"}</ModalHeader>
        <form>
          <div>
            <span className="text-foreground/70 text-xs tracking-tight">
              Valor {isExpense ? "da despesa" : "da receita"}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-foreground/70 tracking-tight">R$</span>
              <CurrencyInput />
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4">
            <Input
              type="text"
              name="name"
              placeholder={isExpense ? "Nome da despesa" : "Nome da receita"}
            />
            <Select placeholder="Categoria" options={ACCOUNT_OPTIONS} />
            <Select
              placeholder={isExpense ? "Pagar com" : "Receber na conta"}
              options={ACCOUNT_OPTIONS}
            />
            <DateInput />
          </div>

          <Button className="mt-6 w-full" type="submit">
            Criar
          </Button>
        </form>
      </ModalContent>
    </Modal>
  );
}
