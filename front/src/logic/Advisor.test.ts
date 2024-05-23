import Advisor from "./Advisor"

describe('Advisor', () => {

  describe('get', () => {

    it('given sex, agerange and nutrient, returns correct advice', () => {
      const advisor = new Advisor('male', '11')
      const nutrient = 'fat'

      const expectation = {
        operator: 'at most',
        grams: 97
      }

      const result = advisor.get(nutrient)

      expect(result).toStrictEqual(expectation)
    })

  })

  describe('report', () => {

    it('feeds each nutrient into get() and returns obj w/ advice by category', () => {
      const advisor = new Advisor('male', '11')
      const expectation = {
        fat: {
          operator: 'at most',
          grams: 97
        },
        carb: {
          operator: 'at most',
          grams: 97
        },
        fibre: {
          operator: 'at most',
          grams: 97
        }
      }

      const result = advisor.report()

      expect(result).toStrictEqual(expectation)
    })

  })

})