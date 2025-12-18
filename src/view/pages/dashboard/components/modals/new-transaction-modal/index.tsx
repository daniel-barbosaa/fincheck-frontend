import { Button } from "../../../../../components/ui/button";
import { CurrencyInput } from "../../../../../components/ui/currency-input";

import { DateInput } from "../../../../../components/ui/date-input";

import { Modal } from "../../../../../components/ui/modal";

import { useNewTransactionModalController } from "./use-new-transaction-modal-controller";

import { Select } from "../../../../../components/ui/select";
import { InputText } from "../../../../../components/ui/input-text";

export function NewTransactionModal() {
  const {
    closeNewTransactionModal,
    isNewTransactionModalOpen,
    newTransactionType,
    formMethods,
    handleSubmit,
    allAccountsOption,
    allCategoriesOption,
    isLoadingBankAccounts,
    isLoadingCategories,
    isPending,
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
        <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
          <div>
            <span className="text-foreground/70 text-xs tracking-tight">
              Valor {isExpense ? "da despesa" : "da receita"}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-foreground/70 tracking-tight">R$</span>
              <CurrencyInput name="value" control={formMethods.control} />
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4">
            <InputText
              control={formMethods.control}
              name="name"
              placeholder={isExpense ? "Nome da despesa" : "Nome da receita"}
            />

            <Select
              isLoading={isLoadingCategories}
              name="categoryId"
              placeholder="Categoria"
              options={allCategoriesOption}
              control={formMethods.control}
            />
            <Select
              isLoading={isLoadingBankAccounts}
              name="bankAccountId"
              placeholder={isExpense ? "Pagar com" : "Receber na conta"}
              options={allAccountsOption}
              control={formMethods.control}
            />
            <DateInput name="date" control={formMethods.control} />
          </div>

          <Button className="mt-6 w-full" type="submit" isLoading={isPending}>
            Criar
          </Button>
        </form>
      </Modal.Content>
    </Modal.Root>
  );
}
