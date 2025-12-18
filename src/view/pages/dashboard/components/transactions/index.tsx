import { Card } from "../../../../components/ui/card";
import { FilterIcon } from "../../../../components/icons/filter-icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/constants/months";

import { TransactionSliderOption } from "./slider-option";
import { TransactionSliderNavigation } from "./slider-navigation";
import { formatCurrency } from "../../../../../app/utils/formatters/format-currency";
import { CategoryIcon } from "../../../../components/icons/categories/category-icon";
import { useTransactionsController } from "./use-transactions-controller";
import { cn } from "../../../../../app/utils/class-name-merge";
import { Spinner } from "../../../../components/ui/spinner";
import emptyState from "../../../../../assets/empty-state.svg";
import { TransactionTypeDropdown } from "./transaction-type-dropdown";
import { FiltersModal } from "./filters-modal";
import { formatDate } from "../../../../../app/utils/formatters/format-date";
export function Transactions() {
  const {
    valueVisible,
    isLoading,
    transactions,
    isInitialLoading,
    isFiltersModalOpen,
    handleCloseFiltersModal,
    handleOpenFiltersModal,
  } = useTransactionsController();
  const hasTransactions = transactions.length > 0;

  return (
    <Card className="flex h-full w-full flex-col bg-gray-100 px-4 py-8 md:p-10">
      {isInitialLoading && (
        <div className="flex h-full items-center justify-center">
          <Spinner clasName="size-10" />
        </div>
      )}
      {!isInitialLoading && (
        <>
          <FiltersModal
            open={isFiltersModalOpen}
            onOpenChange={handleCloseFiltersModal}
          />
          <header>
            <div className="flex items-center justify-between">
              <TransactionTypeDropdown />
              <button onClick={handleOpenFiltersModal}>
                <FilterIcon />
              </button>
            </div>

            <div className="relative mt-6">
              <Swiper slidesPerView={3} centeredSlides>
                {MONTHS.map((month, index) => (
                  <SwiperSlide key={month}>
                    {({ isActive }) => (
                      <TransactionSliderOption
                        index={index}
                        isActive={isActive}
                        month={month}
                      />
                    )}
                  </SwiperSlide>
                ))}
                <TransactionSliderNavigation />
              </Swiper>
            </div>
          </header>

          <div className="mt-4 flex-1 space-y-2 overflow-y-auto">
            {isLoading && (
              <div className="flex h-full flex-col items-center justify-center">
                <Spinner />
              </div>
            )}

            {!hasTransactions && !isLoading && (
              <div className="flex h-full flex-col items-center justify-center">
                <img src={emptyState} alt="Empty state" />
                <p className="text-foreground/80">
                  Não encontramos nenhuma transação!
                </p>
              </div>
            )}

            {hasTransactions &&
              !isLoading &&
              transactions.map((transaction) => (
                <Card
                  className="flex items-center justify-between gap-4 p-4"
                  key={transaction.id}
                >
                  <div className="flex flex-1 items-center gap-3">
                    <CategoryIcon
                      type={
                        transaction.type === "EXPENSE" ? "expense" : "income"
                      }
                      category={transaction.category?.icon}
                    />
                    <div>
                      <strong className="block font-bold tracking-tighter capitalize">
                        {transaction.name}
                      </strong>
                      <span className="text-foreground/60 text-sm">
                        {formatDate(new Date(transaction.date))}
                      </span>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "font-medium tracking-tighter",
                      transaction.type === "EXPENSE"
                        ? "text-red-800"
                        : "text-green-800",
                      !valueVisible && "blur-sm",
                    )}
                  >
                    {transaction.type === "EXPENSE" ? "-" : "+"}
                    {formatCurrency(transaction.value)}
                  </span>
                </Card>
              ))}
          </div>
        </>
      )}
    </Card>
  );
}
