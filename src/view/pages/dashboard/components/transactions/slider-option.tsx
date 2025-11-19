import { useSwiper } from "swiper/react";
import { cn } from "../../../../../app/utils/class-name-merge";
interface SliderOptionProps {
  isActive: boolean;
  month: string;
  index: number;
}
export function TransactionSliderOption({
  isActive,
  month,
  index,
}: SliderOptionProps) {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideTo(index)}
      className={cn(
        "h-12 w-full rounded-full text-sm tracking-tighter",
        isActive && "bg-white",
      )}
    >
      {month}
    </button>
  );
}
