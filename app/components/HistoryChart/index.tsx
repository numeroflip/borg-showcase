"use client";

import {
  BorgPriceAndTimeData,
  BorgPriceData,
  BorgPriceTimeframe,
} from "@/app/lib/borgApi/types";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import { getBorgHistoricPrice } from "@/app/lib/borgApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useIsClient } from "@/app/lib/hooks/useIsClient";

interface Props {
  currentPrice: BorgPriceData;
  historicPrice: BorgPriceAndTimeData[];
  className?: string;
}

function HistoryChart({ currentPrice, historicPrice, className }: Props) {
  const [timeframe, setTimeframe] = useState<BorgPriceTimeframe>("day");

  const { data, isPending, isFetched, error } = useQuery({
    queryKey: ["borgHistoricPrice", timeframe],
    queryFn: () => getBorgHistoricPrice(timeframe),
    initialData: historicPrice,
    staleTime: 10,
  });

  const isClient = useIsClient();
  const isLoading = isClient && !isFetched;

  return (
    <div
      className={
        "max-w-[720px]  mx-auto overflow-hidden [box-shadow:_0px_7px_12px_0px_#0000004D] rounded-md bg-petrol-800 " +
        className
      }
    >
      <Header currentPrice={currentPrice} />
      {error && <div>Error</div>}
      {data && (
        <div
          className={
            (isPending &&
              "animate-pulse  pointer-events-none transition-all") ||
            ""
          }
        >
          <Body
            historicPrice={
              isLoading ? [] : data.filter((_data, index) => index % 5 === 0)
            }
          />
        </div>
      )}

      <Footer selectedBtn={timeframe} onSelect={setTimeframe} />
    </div>
  );
}

export default HistoryChart;
