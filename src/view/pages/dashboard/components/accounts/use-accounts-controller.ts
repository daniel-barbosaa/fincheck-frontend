import { useState } from "react";
import { useWindowWidth } from "../../../../../app/hooks/use-window-width";

export function useAccountsController() {
  const windowWidth = useWindowWidth();
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  return { setSliderState, sliderState, windowWidth };
}
