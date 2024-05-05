"use client";
import { VictoryPie } from "victory";
import { BorgStatsResponse } from "../lib/borgApi/types";

interface Props {
  stats: BorgStatsResponse;
}
function DetailsPieChart({ stats }: Props) {
  return (
    <div suppressHydrationWarning>
      <VictoryPie
        width={600}
        height={600}
        colorScale={["#01C38D", "#191E29", "#AD95FF", "#2D95FF", "#CCF3E8"]}
        innerRadius={150}
        radius={215}
        labelPlacement={"vertical"}
        style={{
          data: { filter: "drop-shadow( -5px 0px 2px rgba(0, 0, 0, .3))" },
        }}
        data={[
          { x: "Staked", y: stats.stakedBorgTokens },
          { x: "Burned", y: stats.borgBurnedTokens },
          { x: "In Yield", y: stats.borgInYieldTokens },
          { x: "In \nbuyback \npool", y: stats.borgInBubackPoolTokens },
          { x: "Circulating \nsupply", y: stats.circulatingSupplyTokens },
        ]}
      />
    </div>
  );
}

export default DetailsPieChart;
