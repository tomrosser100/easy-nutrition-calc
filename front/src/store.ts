import { nanoid } from 'nanoid'
import type {
  AgeRange,
  ListElement,
  Nutrient,
  Sex,
  StoreData,
  UserReport,
} from './types'
import { delay, nutrients } from './constants'
import Advisor from './logic/Advisor'
import nutrientTotals from './logic/nutrientTotals'
import ListArranger from './logic/ListArranger'

export class Store {
  private advisor: Advisor
  list: ListElement[]
  userReport: UserReport

  constructor() {
    this.advisor = new Advisor('female', '19')
    this.list = []
    this.userReport = {
      fat: {
        advice: undefined,
        total: undefined,
        orderedContributors: undefined
      },
      carb: {
        advice: undefined,
        total: undefined,
        orderedContributors: undefined
      },
      fibre: {
        advice: undefined,
        total: undefined,
        orderedContributors: undefined
      },
    }
  }

  update() {
    this.updateAdvice()
    this.updateTotals()
    this.updateOrderedContributors()
  }

  updateAdvice() {
    const advice = this.advisor.report()

    nutrients.forEach((nutrient) => {
      const targetedAdvice = advice[nutrient]

      this.userReport[nutrient].advice = targetedAdvice
    })
  }

  updateTotals() {
    const totals = nutrientTotals(this.list)
    console.log(`totals from calc`, totals)

    nutrients.forEach((nutrient) => {
      const total = totals[nutrient]

      this.userReport[nutrient].total = total
      console.log(`total in report`, this.userReport[nutrient].total)
    })

  }

  updateOrderedContributors() {
    const listArranger = new ListArranger()
    const orderedContributors = listArranger.report(this.list)

    nutrients.forEach((nutrient) => {
      const orderedContribution = orderedContributors[nutrient]

      this.userReport[nutrient].orderedContributors = orderedContribution
    })
  }

  getIndexById(id: string) {
    return this.list.findIndex((entry) => entry.id === id)
  }

  async add(data: ListElement) {
    const response = (await new Promise((resolve) => {
      setTimeout(() => {
        const id = nanoid().slice(0, 7)
        const name = data.name
        const fat = data.fat
        const carb = data.carb
        const fibre = data.fibre

        //if (this.list[id] !== undefined) resolve({ status: 'failed' })

        this.list.push({ id, name, fat, carb, fibre })

        resolve({ status: 'ok' })
      }, delay)
    })) as { status: 'ok' | 'failed' }

    console.log(this.list)
    return response
  }

  async edit(data: ListElement) {
    const response = (await new Promise((resolve) => {
      setTimeout(() => {
        this.list[this.getIndexById(data.id)] = data

        resolve({ status: 'ok' })
      }, delay)
    })) as { status: 'ok' | 'failed' }

    console.log('edited', data.id)
    return response
  }

  async clear() {
    const response = (await new Promise((resolve) => {
      setTimeout(() => {
        this.list = []

        resolve({ status: 'ok' })
      }, delay)
    })) as { status: 'ok' | 'failed' }

    console.log('cleared list')
    return response
  }

  async delete(id: string) {
    const response = (await new Promise((resolve) => {
      setTimeout(() => {
        this.list.splice(this.getIndexById(id), 1)

        resolve({ status: 'ok' })
      }, delay)
    })) as { status: 'ok' | 'failed' }

    console.log('deleted', id)
    return response
  }

  async retrieve() {
    const response = (await new Promise((resolve) => {
      setTimeout(() => {
        this.update()

        const storeData = {
          sex: this.advisor.getSex(),
          ageRange: this.advisor.getAgeRange(),
          list: this.list,
          userReport: this.userReport
        }

        resolve(storeData)
      }, delay)
    })) as StoreData

    return response
  }

  async updateSex(sex: Sex) {
    const response = (await new Promise((resolve) => {
      setTimeout(() => {

        this.advisor.updateSex(sex)

        resolve({ status: 'ok' })
      }, delay)
    })) as { status: 'ok' | 'failed' }

    return response
  }

  async updateAgeRange(ageRange: AgeRange) {
    const response = (await new Promise((resolve) => {
      setTimeout(() => {

        this.advisor.updateAgeRange(ageRange)

        resolve({ status: 'ok' })
      }, delay)
    })) as { status: 'ok' | 'failed' }

    return response
  }
}

export default new Store()
