"use client";

import {
  BorgPriceAndTimeData,
  BorgPriceData,
  BorgPriceTimeframe,
} from "@/app/lib/borgApi/types";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import { useState } from "react";

interface Props {
  currentPrice: BorgPriceData;
  historicPrice: BorgPriceAndTimeData[];
  className?: string;
}

function HistoryChart({ currentPrice, historicPrice, className }: Props) {
  const [timeframe, setTimeframe] = useState<BorgPriceTimeframe>("day");

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
      <Footer selectedBtn={timeframe} onSelect={setTimeframe} />
    </div>
  );
}

export default HistoryChart;
