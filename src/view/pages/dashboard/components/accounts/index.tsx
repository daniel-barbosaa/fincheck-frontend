import { Card } from "../../../../components/card";
import { EyeIcon } from "../../../../components/icons/eye-icon";

import { Swiper, SwiperSlide } from "swiper/react";
import { formatCurrency } from "../../../../../app/utils/formatters/format-currency";

import { AccountsSliderNavigation } from "./slider-navigation";
import { AccountCard } from "./account-card";

import { useAccountsController } from "./use-accounts-controller";

export function Accounts() {
  const { setSliderState, sliderState, windowWidth } = useAccountsController();

  return (
    <Card className="flex h-full w-full flex-col bg-teal-900 px-4 py-8 md:p-10">
      <div>
        <span className="tracking-tighter text-white">Saldo total</span>
        <div className="flex items-center gap-2">
          <strong className="block text-2xl tracking-tight text-white">
            {formatCurrency(1000)}
          </strong>

          <button className="flex size-8 items-center justify-center">
            <EyeIcon open={false} />
          </button>
        </div>
      </div>
      <div className="mt-10 flex flex-1 flex-col justify-end md:mt-0">
        <Swiper
          spaceBetween={16}
          slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
          className="w-full"
          onSlideChange={(swiper) => {
            setSliderState({
              isBeginning: swiper.isBeginning,
              isEnd: swiper.isEnd,
            });
          }}
        >
          <div
            className="mb-4 flex items-center justify-between"
            slot="container-start"
          >
            <strong className="text-lg tracking-tight text-white">
              Minhas Contas
            </strong>

            <AccountsSliderNavigation
              isBeginning={sliderState.isBeginning}
              isEnd={sliderState.isEnd}
            />
          </div>

          {Array.from({ length: 5 }).map((_, i) => (
            <SwiperSlide key={i}>
              <AccountCard name="Nubank" type="checking" currencyValue={1000} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Card>
  );
}
