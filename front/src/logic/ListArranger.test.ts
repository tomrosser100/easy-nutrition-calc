import { describe, it } from '@jest/globals'
import ListArranger from './ListArranger'
import { testEmptyListElement, testList, testListElement } from '../testConstants'
import type { ListElement } from '../types'

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
      const list = [testListElement]

      const fatExpectation = [{ name: 'testName', grams: 17.5 }]
      const carbExpectation = [{ name: 'testName', grams: 5 }]
      const fibreExpectation = [{ name: 'testName', grams: 7.5 }]

      listArranger.arrange(list)

      expect(listArranger.fat).toStrictEqual(fatExpectation)
      expect(listArranger.carb).toStrictEqual(carbExpectation)
      expect(listArranger.fibre).toStrictEqual(fibreExpectation)
    })

    it('given multiple entries of one nutrient, lists in order of gram size', () => {
      const listArranger = new ListArranger()
      const list = [testList[0], testList[1]] as ListElement[]

      const expectation = [
        {
          name: 'testName2',
          grams: 2.5,
        },
        {
          name: 'testName1',
          grams: 0.5,
        },
      ]

      listArranger.arrange(list)

      expect(listArranger.protein).toStrictEqual(expectation)
    })

    it('returns empty array if 0 grams of nutrient', () => {
      const listArranger = new ListArranger()
      const list = [
        testEmptyListElement
      ]
      const expectation = [] as []

      listArranger.arrange(list)

      expect(listArranger.saturatedFat).toStrictEqual(expectation)
    })
  })
})
