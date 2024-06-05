import { nutrients } from '../constants'
import type { ListElement, Nutrient, NutrientTotals } from '../types'
import referenceSizeCalc from './referenceSizeCalc'

export default (list: ListElement[]) => {
  const accumulator = {
    fat: 0,
    carb: 0,
    fibre: 0,
    protein: 0,
    saturatedFat: 0,
    sugar: 0,
    salt: 0,
    calories: 0,
  } as NutrientTotals

  function reducer(accumulator: NutrientTotals, item: ListElement) {
    nutrients.forEach((nutrient: Nutrient) => {

      const trueTotal = referenceSizeCalc(Number(item[nutrient]), Number(item.refPortion), Number(item.userAmount))

      accumulator[nutrient] = Math.round((accumulator[nutrient] + trueTotal) * 10) / 10
    })

    return accumulator
  }

  return list.reduce(reducer, accumulator)
}
