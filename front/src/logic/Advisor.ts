import {
  fat,
  carb,
  fibre,
  nutrients,
  protein,
  salt,
  sugar,
  calories,
  saturatedFat,
} from '../constants'
import type {
  AgeRange,
  GeneralAdvice,
  Nutrient,
  NutrientAdvice,
  Sex,
} from '../types'

export default class Advisor {
  private readonly advice: {
    [key in Nutrient]: GeneralAdvice
  }
  private sex: Sex
  private ageRange: AgeRange

  constructor(sex: Sex, ageRange: AgeRange) {
    this.advice = {
      fat,
      carb,
      fibre,
      sugar,
      protein,
      salt,
      calories,
      saturatedFat,
    },
    this.sex = sex,
    this.ageRange = ageRange
  }

  getSex() {
    return this.sex
  }

  getAgeRange() {
    return this.ageRange
  }

  updateSex(sex: Sex) {
    this.sex = sex
  }

  updateAgeRange(ageRange: AgeRange) {
    this.ageRange = ageRange
  }

  sexToIndex(sex: Sex) {
    if (sex !== 'male' && sex !== 'female') throw new Error()

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

  get(nutrient: Nutrient) {
    const y = this.sexToIndex(this.sex)
    const x = this.ageRangeToIndex(this.ageRange)

    const operator = this.advice[nutrient].operator
    const grams = (this.advice[nutrient].grams[y] as number[])[x] as number

    return { operator, grams }
  }

  report() {
    const result = {} as NutrientAdvice

    nutrients.forEach((nutrient) => {
      result[nutrient] = this.get(nutrient)
    })

    return result
  }
}
