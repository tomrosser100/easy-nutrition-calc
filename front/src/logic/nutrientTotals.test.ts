import nutrientTotals from "./nutrientTotals"

describe('totals', () => {

  describe('nutrientTotals', () => {
    it('given array of obj w/ grams prop, returns total grams', () => {
      const list = [
        { id: 'test1', name: 'testName1', fat: 10, carb: 5, fibre: 9 },
        { id: 'test2', name: 'testName2', fat: 20, carb: 7, fibre: 100 },
      ]
      const expectation = {
        fat: 30,
        carb: 12,
        fibre: 109
      }
  
      const result = nutrientTotals(list)

      expect(result).toStrictEqual(expectation)
    })
  })

})
