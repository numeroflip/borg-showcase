const numberFormatter = new Intl.NumberFormat("en-US");

export function formatNumber(num: number) {
  return numberFormatter.format(num);
}

export function formatPercentage(num: number) {
  return `${(num * 100).toFixed(2)}`;
}
