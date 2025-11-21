import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Card } from "../../../../components/card";
import { TransactionsIcon } from "../../../../components/icons/transactions-icon";
import { FilterIcon } from "../../../../components/icons/filter-icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/constants/months";

import { TransactionSliderOption } from "./slider-option";
import { TransactionSliderNavigation } from "./slider-navigation";

export function Transactions() {
  return (
    <Card className="h-full w-full bg-gray-100 px-4 py-8 md:p-10">
      <header>
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2">
            <TransactionsIcon />
            <span className="text-foreground/90 text-sm font-medium tracking-tighter">
              Transações
            </span>
            <ChevronDownIcon className="text-foreground" />
          </button>
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
      <div className="mt-4">Conteudo</div>
    </Card>
  );
}
