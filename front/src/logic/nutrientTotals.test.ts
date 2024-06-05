import { testList } from '../testConstants'
import nutrientTotals from './nutrientTotals'

describe('totals', () => {
  describe('nutrientTotals', () => {
    it('given array of obj w/ grams prop, returns total grams', () => {
      const list = testList
      const expectation = {
        fat: 141.5,
        carb: 12,
        fibre: 81,
        calories: 2505.5,
        protein: 7,
        salt: 11.5,
        saturatedFat: 8.5,
        sugar: 10,
      }

      const result = nutrientTotals(list)

      expect(result).toStrictEqual(expectation)
    })
  })
})
