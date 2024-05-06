export function getGradientID(str: string) {
  return `gradient-${str.replaceAll(" ", "_").toLowerCase()}`;
}
