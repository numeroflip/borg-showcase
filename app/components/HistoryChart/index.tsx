"use client";

import {
  BorgPriceAndTimeData,
  BorgPriceResponse,
  BorgPriceData,
} from "@/app/lib/borgApi/types";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

interface Props {
  currentPrice: BorgPriceData;
  historicPrice: BorgPriceAndTimeData[];
}

function HistoryChart({ currentPrice, historicPrice }: Props) {
  return (
    <div className="max-w-[720px] shadow-md mx-auto overflow-hidden h-72   rounded-md bg-petrol-800/50 my-9 ">
      <Header currentPrice={currentPrice} />
      <Body historicPrice={historicPrice} />
      <Footer />
    </div>
  );
}

export default HistoryChart;
