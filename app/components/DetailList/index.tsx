import { BorgStatsResponse } from "@/app/lib/borgApi/types";
import DetailItem from "./DetailItem";
import { formatNumber, formatPercentage } from "@/app/lib/number";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLUListElement> {
  stats: BorgStatsResponse;
  classNme?: string;
}

function DetailList({ stats, ...props }: Props) {
  return (
    <ul {...props}>
      <DetailItem
        iconSrc="/icons/info/token.svg"
        title="Remaining circulating supply"
        value={{ main: formatNumber(stats.circulatingSupplyTokens) }}
      />
      <DetailItem
        iconSrc="/icons/info/diamond.svg"
        title="BORG staked"
        value={{
          main: formatNumber(stats.stakedBorgTokens),
          secondary: (
            <>
              (<strong>{formatPercentage(stats.stakedBorgPercentage)}</strong>%
              of Circulating supply)
            </>
          ),
        }}
      />
      <DetailItem
        iconSrc="/icons/info/diamond.svg"
        title="BORG in Yield"
        value={{
          main: formatNumber(stats.borgInYieldTokens),
          secondary: (
            <>
              (<strong>{formatPercentage(stats.borgInYieldPercentage)}</strong>%
              of Circulating supply)
            </>
          ),
        }}
      />
      <DetailItem
        iconSrc="/icons/info/fire.svg"
        title="Circulating supply burned"
        value={{ main: formatNumber(stats.borgBurnedTokens) }}
      />
      <DetailItem
        iconSrc="/icons/info/circulate.svg"
        title="BORG in buyback pool"
        value={{ main: formatNumber(stats.borgInBubackPoolTokens) }}
      />
    </ul>
  );
}

export default DetailList;
