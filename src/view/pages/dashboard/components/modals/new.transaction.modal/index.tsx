import { Button } from "../../../../../components/ui/button";

import { DateInput } from "../../../../../components/ui/date-input";
import { Input } from "../../../../../components/ui/input";

import { Modal } from "../../../../../components/ui/modal";

import { useNewTransactionModalController } from "./use-new-transaction-modal-controller";

export function NewTransactionModal() {
  const {
    closeNewTransactionModal,
    isNewTransactionModalOpen,
    newTransactionType,
  } = useNewTransactionModalController();
  const isExpense = newTransactionType === "EXPENSE";
  return (
    <Modal.Root
      open={isNewTransactionModalOpen}
      onOpenChange={closeNewTransactionModal}
    >
      <Modal.Content>
        <Modal.Header>
          {isExpense ? "Nova despesa" : "Nova Receita"}
        </Modal.Header>
        <form>
          <div>
            <span className="text-foreground/70 text-xs tracking-tight">
              Valor {isExpense ? "da despesa" : "da receita"}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-foreground/70 tracking-tight">R$</span>
              {/* <CurrencyInput /> */}
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4">
            <Input
              type="text"
              name="name"
              placeholder={isExpense ? "Nome da despesa" : "Nome da receita"}
            />
            {/* <Select placeholder="Categoria" options={ACCOUNT_OPTIONS} />
            <Select
              placeholder={isExpense ? "Pagar com" : "Receber na conta"}
              options={ACCOUNT_OPTIONS}
            /> */}
            <DateInput />
          </div>

          <Button className="mt-6 w-full" type="submit">
            Criar
          </Button>
        </form>
      </Modal.Content>
    </Modal.Root>
  );
}
