import { nutrients } from '../constants'
import type { ListElement, Nutrient, OrderedContribution } from '../types'
import referenceSizeCalc from './referenceSizeCalc'

export default class ListArranger {
  fat: OrderedContribution
  carb: OrderedContribution
  fibre: OrderedContribution
  protein: OrderedContribution
  saturatedFat: OrderedContribution
  sugar: OrderedContribution
  salt: OrderedContribution
  calories: OrderedContribution

  constructor() {
    this.fat = []
    this.carb = []
    this.fibre = []
    this.protein = []
    this.saturatedFat = []
    this.sugar = []
    this.salt = []
    this.calories = []
  }

  order(array: { name: string; grams: number }[]) {
    const sorted = array.sort((a, b) => b.grams - a.grams)
    return sorted
  }

  arrange(list: ListElement[]) {
    list.forEach((entry) => {
      nutrients.forEach((nutrient) => {
        if (entry[nutrient] > 0) {
          this[nutrient].push({
            name: entry.name,
            grams: referenceSizeCalc(
              entry[nutrient],
              entry.refPortion,
              entry.userAmount
            ),
          })
        }
      })

      nutrients.forEach((nutrient) => {
        this[nutrient] = this.order(this[nutrient])
      })
    })
  }

  report(list: ListElement[]) {
    this.arrange(list)

    return {
      fat: this.fat,
      carb: this.carb,
      fibre: this.fibre,
      protein: this.protein,
      saturatedFat: this.saturatedFat,
      sugar: this.sugar,
      salt: this.salt,
      calories: this.calories,
    } as {
      [key in Nutrient]: OrderedContribution
    }
  }
}
