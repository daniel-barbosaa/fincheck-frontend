import { Card } from "../../../../components/card";
import { FilterIcon } from "../../../../components/icons/filter-icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/constants/months";

import { TransactionSliderOption } from "./slider-option";
import { TransactionSliderNavigation } from "./slider-navigation";
import { formatCurrency } from "../../../../../app/utils/formatters/format-currency";
import { CategoryIcon } from "../../../../components/icons/categories/category-icon";
import { useTransactionsController } from "./use-transactions-controller";
import { cn } from "../../../../../app/utils/class-name-merge";
import { Spinner } from "../../../../components/spinner";
import emptyState from "../../../../../assets/empty-state.svg";
import { TransactionTypeDropdown } from "./transaction-type-dropdown";
export function Transactions() {
  const { areValuesVisible, isLoading, transaction, isInitialLoading } =
    useTransactionsController();
  const hasTransactions = transaction.length > 0;

  return (
    <Card className="flex h-full w-full flex-col bg-gray-100 px-4 py-8 md:p-10">
      {isInitialLoading && (
        <div className="flex h-full items-center justify-center">
          <Spinner clasName="size-10" />
        </div>
      )}

      {!isInitialLoading && (
        <>
          <header>
            <div className="flex items-center justify-between">
              <TransactionTypeDropdown />
              <button>
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

            {hasTransactions && !isLoading && (
              <>
                <Card className="flex items-center justify-between gap-4 p-4">
                  <div className="flex flex-1 items-center gap-3">
                    <CategoryIcon type="expense" />
                    <div>
                      <strong className="block font-bold tracking-tighter">
                        Almoço
                      </strong>
                      <span className="text-foreground/60 text-sm">
                        10/02/2025
                      </span>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "font-medium tracking-tighter text-red-800",
                      !areValuesVisible && "blur-sm",
                    )}
                  >
                    {formatCurrency(30.52)}
                  </span>
                </Card>

                <Card className="flex items-center justify-between gap-4 p-4">
                  <div className="flex flex-1 items-center gap-3">
                    <CategoryIcon type="income" />
                    <div>
                      <strong className="block font-bold tracking-tighter">
                        Almoço
                      </strong>
                      <span className="text-foreground/60 text-sm">
                        10/02/2025
                      </span>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "font-medium tracking-tighter text-green-800",
                      !areValuesVisible && "blur-sm",
                    )}
                  >
                    {formatCurrency(30.52)}
                  </span>
                </Card>
              </>
            )}
          </div>
        </>
      )}
    </Card>
  );
}
