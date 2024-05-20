import { fat } from './constants'
import type { AgeRange, GeneralAdvice, Nutrient, Sex } from './types'

export default class Advisor {
  private readonly advice: {
    fat: GeneralAdvice
    carbohydrate: GeneralAdvice
    sugar: GeneralAdvice
  }

  constructor() {
    this.advice = {
      fat,
      carbohydrate: fat,
      sugar: fat,
    }
  }

  sexToIndex(sex: Sex) {
    let index

    switch (sex) {
      case 'male':
        index = 0
        break
      case 'female':
        index = 1
        break
    }

    return index
  }

  ageRangeToIndex(ageRange: AgeRange) {
    let index

    switch (ageRange) {
      case '7':
        index = 0
        break
      case '11':
        index = 1
        break
      case '15':
        index = 2
        break
      case '19':
        index = 3
        break
      case '65':
        index = 4
        break
      case '75':
        index = 5
        break
    }

    return index
  }

  get(nutrient: Nutrient, sex: Sex, ageRange: AgeRange) {
    const y = this.sexToIndex(sex)
    const x = this.ageRangeToIndex(ageRange)

    const operator = this.advice[nutrient].operator
    const grams = (this.advice[nutrient].grams[y] as number[])[x] as number

    return { nutrient, operator, grams }
  }
}
