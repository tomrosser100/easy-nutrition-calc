import { Store } from './store'

jest.mock('nanoid', () => {
  return { nanoid: () => '123' }
})

describe('store', () => {
  describe('update', () => {
    it('given populated list, updates user report', () => {
      const store = new Store()
      const list = [
        { id: 'test1', name: 'testName1', fat: 10, carb: 5, fibre: 9 },
        { id: 'test2', name: 'testName2', fat: 20, carb: 7, fibre: 100 },
        { id: 'test3', name: 'testName3', fat: 253, carb: 12, fibre: 53 },
      ]
      store.list = list
      store.update()
      const expectation = {
        advice: {
          grams: 78,
          operator: 'at most',
        },
        orderedContributors: [
          { grams: 253, name: 'testName3' },
          { grams: 20, name: 'testName2' },
          { grams: 10, name: 'testName1' },
        ],
        total: 283,
      }

      expect(store.userReport.fat).toStrictEqual(expectation)
    })
  })
})
