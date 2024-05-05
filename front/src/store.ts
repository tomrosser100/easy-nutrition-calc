import { nanoid } from 'nanoid'
import type { ListElement } from './types'


class Store {
  list: ListElement[]

  constructor() {
    this.list = []
  }

  async add(data: ListElement) {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        const id = nanoid().slice(7)
        const name = data.name
        const num = data.num
    
        //if (this.list[id] !== undefined) resolve({ status: 'failed' })
    
        this.list.push({ id, name, num })
    
        resolve({ status: 'ok' })
      }, 1000)
    }) as { status: 'ok' | 'failed' }

    console.log(this.list)
    return response
  }

  async getAll() {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.list)
      }, 1000)
    }) as ListElement[]

    return response
  }



}

export default new Store()
