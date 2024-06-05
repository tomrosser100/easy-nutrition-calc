import { saturatedFat } from "../constants"
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
          operator: 'at least',
          grams: 333
        },
        fibre: {
          operator: 'around',
          grams: 25
        },
        calories: {
          operator: 'around',
          grams: 2500
        },
        protein: {
          operator: 'around',
          grams: 42.1
        },
        salt: {
          operator: 'at most',
          grams: 6
        },
        saturatedFat: {
          operator: 'at most',
          grams: 31
        },
        sugar: {
          operator: 'at most',
          grams: 33
        }

      }

      const result = advisor.report()

      expect(result).toStrictEqual(expectation)
    })

  })

})