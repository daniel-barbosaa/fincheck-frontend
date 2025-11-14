import { Card } from "../../../components/card";
import { EyeIcon } from "../../../components/icons/eye-icon";

import { Swiper, SwiperSlide } from "swiper/react";
import { formatCurrency } from "../../../../app/utils/formatters/format-currency";

import { AccountsSliderNavigation } from "./accounts-slider-navigation";
import { AccountCard } from "./account-card";

export function Accounts() {
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
      <div className="flex flex-1 flex-col justify-end">
        <Swiper spaceBetween={16} slidesPerView={2.1} className="w-full">
          <div
            className="mb-4 flex items-center justify-between"
            slot="container-start"
          >
            <strong className="text-lg tracking-tight text-white">
              Minhas Contas
            </strong>

            <AccountsSliderNavigation />
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
