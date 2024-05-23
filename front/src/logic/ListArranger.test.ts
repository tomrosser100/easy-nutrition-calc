import { describe, it } from '@jest/globals'
import ListArranger from './ListArranger'

describe('ListArranger', () => {
  describe('sort', () => {
    it('sorts array by highest gram descending', () => {
      const listArranger = new ListArranger()
      const list = [
        { name: 'lowest', grams: 10 },
        { name: 'middle', grams: 50 },
        { name: 'highest', grams: 100 },
      ]
      const expectation = [
        { name: 'highest', grams: 100 },
        { name: 'middle', grams: 50 },
        { name: 'lowest', grams: 10 },
      ]

      const result = listArranger.order(list)
      
      expect(result).toStrictEqual(expectation)
    })
  })

  describe('arrange', () => {
    it('given list element, transfers data to props', () => {
      const listArranger = new ListArranger()
      const list = [
        { id: 'test', name: 'testName', fat: 35, carb: 10, fibre: 15 },
      ]
      const fatExpectation = [{ name: 'testName', grams: 35 }]
      const carbExpectation = [{ name: 'testName', grams: 10 }]
      const fibreExpectation = [{ name: 'testName', grams: 15 }]

      listArranger.arrange(list)

      expect(listArranger.fat).toStrictEqual(fatExpectation)
      expect(listArranger.carb).toStrictEqual(carbExpectation)
      expect(listArranger.fibre).toStrictEqual(fibreExpectation)
    })

    it('given multiple entries of one nutrient, lists in order of gram size', () => {
      const listArranger = new ListArranger()
      const list = [
        { id: 'test1', name: 'testName1', fat: 10, carb: 0, fibre: 0 },
        { id: 'test2', name: 'testName2', fat: 20, carb: 0, fibre: 0 },
      ]
      const expectation = [
        {
          name: 'testName2',
          grams: 20,
        },
        {
          name: 'testName1',
          grams: 10,
        },
      ]

      listArranger.arrange(list)

      expect(listArranger.fat).toStrictEqual(expectation)
    })
  })
})
