import type { ListElement, Nutrient, OrderedContribution } from '../types'

export default class ListArranger {
  fat: OrderedContribution
  carb: OrderedContribution
  fibre: OrderedContribution

  constructor() {
    this.fat = []
    this.carb = []
    this.fibre = []
  }

  order(array: { name: string; grams: number }[]) {
    const sorted = array.sort((a, b) => b.grams - a.grams)
    return sorted
  }

  arrange(list: ListElement[]) {
    list.forEach((entry) => {
      if (entry.fat > 0) {
        this.fat.push({ name: entry.name, grams: entry.fat })
      }
      if (entry.carb > 0) {
        this.carb.push({ name: entry.name, grams: entry.carb })
      }
      if (entry.fibre > 0) {
        this.fibre.push({ name: entry.name, grams: entry.fibre })
      }
    })

    this.fat = this.order(this.fat)
    this.carb = this.order(this.carb)
    this.fibre = this.order(this.fibre)
  }

  report(list: ListElement[]) {
    this.arrange(list)

    return {
      fat: this.fat,
      carb: this.carb,
      fibre: this.fibre,
    } as {
      [key in Nutrient]: OrderedContribution
    }
  }
}
