import React from 'react'
import type { ListElement } from './types'

export default class ListArranger {
  private num: { name: string; grams: number }[]

  constructor() {
    this.num = []
  }

  arrange(list: ListElement[]) {
    list.forEach((entry) => {
      if (entry.num > 0) {
        this.num.push({ name: entry.name, grams: entry.num })
      }
    })
  }
}
