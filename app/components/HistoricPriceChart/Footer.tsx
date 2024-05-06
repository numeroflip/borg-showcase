import { BorgPriceTimeframe } from "@/app/lib/borgApi/types";
import React from "react";

const TIMEFRAMES: BorgPriceTimeframe[] = ["day", "month", "year", "all"];

const buttonLabels: Record<BorgPriceTimeframe, string> = {
  day: "1D",
  month: "1M",
  year: "1Y",
  all: "ALL",
};

type Props = {
  selectedBtn: BorgPriceTimeframe;
  onSelect: (timeframe: BorgPriceTimeframe) => void;
};

const Footer: React.FC<Props> = ({ selectedBtn, onSelect }) => {
  return (
    <div className="flex bg-petrol-750 mt-2">
      {TIMEFRAMES.map((timeframe) => (
        <button
          key={timeframe}
          onClick={() => onSelect(timeframe)}
          className={`${
            selectedBtn === timeframe
              ? "text-brand font-semibold bg-white/10"
              : ""
          } py-2 flex-1 hover:bg-white/10 leading-none transition-all active:bg-white/15 grid place-content-center text-[11px]`}
        >
          {buttonLabels[timeframe]}
        </button>
      ))}
    </div>
  );
};

export default Footer;
