import { nanoid } from 'nanoid'
import type { ListElement } from './types'

class Store {
  list: ListElement[]

  constructor() {
    this.list = []
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
      }, 1000)
    })) as { status: 'ok' | 'failed' }

    console.log(this.list)
    return response
  }

  async edit(data: ListElement) {
    const response = (await new Promise((resolve) => {
      setTimeout(() => {
        this.list[this.getIndexById(data.id)] = data

        resolve({ status: 'ok' })
      }, 1000)
    })) as { status: 'ok' | 'failed' }

    console.log('edited', data.id)
    return response
  }

  async clear() {
    const response = (await new Promise((resolve) => {
      setTimeout(() => {
        this.list = []

        resolve({ status: 'ok' })
      }, 1000)
    })) as { status: 'ok' | 'failed' }

    console.log('cleared list')
    return response
  }

  async delete(id: string) {
    const response = (await new Promise((resolve) => {
      setTimeout(() => {
        this.list.splice(this.getIndexById(id), 1)

        resolve({ status: 'ok' })
      }, 1000)
    })) as { status: 'ok' | 'failed' }

    console.log('deleted', id)
    return response
  }

  async getAll() {
    const response = (await new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.list)
      }, 1000)
    })) as ListElement[]

    return response
  }
}

export default new Store()
