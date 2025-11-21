import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export function TransactionSliderNavigation() {
  const swiper = useSwiper();
  return (
    <div className="z-40">
      <button
        className="absolute top-1/2 left-0 z-10 flex size-12 -translate-y-1/2 items-center justify-center bg-gradient-to-r from-gray-100"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeftIcon className="text-foreground/90 size-6" />
      </button>
      <button
        className="absolute top-1/2 right-0 z-10 flex size-12 -translate-y-1/2 items-center justify-center bg-gradient-to-l from-gray-100"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRightIcon className="text-foreground/90 size-6" />
      </button>
    </div>
  );
}
