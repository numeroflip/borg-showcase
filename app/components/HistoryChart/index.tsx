"use client";

import { BorgPriceAndTimeData, BorgPriceData } from "@/app/lib/borgApi/types";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

interface Props {
  currentPrice: BorgPriceData;
  historicPrice: BorgPriceAndTimeData[];
  className?: string;
}

function HistoryChart({ currentPrice, historicPrice, className }: Props) {
  return (
    <div
      className={
        "max-w-[720px]  mx-auto overflow-hidden [box-shadow:_0px_7px_12px_0px_#0000004D] rounded-md bg-petrol-800 " +
        className
      }
    >
      <Header currentPrice={currentPrice} />
      <Body
        historicPrice={historicPrice.filter((_data, index) => index % 5 === 0)}
      />
      <Footer />
    </div>
  );
}

export default HistoryChart;
