import {
  BorgPriceAndTimeData,
  BorgPriceTimeframe,
} from "@/app/lib/borgApi/types";
import React, { useMemo } from "react";

import tailwindConfig from "../../../tailwind.config";
import { eachHourOfInterval, format } from "date-fns";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatNumber } from "@/app/lib/number";
import { useIsClient } from "@/app/lib/hooks/useIsClient";

interface Props {
  historicPrice: BorgPriceAndTimeData[];
  timeframe: BorgPriceTimeframe;
}

const GRADIENT_ID = "gradient-under-chart";
const GOAL_DATA_DENSITY = 170;

const Body: React.FC<Props> = ({ historicPrice, timeframe }) => {
  const data = reduceDataDensity(historicPrice).map((_data) => ({
    timestamp: new Date(_data.timestamp).getTime(),
    price: _data.price,
  }));

  const isClient = useIsClient();

  const firstTimestamp = historicPrice[0].timestamp;
  const lastTimestamp = historicPrice[historicPrice.length - 1].timestamp;

  const timeTicks = useMemo(() => {
    if (!firstTimestamp || !lastTimestamp) {
      return undefined;
    }

    const startDate = new Date(firstTimestamp);
    const endDate = new Date(lastTimestamp);

    const hours = eachHourOfInterval({ start: startDate, end: endDate });
    return hours.map((d) => d.getTime());
  }, [firstTimestamp, lastTimestamp]);

  const minPrice = Math.min(...historicPrice.map((d) => d.price));

  return (
    <div className="aspect-[72/17]">
      <ResponsiveContainer height={"100%"} width={"100%"}>
        <AreaChart
          id="area-chart"
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid id="chart-grid" vertical={false} stroke="#ffffff10" />

          <XAxis
            axisLine={false}
            ticks={timeTicks}
            height={12}
            interval={"equidistantPreserveStart"}
            tickSize={0}
            tick={{
              fill: "white",
              fontSize: "min(2.5vw, 10px)",
              transform: "translate(0 3)",
            }}
            tickFormatter={(tick) => {
              if (!isClient) {
                // render dates on client only, to prevent flickering due to possible different timezones
                return "";
              }

              const date = new Date(tick);
              const formattedTime = formatTimeValue(date, timeframe);
              return formattedTime === "00:00" ? "24:00" : formattedTime;
            }}
            tickLine={false}
            dataKey="timestamp"
          />

          <YAxis
            width={180}
            scale={"auto"}
            tickFormatter={(tick) => formatNumber(tick)}
            domain={[minPrice, "auto"]}
            axisType="yAxis"
            fill="white"
            interval={"preserveStart"}
            mirror
            orientation="right"
            padding={{ top: 0, bottom: 10 }}
            tick={{
              fill: "white",
              fontSize: 11,
              transform: "translate(-8 0)",
              fontWeight: 600,
              strokeWidth: 2,
            }}
            axisLine={false}
            tickLine={false}
            startOffset={-100}
            dataKey={"price"}
          />
          <Tooltip
            formatter={(value) => [`$${formatNumber(value as number)}`]}
            labelFormatter={(time) =>
              formatTimeValue(new Date(time), timeframe)
            }
            labelClassName="text-petrol-800"
            animationDuration={300}
            wrapperClassName="rounded-md bg-white/10 p-1 m-1"
          />
          <Area
            id="price-history-chart"
            isAnimationActive={isClient}
            type="monotone"
            animationDuration={500}
            dataKey="price"
            stroke={tailwindConfig.theme.extend.colors.brand.DEFAULT}
            strokeWidth={1.5}
            fillOpacity={1}
            connectNulls
            fill={`url(#${GRADIENT_ID})`}
          />

          {/* Define the gradient's svg, so we can reference it for filling the chart area */}
          <svg className="absolute size-0">
            <defs>
              <linearGradient
                id={GRADIENT_ID}
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor={`${tailwindConfig.theme.extend.colors.brand.DEFAULT}50`}
                />

                <stop
                  offset="100%"
                  stopColor={`${tailwindConfig.theme.extend.colors.brand.DEFAULT}00`}
                />
              </linearGradient>
            </defs>
          </svg>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

function formatTimeValue(date: Date, timeframe: BorgPriceTimeframe) {
  // reference: https://date-fns.org/v3.6.0/docs/format
  let formatType = "yy/MMM/dd";

  if (timeframe === "day") {
    formatType = "HH:mm";
  }
  if (timeframe === "month") {
    formatType = "MMM dd";
  }

  return format(date, formatType);
}

function reduceDataDensity(data: BorgPriceAndTimeData[]) {
  return data.filter((_data, index) => {
    if (data.length > GOAL_DATA_DENSITY) {
      return index % Math.floor(data.length / GOAL_DATA_DENSITY) === 0;
    }
  });
}

export default Body;
