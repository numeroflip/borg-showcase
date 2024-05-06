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
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Suspense, useEffect, useState } from "react";

interface Props {
  currentPrice: BorgPriceData;
  initialHistoricPrice: BorgPriceAndTimeData[];
  className?: string;
}

function queryOptionsFor(timeframe: BorgPriceTimeframe) {
  return {
    queryKey: ["borgHistoricPrice", timeframe],
    queryFn: () => getBorgHistoricPrice(timeframe),
  };
}

function HistoricPriceChart({
  currentPrice,
  initialHistoricPrice,
  className,
}: Props) {
  const [timeframe, setTimeframe] = useState<BorgPriceTimeframe>("day");

  const { data, error } = useQuery({
    ...queryOptionsFor(timeframe),
    initialData: (timeframe === "day" && initialHistoricPrice) || undefined,
    placeholderData: [],
    staleTime: 10 * 1000,
  });

  const client = useQueryClient();

  useEffect(function prefetchData() {
    client.prefetchQuery(queryOptionsFor("month"));
    client.prefetchQuery(queryOptionsFor("year"));
    client.prefetchQuery(queryOptionsFor("all"));
  });

  return (
    <div
      className={
        "max-w-[720px]  mx-auto  [box-shadow:_0px_7px_12px_0px_#0000004D] rounded-md overflow-hidden bg-petrol-800 " +
        className
      }
    >
      <Header currentPrice={currentPrice} />
      {
        error && <div>Error</div> // TODO: Error indicator and handling
      }
      <Suspense>
        {data && <Body historicPrice={data || []} timeframe={timeframe} />}
      </Suspense>

      <Footer selectedBtn={timeframe} onSelect={setTimeframe} />
    </div>
  );
}

export default HistoricPriceChart;
