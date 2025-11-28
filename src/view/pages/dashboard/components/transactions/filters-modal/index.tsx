import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Modal } from "../../../../../components/modal";
import { ModalContent } from "../../../../../components/modal/content";
import { ModalHeader } from "../../../../../components/modal/header";
import { Button } from "../../../../../components/button";
import { useFiltersModal } from "./use-filters-modal";
import { cn } from "../../../../../../app/utils/class-name-merge";

interface FiltersModalProps {
  open: boolean;
  onOpenChange?(): void;
}

const mockedAccounts = [
  {
    id: "1",
    name: "Nubank",
  },
  {
    id: "2",
    name: "Inter",
  },
  {
    id: "3",
    name: "XP Investimentos",
  },
];

export function FiltersModal({ onOpenChange, open }: FiltersModalProps) {
  const {
    handleSelectBankAccount,
    selectedBankAccountId,
    selectedYear,
    handleChangeYear,
  } = useFiltersModal();
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader>Filtros</ModalHeader>
        <div>
          <span className="text-foreground/90 text-lg font-bold tracking-tight">
            Conta
          </span>
          <div className="mt-2 space-y-2">
            {mockedAccounts.map((account) => (
              <button
                key={account.id}
                onClick={() => handleSelectBankAccount(account.id)}
                className={cn(
                  "text-foreground/90 w-full rounded-2xl p-2 text-left transition-colors hover:bg-gray-50",
                  account.id === selectedBankAccountId && "!bg-gray-200",
                )}
              >
                {account.name}
              </button>
            ))}
          </div>
        </div>

        <div className="text-foreground/90 mt-10">
          <span className="text-lg font-bold tracking-tight">Ano</span>
          <div className="mt-2 flex w-52 items-center justify-between">
            <button
              className="flex size-12 items-center justify-center"
              onClick={() => handleChangeYear(-1)}
            >
              <ChevronLeftIcon className="size-6" />
            </button>
            <div className="flex-1 text-center">
              <span className="text-sm font-medium tracking-tight">
                {selectedYear}
              </span>
            </div>
            <button
              className="flex size-12 items-center justify-center"
              onClick={() => handleChangeYear(1)}
            >
              <ChevronRightIcon className="size-6" />
            </button>
          </div>
        </div>
        <Button className="mt-10 w-full">Aplicar Filtros</Button>
      </ModalContent>
    </Modal>
  );
}
