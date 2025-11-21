import { Card } from "../../../../components/card";
import { EyeIcon } from "../../../../components/icons/eye-icon";

import { Swiper, SwiperSlide } from "swiper/react";
import { formatCurrency } from "../../../../../app/utils/formatters/format-currency";

import { AccountsSliderNavigation } from "./slider-navigation";
import { AccountCard } from "./account-card";

import { useAccountsController } from "./use-accounts-controller";
import { cn } from "../../../../../app/utils/class-name-merge";
import { Spinner } from "../../../../components/spinner";
import { PlusIcon } from "@radix-ui/react-icons";

export function Accounts() {
  const {
    setSliderState,
    sliderState,
    windowWidth,
    toggleValuesVisibility,
    areValuesVisible,
    isLoading,
    accounts,
  } = useAccountsController();

  return (
    <Card className="flex h-full w-full flex-col bg-teal-900 px-4 py-8 md:p-10">
      {isLoading && (
        <div className="flex h-full items-center justify-center">
          <Spinner clasName="text-teal-950/50 fill-white size-10" />
        </div>
      )}
      {!isLoading && (
        <>
          <div>
            <span className="tracking-tighter text-white">Saldo total</span>
            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  "block text-2xl tracking-tight text-white",
                  !areValuesVisible && "blur-md",
                )}
              >
                {formatCurrency(1000)}
              </strong>

              <button
                className="flex size-8 items-center justify-center"
                onClick={toggleValuesVisibility}
              >
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </div>
          <div className="mt-10 flex flex-1 flex-col justify-end md:mt-0">
            {accounts.length <= 0 && (
              <>
                <div className="mb-4" slot="container-start">
                  <strong className="text-lg tracking-tight text-white">
                    Minhas Contas
                  </strong>
                </div>
                <button className="flex h-52 flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-teal-600 text-white">
                  <div className="flex size-11 items-center justify-center rounded-full border-2 border-dashed border-white">
                    <PlusIcon className="size-6" />
                  </div>
                  <span className="text=-center block w-30 font-medium tracking-tighter">
                    Cadastre uma nova conta
                  </span>
                </button>
              </>
            )}
            {accounts.length > 0 && (
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
                    <AccountCard
                      name="Nubank"
                      type="checking"
                      currencyValue={1000}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </>
      )}
    </Card>
  );
}
