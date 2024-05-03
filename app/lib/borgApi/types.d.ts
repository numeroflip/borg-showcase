export type BorgPriceTimeframe = "day" | "month" | "year" | "all";

export type BorgStatsResponse = {
  weeklyVolumeUsd: number;
  premiumUsers: number;
  weeklyPremiumUsers: number;
  stakedBorgTokens: number;
  stakedBorgPercentage: number;
  borgYieldEarnedUsd: number;
  borgPendingBuybackTokens: number;
  borgPendingBurnTokens: number;
  circulatingSupplyTokens: number;
  circulatingSupplyPercentage: number;
  borgInYieldTokens: number;
  borgInYieldPercentage: number;
  borgBurnedTokens: number;
  borgBurnedPercentage: number;
  borgInBubackPoolTokens: number;
  borgInBubackPoolPercentage: number;
};

export type BorgPriceAndTimeData = {
  timestamp: string;
  price: number;
};

export type BorgPriceData = {
  price: number;
  change24h: number;
};

export type BorgPriceResponse = {
  usd: BorgPriceData;
  chf: BorgPriceData;
  eur: BorgPriceData;
  gbp: BorgPriceData;
};
