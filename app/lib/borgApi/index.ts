import {
  BorgPriceTimeframe,
  BorgPriceAndTimeData,
  BorgPriceResponse,
  BorgStatsResponse,
} from "./types";

const BASE_URL = "https://borg-api-techchallenge.swissborg-stage.com/api";

export async function getBorgPrice(): Promise<BorgPriceResponse> {
  return fetch(`${BASE_URL}/price`).then((res) => res.json());
}

export async function getBorgStats(): Promise<BorgStatsResponse> {
  return fetch(`${BASE_URL}/borg-stats`).then((res) => res.json());
}

export async function getBorgHistoricPrice(
  interval: BorgPriceTimeframe = "day"
): Promise<BorgPriceAndTimeData[]> {
  return fetch(`${BASE_URL}/historical-price/${interval}`).then((res) =>
    res.json()
  );
}
