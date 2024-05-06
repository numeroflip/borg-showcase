"use client";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import CustomPieChartLabel from "./CustomLabel";
import { getGradientID } from "./utils";
import { BorgStatsResponse } from "@/app/lib/borgApi/types";
import { formatNumber } from "@/app/lib/number";

interface Props {
  stats: BorgStatsResponse;
}
function DetailsPieChart({ stats }: Props) {
  const data = [
    { name: "Staked", value: stats.stakedBorgTokens, color: "#01C38D" },
    { name: "Burned", value: stats.borgBurnedTokens, color: "#191E29" },
    { name: "In Yield", value: stats.borgInYieldTokens, color: "#AD95FF" },
    {
      name: "In buyback \npool",
      value: stats.borgInBubackPoolTokens,
      color: "#2D95FF",
    },
    {
      name: "Circulating \nsupply",
      value: stats.circulatingSupplyTokens,
      color: "#CCF3E8",
    },
  ];

  const pieShapeOptions = {
    cx: "45%",
    cy: "50%",
    strokeWidth: 0,
    isAnimationActive: false,
    innerRadius: "55%",
    outerRadius: "80%",
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        {/* Placeholder chart, so a unified shadow can be applied to the "donut shape" */}
        <Pie
          {...pieShapeOptions}
          filter={"drop-shadow( -5px 0px 2px rgba(0, 0, 0, .3))"}
          data={[{ val: 1 }]}
          dataKey="val"
          fill="white"
        ></Pie>
        <Pie
          {...pieShapeOptions}
          data={data}
          startAngle={0}
          endAngle={360}
          label={CustomPieChartLabel}
          labelLine={false}
          dataKey="value"
        >
          {data.map((entry) => (
            <Cell
              key={`cell-${entry.name}`}
              fill={`url(#${getGradientID(entry.color)}`}
              z={10}
            />
          ))}
        </Pie>
        <Tooltip formatter={formatNumber} />
        <svg className="absolute size-0">
          <defs>
            {data.map((entry) => (
              <linearGradient
                key={entry.color}
                id={getGradientID(entry.color)}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor={entry.color} />
                <stop offset="100%" stopColor={entry.color} stopOpacity={0.6} />
              </linearGradient>
            ))}
          </defs>
        </svg>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default DetailsPieChart;
