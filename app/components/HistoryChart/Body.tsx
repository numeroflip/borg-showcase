import { BorgPriceAndTimeData } from "@/app/lib/borgApi/types";
import React from "react";
import { VictoryArea, VictoryAxis, VictoryChart } from "victory";
import tailwindConfig from "../../../tailwind.config";
import { format } from "date-fns";

interface Props {
  historicPrice: BorgPriceAndTimeData[];
}

const GRADIENT_ID = "gradient-under-chart";

const Body: React.FC<Props> = ({ historicPrice }) => {
  const minPrice = Math.min(...historicPrice.map((data) => data.price));

  return (
    <>
      <VictoryChart
        scale={{ x: "time" }}
        padding={{ top: 20, bottom: 20 }}
        minDomain={{ y: minPrice - minPrice * 0.02 }}
        domainPadding={{ x: 0, y: 5 }}
        height={170}
        width={720}
      >
        <VictoryArea
          padding={0}
          style={{
            data: {
              fill: `url(#${GRADIENT_ID})`,
              stroke: tailwindConfig.theme.extend.colors.brand.DEFAULT,
              strokeWidth: "1.5px",
              width: "100%",
            },
          }}
          interpolation={"natural"}
          data={historicPrice}
          y={({ price }) => price}
          x={({ timestamp }) => new Date(timestamp).getTime()}
        />

        <VictoryAxis
          tickFormat={(tick: string) => {
            const date = new Date(tick);
            return format(date, "kk:mm");
          }}
          style={{
            axis: { display: "none" },
            grid: { display: "none" },
            ticks: { display: "none" },
            tickLabels: {
              fill: "white",
              fontSize: 10,
              padding: 8,
            },
          }}
        />

        <VictoryAxis
          tickCount={4}
          dependentAxis
          orientation="right"
          style={{
            axis: { display: "none" },
            ticks: { display: "none" },
            grid: {
              stroke: "#ffffff10",
              strokeWidth: "1px",
              pointerEvents: "painted",
            },
            tickLabels: {
              padding: 8,

              fill: "white",
              transform: "translate(-45, 0)",
              fontSize: 11,
              fontWeight: 600,
              color: "white",
            },
          }}
        />
      </VictoryChart>

      {/* Defining a linear gradient so we can reference it in the charts 'fill' property */}
      <svg className="absolute">
        <defs>
          <linearGradient id={GRADIENT_ID} x1="0%" y1="0%" x2="0%" y2="100%">
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
    </>
  );
};

export default Body;
