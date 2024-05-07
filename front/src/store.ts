import { nanoid } from 'nanoid'
import type { AgeRange, ListElement, Sex, StoreData } from './types'
import { delay } from './constants'

class Store {
  private list: ListElement[]
  private sex: Sex
  private ageRange: AgeRange

  constructor() {
    this.list = []
    this.sex = 'female'
    this.ageRange = '19'
  }

  getIndexById(id: string) {
    return this.list.findIndex((entry) => entry.id === id)
  }
  
  async add(data: ListElement) {
    const response = (await new Promise((resolve) => {
      setTimeout(() => {
        const id = nanoid().slice(0, 7)
        const name = data.name
        const num = data.num

        //if (this.list[id] !== undefined) resolve({ status: 'failed' })

        this.list.push({ id, name, num })

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
        const storeData = {
          sex: this.sex,
          ageRange: this.ageRange,
          list: this.list
        }
        resolve(storeData)
      }, delay)
    })) as StoreData

    return response
  }

  async updateSex(sex: Sex) {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        this.sex = sex
        resolve({ status: 'ok' })
      }, delay)
    }) as { status: 'ok' | 'failed' }

    return response
  }

  async updateAgeRange(ageRange: AgeRange) {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        this.ageRange = ageRange

        resolve({ status: 'ok' })
      }, delay)
    }) as { status: 'ok' | 'failed' }

    return response
  }
}

export default new Store()
