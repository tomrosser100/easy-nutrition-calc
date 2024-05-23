import { nutrients } from '../constants'
import type { ListElement, Nutrient, NutrientTotals } from '../types'

export default (list: ListElement[]) => {
  const accumulator = {
    fat: 0,
    carb: 0,
    fibre: 0,
  } as NutrientTotals

  function reducer(accumulator: NutrientTotals, item: ListElement) {
    nutrients.forEach((nutrient: Nutrient) => {
      accumulator[nutrient] += Number(item[nutrient])
    })

    return accumulator
  }

  return list.reduce(reducer, accumulator)
}
