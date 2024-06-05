export default (nutrientInRef: number, totalRefPortion: number, userAmount: number) => {
  const value = (nutrientInRef / totalRefPortion) * userAmount
  return Math.round(value * 10) / 10
}