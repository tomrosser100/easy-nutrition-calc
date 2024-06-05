import referenceSizeCalc from "./referenceSizeCalc"

describe('referenceSizeCalc', () => {

  it('divides nutrient-in-ref-portion by total-portion and multiplies by user-amount', () => {
    const nutrientInRef = 4
    const totalRefPortion = 100
    const userAmount = 200
    const expectation = 8

    const result = referenceSizeCalc(nutrientInRef, totalRefPortion, userAmount)

    expect(result).toStrictEqual(expectation)
  })

})